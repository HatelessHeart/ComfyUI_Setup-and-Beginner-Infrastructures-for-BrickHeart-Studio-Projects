"""Read-only: extract the facts needed to write an accurate guided-tour track.

Usage:
  python tools/extract_track_facts.py <workflow.json> [more.json ...] \
      [--object-info http://127.0.0.1:8188/object_info | saved.json] [--out facts.md]

For each workflow it prints, in left-to-right order:
  - every node: id, type, title, current widget values (named when --object-info is given)
  - what feeds each node (source node/type via each wired input)
  - groups (names) if the workflow has any
and, with --object-info, the node author's description + category for each type.
Nothing is modified or uploaded. --object-info only talks to the URL you give it
(normally your own local ComfyUI).
"""
import json, sys, urllib.request
from pathlib import Path

PRIMS = {"INT", "FLOAT", "STRING", "BOOLEAN", "COMBO"}


def load_oi(src):
    if src.startswith("http"):
        with urllib.request.urlopen(src, timeout=20) as r:
            return json.load(r)
    return json.loads(Path(src).read_text(encoding="utf-8"))


def widget_names(def_):
    """Best-effort ordered widget names from /object_info (UI saves values in this order)."""
    names = []
    for group in ("required", "optional"):
        for name, cfg in ((def_.get("input") or {}).get(group) or {}).items():
            spec = cfg[0]
            opts = cfg[1] if len(cfg) > 1 and isinstance(cfg[1], dict) else {}
            is_widget = isinstance(spec, list) or spec in PRIMS
            if is_widget and not opts.get("forceInput"):
                names.append(name)
                if name in ("seed", "noise_seed"):
                    names.append("control_after_generate")
    return names


def short(v):
    s = json.dumps(v, ensure_ascii=False)
    return s if len(s) <= 160 else s[:157] + "..."


def describe(path, oi, out):
    d = json.loads(Path(path).read_text(encoding="utf-8"))
    if not isinstance(d.get("nodes"), list):
        out.append(f"## {path}\n- not a UI-format workflow (no `nodes` list); re-save it from ComfyUI's menu (Save, not Save API)\n")
        return set()
    nodes = {n["id"]: n for n in d["nodes"]}
    link_src = {}
    for l in d.get("links") or []:
        if isinstance(l, list) and len(l) >= 5:
            link_src[l[0]] = (l[1], l[2])          # link id -> (origin node, origin slot)
        elif isinstance(l, dict):
            link_src[l["id"]] = (l["origin_id"], l["origin_slot"])
    out.append(f"## {path}")
    out.append(f"- nodes: {len(nodes)}")
    groups = [g.get("title") for g in d.get("groups") or []]
    if groups:
        out.append(f"- groups: {', '.join(g for g in groups if g)}")
    out.append("")
    types = set()
    for n in sorted(nodes.values(), key=lambda n: (n.get("pos", [0, 0])[0], n.get("pos", [0, 0])[1])):
        t = n.get("type")
        types.add(t)
        out.append(f"### [{n['id']}] {t}  —  “{n.get('title') or t}”   pos={[round(x) for x in n.get('pos', [0, 0])]}")
        vals = n.get("widgets_values")
        if vals not in (None, [], {}):
            names = widget_names(oi[t]) if oi and t in oi else []
            if isinstance(vals, list):
                # Only trust the names when the counts agree exactly; a shifted label is worse than none.
                trusted = bool(names) and len(names) == len(vals)
                if names and not trusted:
                    out.append(f"  - WARNING: {len(vals)} saved values but {len(names)} widget names in /object_info; names not applied (installed node version may differ from the one the workflow was saved with)")
                for i, v in enumerate(vals):
                    out.append(f"  - {names[i] if trusted else f'value[{i}]'}: {short(v)}")
            else:
                out.append(f"  - values: {short(vals)}")
        fed = []
        for inp in n.get("inputs") or []:
            lk = inp.get("link")
            if lk is not None and lk in link_src:
                src_id, _ = link_src[lk]
                st = nodes.get(src_id, {}).get("type", "?")
                fed.append(f"{inp.get('name')}({inp.get('type')}) ← [{src_id}] {st}")
        if fed:
            out.append("  - fed by: " + "; ".join(fed))
        if n.get("mode") in (2, 4):
            out.append(f"  - NOTE: node is {'muted' if n['mode'] == 2 else 'bypassed'}")
        out.append("")
    return types


def main():
    argv = sys.argv[1:]
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__); sys.exit(1)
    oi_src = out_path = None
    files = []
    i = 0
    while i < len(argv):
        if argv[i] == "--object-info":
            oi_src = argv[i + 1]; i += 2
        elif argv[i] == "--out":
            out_path = argv[i + 1]; i += 2
        else:
            files.append(argv[i]); i += 1
    oi = load_oi(oi_src) if oi_src else None
    out = ["# Track facts", ""]
    all_types = set()
    for f in files:
        all_types |= describe(f, oi, out)
    if oi:
        out += ["## Node catalogue entries for the types above", ""]
        for t in sorted(x for x in all_types if x):
            d = oi.get(t)
            if not d:
                out.append(f"- **{t}**: NOT in /object_info (node pack not installed or renamed)")
                continue
            ins = []
            for g in ("required", "optional"):
                for name, cfg in ((d.get("input") or {}).get(g) or {}).items():
                    ins.append(f"{name}:{cfg[0] if isinstance(cfg[0], str) else 'COMBO'}")
            outs = ", ".join(f"{n}:{t2}" for n, t2 in zip(d.get("output_name") or d.get("output") or [], d.get("output") or []))
            out.append(f"- **{t}** ({d.get('display_name', t)}), category `{d.get('category', '')}`")
            out.append(f"  - description: {d.get('description') or '(none)'}")
            out.append(f"  - inputs: {', '.join(ins) or '(none)'}")
            out.append(f"  - outputs: {outs or '(none)'}")
    text = "\n".join(out)
    if out_path:
        Path(out_path).write_text(text, encoding="utf-8")
        print(f"Saved {out_path} ({len(text)} chars)")
    else:
        print(text)


if __name__ == "__main__":
    main()
