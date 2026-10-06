"""Read-only license inventory for a folder of projects.

Usage:
  python tools/scan_licenses.py <root> [--out report.md] [--csv report.csv]

Treats each immediate sub-folder of <root> as one project and reports, per project:
  - license files found (LICENSE*, COPYING*, NOTICE*, LICENSE_MODEL ...), the opening lines, and
    a keyword guess at the license family
  - FLAGS: wording a human must read (non-commercial, research only, territory limits, share-alike, ...)
  - git remote (read from .git/config; shows which upstream project a folder was cloned or forked from)
  - Python dependencies named in requirements*.txt / pyproject.toml (their licenses are NOT resolved here)
  - model weight files (.safetensors .ckpt .pt .pth .gguf .onnx ...) with sizes, and any Hugging Face
    model-card `license:` found next to them

IMPORTANT: this is an inventory to speed up a human review, not legal advice. Keyword guesses can be
wrong, and a missing license file means "no permission granted", not "free to use".
It never modifies anything except the --out / --csv files you name. Paths in the output are relative to
<root>, so reports don't reveal your drive layout.
"""
import csv
import os
import re
import sys
from pathlib import Path

SKIP_DIRS = {"venv", ".venv", "env", "node_modules", ".git", "__pycache__", "site-packages", "dist", "build", ".idea", ".vscode"}
LICENSE_NAME = re.compile(r"^(licen[sc]e|copying|notice|unlicense)([._-].*)?(\.(txt|md|rst))?$", re.I)
MODEL_EXT = {".safetensors", ".ckpt", ".pt", ".pth", ".bin", ".gguf", ".onnx", ".pkl"}
MAX_LICENSE_DEPTH = 3
MAX_MODEL_DEPTH = 6

FAMILIES = [
    ("AGPL", r"gnu affero general public license"),
    ("LGPL", r"gnu lesser general public license"),
    ("GPL", r"gnu general public license"),
    ("Apache-2.0", r"apache license[\s,]+version 2"),
    ("MIT", r"permission is hereby granted, free of charge"),
    ("BSD", r"redistribution and use in source and binary forms"),
    ("MPL", r"mozilla public license"),
    ("CC", r"creative commons"),
    ("OpenRAIL", r"openrail|responsible ai license"),
    ("Unlicense/CC0", r"this is free and unencumbered software|cc0 1\.0"),
]
FLAG_PATTERNS = [
    ("non-commercial wording", r"non-?commercial|not for commercial|no commercial use|noncommercial"),
    ("research / evaluation only", r"research (purposes )?only|for research|evaluation purposes|academic"),
    ("territory / region limit", r"territory|european union|\bEU\b|united kingdom|south korea|prohibited in"),
    ("share-alike / copyleft", r"share-?alike|copyleft|same license"),
    ("attribution / naming required", r"attribution|must (include|retain|display).*(notice|name|logo)"),
    ("use restrictions on outputs or users", r"acceptable use|use[- ]based restrictions|monthly active users|\bMAU\b"),
    ("separate model terms", r"model (weights|license|terms)|weights are (licensed|released)"),
]
COPYLEFT = {"GPL", "AGPL", "LGPL", "MPL"}
# Hugging Face model-card license ids that need a human decision before commercial use or redistribution
RISKY_CARD = re.compile(r"(^|[-_ ])nc([-_ ]|$)|non-?commercial|research|^other$|openrail|gpl|agpl|unknown", re.I)
MODEL_CARD_LICENSE = re.compile(r"^---\s*\n(.*?)\n---", re.S)


def read_head(path, n=3000):
    try:
        return Path(path).read_text(encoding="utf-8", errors="replace")[:n]
    except OSError:
        return ""


def guess_family(text):
    low = text.lower()
    found = [name for name, pat in FAMILIES if re.search(pat, low)]
    if "GPL" in found and "LGPL" in found:
        found.remove("GPL")
    return found


def flags_for(text):
    return [name for name, pat in FLAG_PATTERNS if re.search(pat, text, re.I)]


def first_lines(text, n=2):
    return [l.strip() for l in text.splitlines() if l.strip()][:n]


def walk(root, max_depth):
    root = Path(root)
    for dirpath, dirs, files in os.walk(root):
        rel = Path(dirpath).relative_to(root)
        depth = 0 if str(rel) == "." else len(rel.parts)
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith("$")]
        if depth >= max_depth:
            dirs[:] = []
        yield Path(dirpath), files


def git_remote(proj):
    cfg = proj / ".git" / "config"
    if not cfg.is_file():
        return ""
    m = re.search(r"\[remote \"origin\"\][^\[]*?url\s*=\s*(\S+)", read_head(cfg, 20000), re.S)
    return m.group(1) if m else ""


def dependencies(proj):
    names = set()
    for dirpath, files in walk(proj, 2):
        for f in files:
            p = dirpath / f
            if re.match(r"requirements.*\.txt$", f, re.I):
                for line in read_head(p, 50000).splitlines():
                    line = line.split("#")[0].strip()
                    if line and not line.startswith(("-", "git+", "http")):
                        names.add(re.split(r"[<>=!~;\[ ]", line)[0].lower())
            elif f == "pyproject.toml":
                txt = read_head(p, 50000)
                m = re.search(r"dependencies\s*=\s*\[(.*?)\]", txt, re.S)
                if m:
                    for q in re.findall(r"[\"']([^\"']+)[\"']", m.group(1)):
                        names.add(re.split(r"[<>=!~;\[ ]", q)[0].lower())
    return sorted(n for n in names if n)


def model_card_license(start_dir, proj):
    """Look for a Hugging Face model card (README.md with YAML front matter) in the weights' folder or its parents."""
    d = start_dir
    while True:
        card = d / "README.md"
        if card.is_file():
            m = MODEL_CARD_LICENSE.match(read_head(card, 6000))
            if m:
                lic = re.search(r"^license:\s*(.+)$", m.group(1), re.M)
                name = re.search(r"^license_name:\s*(.+)$", m.group(1), re.M)
                if lic:
                    return lic.group(1).strip() + (f" ({name.group(1).strip()})" if name else "")
        if d == proj or d.parent == d:
            return ""
        d = d.parent


def scan_project(proj, root):
    rel = lambda p: str(Path(p).relative_to(root)).replace("\\", "/")
    out = {"project": proj.name, "licenses": [], "flags": set(), "families": set(),
           "remote": git_remote(proj), "deps": dependencies(proj), "models": [], "model_licenses": {}}
    for dirpath, files in walk(proj, MAX_LICENSE_DEPTH):
        for f in files:
            if LICENSE_NAME.match(f):
                head = read_head(dirpath / f)
                fam = guess_family(head)
                fl = flags_for(head)
                out["licenses"].append({"file": rel(dirpath / f), "lines": first_lines(head), "family": fam, "flags": fl})
                out["families"].update(fam)
                out["flags"].update(fl)
                if COPYLEFT & set(fam):
                    out["flags"].add("copyleft: obligations may apply if you distribute or combine this code")
    for dirpath, files in walk(proj, MAX_MODEL_DEPTH):
        for f in files:
            if Path(f).suffix.lower() in MODEL_EXT:
                try:
                    size = (dirpath / f).stat().st_size
                except OSError:
                    continue
                if size < 5 * 1024 * 1024:     # ignore tiny files (configs saved as .bin etc.)
                    continue
                lic = model_card_license(dirpath, proj)
                if lic and RISKY_CARD.search(lic):
                    out["flags"].add(f"model license needs a commercial-use check: {lic}")
                out["models"].append({"file": rel(dirpath / f), "mb": round(size / 1048576), "card_license": lic})
                if lic:
                    out["model_licenses"][lic] = out["model_licenses"].get(lic, 0) + 1
    return out


def render(results):
    L = ["# License inventory", "",
         "Inventory to speed up a human review, not legal advice. Keyword guesses can be wrong. "
         "No license file means no permission is granted. Dependency licenses are not resolved here.", ""]
    for r in results:
        L.append(f"## {r['project']}")
        if r["remote"]:
            L.append(f"- git remote: `{r['remote']}`  (upstream: check that project's own license)")
        if not r["licenses"]:
            L.append("- **license files: NONE found** (add one before sharing; until then no one else has permission)")
        else:
            L.append(f"- license family guess: {', '.join(sorted(r['families'])) or 'unknown (read the file)'}")
            for lic in r["licenses"]:
                L.append(f"  - `{lic['file']}`: {' / '.join(lic['lines']) or '(empty)'}"
                         + (f"  [guess: {', '.join(lic['family'])}]" if lic["family"] else ""))
        if r["flags"]:
            L.append(f"- **FLAGS to read in full:** {'; '.join(sorted(r['flags']))}")
        if r["deps"]:
            L.append(f"- python dependencies named ({len(r['deps'])}): {', '.join(r['deps'][:40])}{' …' if len(r['deps']) > 40 else ''}")
        if r["models"]:
            total = sum(m["mb"] for m in r["models"])
            L.append(f"- model weight files: {len(r['models'])} (~{total} MB)")
            if r["model_licenses"]:
                L.append("  - model-card licenses found: " + ", ".join(f"{k} ×{v}" for k, v in sorted(r["model_licenses"].items())))
            missing = [m for m in r["models"] if not m["card_license"]]
            L.append(f"  - weights with NO model-card license found: {len(missing)} of {len(r['models'])}"
                     + (" (check each model's source page)" if missing else ""))
            for m in sorted(r["models"], key=lambda m: -m["mb"])[:8]:
                L.append(f"    - `{m['file']}` ({m['mb']} MB) {('license: ' + m['card_license']) if m['card_license'] else '**license unknown**'}")
        L.append("")
    return "\n".join(L)


def main():
    argv = sys.argv[1:]
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__); sys.exit(1)
    root = Path(argv[0]).resolve()
    if not root.is_dir():
        print(f"Not a folder: {root}"); sys.exit(2)
    out_md = out_csv = None
    if "--out" in argv:
        out_md = Path(argv[argv.index("--out") + 1])
    if "--csv" in argv:
        out_csv = Path(argv[argv.index("--csv") + 1])
    projects = sorted(p for p in root.iterdir() if p.is_dir() and p.name not in SKIP_DIRS and not p.name.startswith("."))
    results = [scan_project(p, root) for p in projects]
    text = render(results)
    print(text)
    if out_md:
        out_md.write_text(text, encoding="utf-8"); print(f"\nSaved {out_md}")
    if out_csv:
        with open(out_csv, "w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh)
            w.writerow(["project", "license_files", "family_guess", "flags", "git_remote", "dependency_count", "model_files", "model_card_licenses", "weights_without_license"])
            for r in results:
                w.writerow([r["project"], ";".join(l["file"] for l in r["licenses"]) or "NONE", ";".join(sorted(r["families"])),
                            ";".join(sorted(r["flags"])), r["remote"], len(r["deps"]), len(r["models"]),
                            ";".join(f"{k} x{v}" for k, v in sorted(r["model_licenses"].items())),
                            sum(1 for m in r["models"] if not m["card_license"])])
        print(f"Saved {out_csv}")


if __name__ == "__main__":
    main()
