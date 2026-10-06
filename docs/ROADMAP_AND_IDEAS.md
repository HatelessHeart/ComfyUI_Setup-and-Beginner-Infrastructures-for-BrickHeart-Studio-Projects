# Roadmap, To-Dos & Ideas

Living notes for the BrickHeart ComfyUI workspace. Owner/instructor: BrickHeart Studio.
Roles: Claude = analyst/architect (reasoning, review, proposals on a branch); Gemini/Antigravity = hands-on tester with the real ComfyUI. Changes land on `main` only after owner approval.

Legend: **[open]** not started · **[next]** near future · **[idea]** unscoped · **[done]**

---

## Near future: sharing this with other people  **[next]**

The question: how do we make this available to others? Plugin, or something else?

### What we have today (architecture)
- `custom_nodes/comfyui-ui-tooltips/` is a **frontend-only ComfyUI extension**: `__init__.py` just exposes `WEB_DIRECTORY = "./web"`; there are no Python nodes and no backend code.
- Files in `web/`: `tooltips.js` (shared knowledge + hover text), `teach_tour.js` (guided tour), `connect_helper.js` (wire-drag helper), `spatial_grid.js` (finder HUD / grid).
- It talks only to the user's own local ComfyUI (`/object_info`). No outside network calls, no telemetry, no downloads.
- The rest of the repo (`setup.ps1`, `run_comfyui.ps1`, `download_model.py`, `templates/`, `config/`) is a **workspace kit**, not a plugin: it builds an isolated ComfyUI + SUPIR install tuned for an RTX 3060 12 GB.

### Options to weigh
1. **Ship the extension alone as a ComfyUI custom node.** Smallest unit. Anyone drops the folder into `custom_nodes/` (or installs through ComfyUI-Manager / the Comfy Registry). Works with any workflow; no model or Python dependencies.
2. **Ship the whole workspace kit** (this repo). Best for beginners who have nothing installed yet: one script gives a working, isolated setup plus templates and the tour. Heavier to support (Windows/PowerShell only today; pinned versions).
3. **Both:** split into two repos (or a subfolder published separately): `brickheart-comfy-teach` (the extension) and `brickheart-workspace-kit` (setup + templates). Likely the best long-term shape: the extension is useful to everyone, the kit is useful to beginners on our exact stack.

Leaning: option 3, starting by making the extension independently installable.

### To-dos before sharing
- [ ] Decide the name, repo layout and which license applies to the extension (repo is MIT-scoped; check `LICENSE`, `THIRD_PARTY_NOTICES.md`, `docs/PROJECTS_LICENSE_REGISTER.csv`).
- [ ] Add packaging metadata for the Comfy Registry / Manager (e.g. `pyproject.toml`) and an extension-level README with screenshots. **Verify the current registry requirements first; do not assume.**
- [ ] Test across ComfyUI frontend versions. Known risk: the wire-drag detection and widget positions differ between builds (see Verification below).
- [ ] Make the extension self-contained: it must not assume this repo's templates exist (tour already skips missing nodes; add a friendly empty state).
- [ ] Make the kit portable (macOS/Linux scripts, or document Windows-only clearly).
- [ ] Support story: how users report bugs; include `BrickHeartConnect.debug()` output in the template.

### Processing power / cost: measure, don't guess
What the design implies (not yet measured):
- **GPU/VRAM:** none. Everything is browser-side JavaScript; it does not touch model memory.
- **CPU:** the tour redraws one canvas each frame only while it is open. The connection helper runs one cheap property check per frame always (idle cost should be negligible) and does real work only when a wire drag starts.
- **Network/memory:** one `/object_info` fetch (can be large with many custom nodes), cached 30 s; refetch on `↻`.
- [ ] Measure on the real install: frame cost with tour open, idle cost with helper on, `/object_info` size and fetch time with this install's nodes, and the same on a heavily-modded install. Record numbers here.

---

## Knowledge & teaching content  **[next]**

Where the content comes from (be explicit with learners):
- **Live from the user's ComfyUI (trustworthy):** installed nodes, socket types, model files, node author descriptions, actual widgets on the canvas.
- **Written by Claude from general knowledge, partly cross-checked against this repo's README and templates (needs owner review):** `tooltips.js` dictionaries and the `STEPS` tour copy.

- [ ] Move tour copy into a reviewable data file with a **source tag per claim** (README / template value / owner-tested / upstream doc) and an **"unverified"** flag until the owner signs off.
- [ ] Owner review pass: approve or correct every factual claim (examples to check: Turbo cfg ≈ 1, clip-skip guidance, LoRA strength ranges, SUPIR `s_churn` explanation).
- [ ] Auto-generate a **structural fallback tour** for any workflow from the graph itself (what each node is, inputs, outputs, order), while keeping the "why / try it" teaching curated.
- [ ] Decision recorded: **no live LLM-written explanations at runtime** (cost, network, hallucination risk; conflicts with the zero-cost local design). Revisit only if the owner asks.

---

## Verification status

- Tour (`314ff88`) tested on the real install by Gemini: node box + pan/zoom/resize OK.
- Found and fixed: gold ring used `last_y` (absent in current builds; now supports `y` and Vue DOM rows); Queue box selected a hidden 0x0 legacy button (now picks the first visible match). Fixes verified in a mock only.
- [ ] Gemini to re-verify on the real install: gold ring on `steps` / `denoise` / `EDM_s_churn`; Queue box on the Run button.
- [ ] Gemini to verify the Connection Helper: does the panel open on a wire drag? If not, send `BrickHeartConnect.debug()` output captured during a drag.
- [ ] Gemini to confirm clicking a row / model chip adds and wires the node correctly on the real frontend.

## Ideas  **[idea]**

- Make the Connection Helper panel draggable / dockable so it never covers the wire target.
- Per-workflow tours stored next to templates (`templates/03_...tour.json`), so teaching content travels with the workflow.
- "Why is my output bad?" troubleshooting checklist overlay keyed to the Lessons Learned in the README.
- Show estimated VRAM impact for model choices (FP8, tiled VAE) in the helper rows.
- Localization of tour/tooltip text.
