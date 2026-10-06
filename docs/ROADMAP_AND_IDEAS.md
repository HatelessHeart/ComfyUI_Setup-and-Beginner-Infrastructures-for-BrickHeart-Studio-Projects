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

---

## 3D & multi-view track  **[next]**  (from Gemini's scan of `G:\DEVstuFF\NEW`, 216 workflows)

Scan facts (from `workflow_report.md`): 216 files, but 122 sit inside `ComfyUI_Test\ComfyUI` and 44 inside `3DSTUDIO\setup` (likely bundled/third-party examples). The studio's own set is ~43 files (`3DSTUDIO\comfyui_workflows` 32, `ComfyUI_Test\workflows` 8, `templates` 3). Those 43 use 96 node types without curated tooltip text. The top 10 missing types fully cover only 11 of the 43. The long tail is pack-specific (Trellis2*, Hy3D*, Meshflow*).

Decisions / to-dos:
- [~] **Tooltips, tiered (tiers 1-2 done, unreviewed):** (1) curate ~30 shared core types by hand (loaders, GGUF, custom-sampler stack, masks, Qwen/Flux2 helpers); (2) pack-specific nodes get an **auto-generated** description (author text from `/object_info`, else a sentence built from input/output types and widgets); (3) teach pipelines at **track level**, not node by node.
- [x] **Tour tracks (done, unreviewed):** make the tour data-driven (`tours/<track>.json`: match rules + steps selected by type/title/nth), auto-pick the best-matching track, let the learner choose. First tracks: 2D Starter (exists), Flux2/Qwen custom-sampler generation, Trellis2 mesh, mesh-projection texturing.
- [ ] **Stage templates for the multi-view -> 3DGS idea:** small stage workflows with a file contract (images + `manifest.json` of view id, azimuth/elevation, seed, prompt) under `templates/3d/`, not one giant graph. Start by mapping the existing `3DSTUDIO` workflows onto the stages.
- [ ] **Keep long-running training outside ComfyUI** (COLMAP / 3DGS optimisation / mesh extraction): hand off by folder + manifest, launched by a human-confirmed script in the same spirit as `download_model.py`.
- [ ] **Risks to resolve before building:** per-view SUPIR may hallucinate different detail in each view and hurt multi-view consistency; generated views have only nominal camera poses (pose refinement may be needed); depth-edge thresholds must scale with the scene, not a fixed metres value; verify each external tool's real capabilities and **licenses** before relying on or sharing them (see `docs/PROJECTS_LICENSE_REGISTER.csv`); 12 GB VRAM means stages run one at a time with unloads.
- [ ] Housekeeping: `workflow_report.md` (222 KB, contains local paths) is in the repo root; move under `docs/reports/` or untrack it before the repo is shared.

### Idea: mesh-first texturing pipeline (owner's direction)  **[idea]**
Instead of photo-style multi-view generation, start from a mesh you own (Trellis2 / Hunyuan3D / Meshflow):
1. render guide passes (depth / normal / part-ID) from exact orbit cameras;
2. paint ONE reference view with an image-edit model (Qwen Edit / Flux2) using the guides;
3. paint remaining views conditioned on that reference (reference-latent, shared seed, inpaint only empty/hidden areas);
4. back-project onto ONE shared UV texture (angle/visibility weighting), inpaint remaining holes in UV space;
5. render the final turntable from the textured mesh: exact cameras, consistent by construction (suitable for 3DGS or a turntable merger).
Roles: DINOv2-style features = cross-view consistency QA / correspondence (not a texture generator); Meta SAM = per-part masks (SAM 2 video propagation may track parts across orbit frames: to be tested). Existing `Qwen Edit Mesh Projection*` and `SAM 3.1 - Part*` workflows may already cover steps 1-4: map them before building anything new.
Risks: seams between views, lighting baked into texture (use flat/unlit passes), poorly seen back/underside areas. Unverified: the capabilities of the external tools and of Apple's turntable script (owner quoted its flags; not inspected).
- [ ] Map existing 3DSTUDIO workflows onto steps 1-5 once `docs/reports/track_facts.md` arrives.

### Status: data-driven tours (built, awaiting real-install verification + instructor review)
- Engine: `tours/*.json` tracks, best-match selection + chooser, subgraph search/entry, draft badge with sources.
- Tracks written from `docs/reports/track_facts.md`: starter_sdxl_supir, flux2_generation, qwen_generation, qwen_edit_inpaint, trellis2_textured_mesh, mesh_projection_albedo. All `reviewed: false`.
- Tooltips: ~50 curated studio node types + auto-generated socket-based descriptions with a length cap for everything else.
- [ ] Gemini: verify on the real frontend that nodes inside subgraphs are found (`app.graph._nodes[i].subgraph`) and that `app.canvas.setGraph(sub)` enters/leaves them; the mesh-projection track steps 10-11 depend on it.
- [ ] Instructor: review every lesson (set `"reviewed": true` per track once approved).
- [ ] **Bitmap-to-material (B2M / ComfyUI-Chord) PBR track:** owner has B2M workflows (4 Chord examples in the scan: image_to_material, flux/sdxl/zimage t2i + image_to_material; nodes ChordLoadModel, ChordMaterialEstimation, ChordNormalToHeight, plus MakeCircularVAE/SeamlessTile). Owner request: "Add B2M PBR workflow and AO" (ambient occlusion). Needs facts first: the real outputs of `ChordMaterialEstimation` (is AO among them?), then a PBR-material track and, if AO is not produced, a way to derive/add it.

### Depth slicing for texturing (owner request: "depth map extractor where you can slice the fraction")
- [x] `custom_nodes/brickheart-depth-tools`: BrickHeart Depth Slice and Depth Slice Stack (math unit-tested with numpy; wrappers tested only against a torch stand-in).
- [ ] Gemini: load in the real ComfyUI, run a depth map (estimate or mesh render pass) through both nodes, confirm outputs and tooltips.
- [ ] Decide the depth source for the studio: depth-estimation node vs depth pass rendered from the mesh (exact). Add a template wiring Depth Slice into the mesh-projection pass (as position guide) once decided.
- [ ] Possible follow-ups: depth to normal map; slice by absolute distance (not fraction) when the depth is metric; a tour track for the depth tools.
- Interpretation note: "slice the fractal" was read as "slice a fraction of the depth range". Confirm with owner.

### Licensing review (before sharing or selling anything)
Owner: the projects are mostly the owner's own code, built on open-source repos and third-party trained models. Own code needs its own `LICENSE`; upstream repos and **model weights** carry separate terms (the usual blocker for commercial use).
- [x] `tools/scan_licenses.py`: read-only inventory with review flags (tested on a synthetic tree; not yet run on the real drive).
- [ ] Gemini: run `python tools/scan_licenses.py G:\DEVstuFF\NEW --out docs/reports/license_scan.md --csv docs/reports/license_scan.csv`, push both.
- [ ] Owner: decide intent (share publicly / sell / internal only); that sets how strict the review must be.
- [ ] Claude: draft updated rows for `docs/PROJECTS_LICENSE_REGISTER.csv` from the scan; owner confirms each model's license on its source page (the scanner cannot see licenses of models downloaded without a model card).
- [ ] Add a `LICENSE` to every project the owner intends to share (currently several show NONE, e.g. "Add B2M PBR workflow and AO", "3D viewer").
- Correction: "Add B2M PBR workflow and AO" is a desktop app (ModernGL/PySide6) that turns albedo projections into normal/roughness/metallic/height/AO maps, not a ComfyUI workflow. Integrate by file hand-off (ComfyUI writes albedo + manifest, the app reads them); needs its entry script and CLI options from Gemini.
