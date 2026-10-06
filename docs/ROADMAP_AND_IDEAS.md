# Roadmap, To-Dos & Ideas

Living notes for the BrickHeart ComfyUI workspace. Owner/instructor: BrickHeart Studio.
Roles: Claude = analyst/architect (reasoning, review, proposals on a branch); Gemini/Antigravity = hands-on tester with the real ComfyUI. Changes land on `main` only after owner approval.

Legend: `[ ]` open · `[~]` partly done · `[x]` done. Branch in use: `claude/gallant-franklin-r2rdoj`.

---

## 1. Where things stand

**Built (all in this repo):**
- Guided tour, data-driven: `custom_nodes/comfyui-ui-tooltips/web/tours/*.json` (6 tracks: 2D starter, Flux2 generation, Qwen generation, Qwen Edit inpainting, TRELLIS.2 mesh, mesh projection → albedo). Best-match selection, lesson chooser, subgraph support. Every track is `reviewed: false` and the card says "Draft lesson".
- Connection Helper (drag a wire, see what can plug in, using the live `/object_info`).
- Tooltips on almost everything (~50 curated studio node types, generated descriptions for the rest).
- Spatial Pilot HUD (finder, voice, grid overlay).
- `custom_nodes/brickheart-depth-tools`: Depth Slice and Depth Slice Stack (backend Python nodes).
- Read-only tools in `tools/`: `inspect_workflows.py`, `extract_track_facts.py`, `scan_licenses.py`.
- Reports from the owner's machine in `docs/reports/`: `workflow_report.md` (216 workflows scanned), `track_facts.md` (8 production workflows).

**Tested:** JS and JSON syntax, 13 depth-math tests (mutation-checked), 4 node-wiring tests against a torch *stand-in*, and the tour/helper in a headless-browser mock. **Verified live by Gemini on the real ComfyUI (frontend 1.53.6, Vue nodes):** tour node box, gold ring, Queue-button box, pan/zoom/resize, Connection Helper (83 candidates, click-to-add and wire).

**Not yet verified on the real install:** the five new tracks, subgraph handling, the depth tools inside ComfyUI, the license scan.

---

## 2. Decisions (owner)

- **License:** this repo's `LICENSE` is *All rights reserved* (provisional), changed from MIT, until the licenses of the upstream repos and models used by the studio's projects have been reviewed. Anyone who copied the repo while it was MIT keeps those rights for that copy. Third-party code and model weights are outside this notice (see `THIRD_PARTY_NOTICES.md`).
- **No live LLM-written explanations at runtime** (cost, network, hallucination risk; conflicts with the zero-cost local design). Revisit only if the owner asks.
- **"Slice the fractal"** was text pasted from a different project. The depth tools slice a *fraction of a depth range*, as built.
- **B2M** ("Add B2M PBR workflow and AO") is a desktop app (ModernGL/PySide6) that turns albedo projections into normal/roughness/metallic/height/AO maps. It is not a ComfyUI workflow. Integrate by file hand-off (ComfyUI writes albedo + manifest, the app reads them).
- Long-running jobs (COLMAP, 3DGS training, mesh extraction) stay **outside** ComfyUI, launched by a human-confirmed script in the spirit of `download_model.py`.

---

## 3. Waiting on Gemini (real-install checks)

- [ ] Re-run the tour on the 5 studio workflows; report which lesson opens, step counts, any missing cyan box / gold ring (screenshots).
- [ ] Subgraph check on `Qwen Edit Mesh Projection - Albedo`: do nodes inside the collapsed component appear in `app.graph._nodes[i].subgraph`, and does `app.canvas.setGraph(sub)` enter/leave it? Mesh-projection steps 10-11 depend on it.
- [ ] Depth tools: load `brickheart-depth-tools`, confirm both nodes appear under BrickHeart/depth, run a depth map through them, check histogram preview and tooltips; run `tests/test_depth_slice.py`.
- [ ] `python tools/scan_licenses.py G:\DEVstuFF\NEW --out docs/reports/license_scan.md --csv docs/reports/license_scan.csv`, push both.
- [ ] B2M app: entry script, inputs/outputs, CLI options (can ComfyUI call it as a step?).
- [ ] `PhotoSplat3D/turntable_merger.py`: first 30 lines, argument list, license files.
- [ ] Chord workflows: `python tools/extract_track_facts.py <chord workflows> --object-info http://127.0.0.1:8188/object_info --out docs/reports/chord_facts.md`; report the output names of `ChordMaterialEstimation` (is there an AO output?).
- [ ] Reconcile earlier answers that disagreed with the repo: workflow counts per folder, stage names, node descriptions in `/object_info`.

## 4. Waiting on the owner

- [ ] **Review every lesson** in `tours/*.json` (set `"reviewed": true` per track once approved). Claims that are not numbers copied from workflows are Claude's general knowledge (examples to check: Turbo cfg ≈ 1, LoRA/GGUF explanations, SUPIR `s_churn`, the albedo-LoRA explanation).
- [ ] **Intent for sharing:** public, sold, or internal only. This sets how strict the license review must be.
- [ ] Confirm the license status of this repo (currently all rights reserved) and which projects get a `LICENSE`.
- [ ] Decide the depth source for texturing: depth-estimation node vs depth pass rendered from the mesh (exact).

---

## 5. Backlog

### A. Sharing this with other people
Architecture today: `comfyui-ui-tooltips` is a **frontend-only** extension (`WEB_DIRECTORY = "./web"`). `brickheart-depth-tools` is a **backend** pack (Python nodes, needs torch, which ComfyUI always has). The rest (`setup.ps1`, `run_comfyui.ps1`, `download_model.py`, `templates/`, `config/`) is a **workspace kit** that builds an isolated ComfyUI + SUPIR install for an RTX 3060 12 GB. Everything talks only to the user's own local ComfyUI; no outside network calls, no telemetry, no downloads.

Options:
1. Ship the extension alone as a ComfyUI custom node (smallest unit; ComfyUI-Manager / Comfy Registry).
2. Ship the whole workspace kit (best for beginners with nothing installed; heavier to support, Windows/PowerShell only today).
3. Both, as two repos: `brickheart-comfy-teach` (extension, depth tools) and `brickheart-workspace-kit` (setup + templates). Leaning this way.

- [ ] Name, repo layout, license for the extension (see Decisions).
- [ ] Packaging metadata for the Comfy Registry / Manager (e.g. `pyproject.toml`) and an extension-level README with screenshots. **Verify current registry requirements first; do not assume.**
- [ ] Test across ComfyUI frontend versions (wire-drag detection and widget positions differ between builds).
- [ ] Make the extension self-contained: the tour already skips missing nodes; add a friendly empty state.
- [ ] Make the kit portable (macOS/Linux scripts, or document Windows-only clearly).
- [ ] Support story: how users report bugs; ask for `BrickHeartConnect.debug()` output.
- [ ] **Measure processing cost on the real install** (design implies zero GPU/VRAM; the tour redraws a canvas only while open; the helper does one cheap check per frame and real work only on wire drag; one cached `/object_info` fetch): frame cost with tour open, idle cost with helper on, `/object_info` size and fetch time, same on a heavily-modded install. Record numbers here.

### B. Teaching content
Sources: **live from the user's ComfyUI** (installed nodes, sockets, model files, author descriptions, actual widgets) is trustworthy; **written by Claude from general knowledge, cross-checked against the repo's templates and `track_facts.md`** needs owner review.
- [x] Tour copy lives in reviewable JSON with a source per step and a draft badge.
- [x] Tooltips tiers 1-2: curated core types + auto-generated descriptions (length-capped).
- [ ] Auto-generate a **structural fallback tour** for any workflow with no matching track (what each node is, inputs, outputs, order), keeping the "why / try it" curated.
- [ ] New tracks for the remaining studio families (SAM parts, Hy3D, Meshflow, upscaling, depth tools, B2M hand-off). `tools/inspect_workflows.py` lists which real workflows have no matching lesson.

### C. 3D & multi-view pipeline
Scan facts (`docs/reports/workflow_report.md`): 216 files, but 122 are inside `ComfyUI_Test\ComfyUI` (bundled upstream examples) and 44 inside `3DSTUDIO\setup`. The studio's own set is ~43 files. They use 96 node types without curated tooltip text; the long tail is pack-specific (Trellis2*, Hy3D*, Meshflow*).

**Mesh-first texturing pipeline (owner's direction):**
1. render guide passes (depth / normal / part-ID) from exact orbit cameras;
2. paint ONE reference view with an image-edit model (Qwen Edit / Flux2) using the guides;
3. paint remaining views conditioned on that reference (reference-latent, shared seed, inpaint only empty/hidden areas);
4. back-project onto ONE shared UV texture (angle/visibility weighting), inpaint remaining holes in UV space;
5. render the final turntable from the textured mesh: exact cameras, consistent by construction (suitable for 3DGS or a turntable merger).

Roles: DINOv2-style features = cross-view consistency QA / correspondence (not a texture generator); Meta SAM = per-part masks (SAM 2 video propagation may track parts across orbit frames: to be tested). `Qwen Edit Mesh Projection - Albedo` already does the paint stage and runs a Flux2 pass with a `PBRFusion4_Albedo` LoRA (by its name, meant to remove baked-in lighting).
Risks: seams between views, baked-in lighting (use flat/unlit passes), poorly seen back/underside areas; per-view SUPIR may hallucinate different detail per view; depth-edge thresholds must scale with the scene; 12 GB VRAM means stages run one at a time with unloads.

- [~] Map existing `3DSTUDIO` workflows onto steps 1-5 (mesh-projection track done; the rest pending `docs/reports` input).
- [ ] Stage templates with a file contract (images + `manifest.json` of view id, azimuth/elevation, seed, prompt) under `templates/3d/`, not one giant graph.
- [ ] Verify each external tool's real capabilities and **licenses** before relying on or sharing them.

### D. Depth tools
- [x] Depth Slice + Depth Slice Stack built and math-tested (see Section 3 for real-install check).
- [ ] Template wiring Depth Slice into the mesh-projection pass as the position guide, once the depth source is decided.
- [ ] Possible follow-ups: depth to normal map; slice by absolute distance when depth is metric; a tour track for the depth tools.

### E. Bitmap-to-material (B2M)
- [ ] Integrate the B2M desktop app by file hand-off (needs its CLI/entry script from Gemini). Owner request also mentions AO.
- [ ] ComfyUI-Chord examples (4 in the scan: image_to_material; flux/sdxl/zimage t2i + image_to_material; nodes `ChordLoadModel`, `ChordMaterialEstimation`, `ChordNormalToHeight`, plus `MakeCircularVAE`/`SeamlessTile`): once `chord_facts.md` shows the real outputs (is AO among them?), write a PBR-material track and, if AO is not produced, decide how to derive it.

### F. Licensing review (before sharing or selling anything)
The projects are mostly the owner's own code, built on open-source repos and third-party trained models. Own code needs its own `LICENSE`; upstream repos and **model weights** carry separate terms (the usual blocker for commercial use). `docs/PROJECTS_LICENSE_REGISTER.csv` already flags, from the owner's earlier scan, non-commercial items (e.g. SuGaR, instant-ngp, PhotoSplat3D's model license, the Qwen viewpoint-orbit LoRA), copyleft items (e.g. mandelbulber2, Mesh-simplification, StabilityMatrix) and the Tencent community license (Hunyuan). Not independently verified.
- [x] `tools/scan_licenses.py` built (tested on a synthetic tree; not yet run on the real drive).
- [ ] Claude: draft updated register rows from the scan; owner confirms each model's license on its source page (the scanner cannot see licenses of models downloaded without a model card).
- [ ] Add a `LICENSE` to every project the owner intends to share (several show NONE, e.g. "Add B2M PBR workflow and AO", "3D viewer").

---

## 6. Ideas  **[idea]**

- Make the Connection Helper panel draggable / dockable so it never covers the wire target.
- Per-workflow tours stored next to templates, so teaching content travels with the workflow.
- "Why is my output bad?" troubleshooting checklist overlay keyed to the README's Lessons Learned.
- Show estimated VRAM impact for model choices (FP8, tiled VAE) in the helper rows.
- Derive the Connection Helper's ★ list from the tour tracks instead of a hard-coded list.
- Localization of tour/tooltip text.
