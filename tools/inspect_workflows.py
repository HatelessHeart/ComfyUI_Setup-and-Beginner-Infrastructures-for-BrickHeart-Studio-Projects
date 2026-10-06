"""Read-only report: how will the guided tour and tooltips treat YOUR workflow files?

Usage:  python tools/inspect_workflows.py <folder> [--out report.md]

Scans a folder (recursively) for ComfyUI workflow JSON files, then for each one lists:
  - node types and titles found
  - which guided-tour steps would show / be skipped (read from teach_tour.js)
  - node types with no curated tooltip text (they fall back to the node author's
    description or category; read from tooltips.js)
It only reads files. It never modifies or uploads anything.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "custom_nodes" / "comfyui-ui-tooltips" / "web"


def tour_steps():
    src = (WEB / "teach_tour.js").read_text(encoding="utf-8")
    block = src[src.index("const STEPS = ["):src.index("const GOLD")]
    steps = []
    for m in re.finditer(r"find:\s*\{\s*type:\s*\"([^\"]+)\"(?:,\s*nth:\s*(\d+))?\s*\}[^\n]*\n(?:\s*focus:\s*(\[[^\]]*\]|\"[^\"]*\"),)?\s*title:\s*\"([^\"]+)\"", block):
        steps.append((m.group(1), int(m.group(2) or 0), m.group(4)))
    if "queue: true" in block:
        steps.append((None, 0, "Run it (Queue button)"))
    return steps


def curated_types():
    src = (WEB / "tooltips.js").read_text(encoding="utf-8")
    block = src[src.index("export const NODE_ROLE_DESCRIPTIONS"):src.index("export const BUTTON_DESCRIPTIONS")]
    return set(re.findall(r"^\s*\"([A-Za-z0-9_]+)\":", block, re.M))


def load_nodes(path):
    try:
        d = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None
    if isinstance(d, dict) and isinstance(d.get("nodes"), list):          # UI format
        return [(n.get("type"), n.get("title") or n.get("type"), n.get("pos") or [0, 0]) for n in d["nodes"] if isinstance(n, dict)]
    if isinstance(d, dict) and d and all(isinstance(v, dict) and "class_type" in v for v in d.values()):  # API format
        return [(v["class_type"], (v.get("_meta") or {}).get("title") or v["class_type"], [0, 0]) for v in d.values()]
    return None


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        print(__doc__); sys.exit(1)
    folder = Path(args[0])
    out = None
    if "--out" in sys.argv:
        out = Path(sys.argv[sys.argv.index("--out") + 1])
    steps, curated = tour_steps(), curated_types()
    lines = [f"# Workflow inspection: {folder}", ""]
    found = 0
    for p in sorted(folder.rglob("*.json")):
        if any(part in {"node_modules", "venv", ".git"} for part in p.parts):
            continue
        nodes = load_nodes(p)
        if not nodes:
            continue
        found += 1
        types = {}
        for t, title, pos in nodes:
            types.setdefault(t, []).append((pos[0] if pos else 0, title))
        lines += [f"## {p}", f"- nodes: {len(nodes)}  |  distinct types: {len(types)}"]
        lines.append("- tour steps:")
        shown = 0
        for t, nth, title in steps:
            if t is None:
                ok = True
            else:
                ok = len(types.get(t, [])) > nth
            shown += ok
            lines.append(f"  - {'SHOW ' if ok else 'skip '} {title}" + ("" if ok or t is None else f"  (needs {t} #{nth + 1})"))
        lines.append(f"- tour would run {shown}/{len(steps)} steps" + ("  **(no tour: need at least 2)**" if shown < 2 else ""))
        missing = sorted(t for t in types if t and t not in curated)
        lines.append(f"- types WITHOUT curated tooltip text ({len(missing)}): " + (", ".join(missing) if missing else "none"))
        lines.append("")
    if not found:
        lines.append("No ComfyUI workflow JSON files found.")
    text = "\n".join(lines)
    print(text)
    if out:
        out.write_text(text, encoding="utf-8")
        print(f"\nSaved to {out}")


if __name__ == "__main__":
    main()
