# ComfyUI Setup & Beginner Infrastructures for BrickHeart Studio Projects

An isolated, reproducible ComfyUI workspace with beginner-friendly workflows, hover tooltips, and a human-in-the-loop model downloader. Tuned for an **RTX 3060 12 GB**.

## What's inside

| Path | Purpose |
| --- | --- |
| `setup.ps1` | Clones pinned ComfyUI + ComfyUI-SUPIR, builds `venv` (Python 3.11, PyTorch 2.6 cu124), applies model-path config |
| `run_comfyui.ps1` / `.bat` | Launches the server on `127.0.0.1:8188` with workspace-local input/output/temp/cache |
| `download_model.py` | Model gatekeeper: audits size/destination and **asks for confirmation** before any download |
| `config/extra_model_paths.yaml` | Maps model folders to `./models`; add extra entries to mount existing weights without copying |
| `custom_nodes/comfyui-ui-tooltips` | Frontend extension: hover explanations for nodes/sockets/widgets, guided tour, connection helper, finder HUD |
| `custom_nodes/brickheart-depth-tools` | Backend nodes: slice a depth map by depth fraction (near/far band, or N bands) for texturing guides |
| `templates/`, `workflows/` | Workflow JSONs (API + UI canvas) and canvas previews |
| `tools/inspect_workflows.py` | Read-only report: which lesson tracks match, and which node types lack curated tooltips, for any folder of workflow JSONs |
| `tools/extract_track_facts.py` | Read-only: dumps a workflow's node chain, wiring, values and node-catalogue descriptions so a tour track can be written accurately |
| `tools/scan_licenses.py` | Read-only license inventory for a folder of projects: license files, review flags (non-commercial, territory, copyleft), git remotes, dependencies, model-card licenses |
| `dispatch_workflow.py` | Submits an API-format workflow to the running server |

## Workflows

1. `01_baseline_sdxl_turbo.json` — SDXL Turbo, 512×512, 2 steps.
2. `02_sdxl_turbo_to_supir_2stage.json` — Turbo draft → SUPIR 2× upscale (SDXL Base backbone, FP8 UNet, `s_churn=0`, Wavelet colour fix, tiled VAE).
3. `03_turbo_inpaint_supir_3stage.json` — Turbo → **Stage 1.5 inpaint** (LoadImage Mask Editor bridge + SDXL Base) → SUPIR.

UI versions (`*_ui.json`) have colour-coded groups; load them via **Load** in the web UI.

## Guided Tour & Spatial Pilot HUD (In-Browser)

Teaching overlays shipped by `custom_nodes/comfyui-ui-tooltips` (all local, zero API cost):
* **Guided Tour (`teach_tour.js`, data-driven):** click **🎓 Learn this workflow** (bottom-left) or **▶ Start Guided Tour** in the HUD. Lessons are JSON "tracks" in `custom_nodes/comfyui-ui-tooltips/web/tours/` (listed in `tours/index.json`), not code. The tour scores each track against the workflow on your canvas, starts the best match (or shows a chooser), and for each step glides to the real node, dims the rest, rings the key setting in gold and explains it with a "Try it" experiment. `←` `→` move, `Esc` exits. Steps for nodes not in the workflow are skipped; nodes inside subgraphs (collapsed components) are found and opened for that step. Every track carries `reviewed: false` until the instructor signs off, and the card says so ("Draft lesson") with its source. Current tracks: 2D starter (SDXL Turbo/inpaint/SUPIR), Flux2 generation, Qwen generation, Qwen Edit inpainting, TRELLIS.2 mesh, mesh projection → albedo. To add or fix a lesson, edit its JSON file (format is in the header of `teach_tour.js`).
* **Spatial Pilot HUD (`spatial_grid.js`):** draggable/minimizable panel with a keyword finder (`denoise`, `seed`, `supir`) that centers the canvas on the match, optional Chrome voice input, and an alphanumeric grid overlay (`G`, cells `A1`–`T12`).

## Connection Helper & universal tooltips

* **Connection Helper (`connect_helper.js`):** drag a wire off any socket and a panel lists what can legally plug into it, using your own running ComfyUI's node catalogue (`/object_info`), so it only offers nodes that are actually installed.
  * Drag from an **output** (e.g. `LATENT`) → nodes with an input that accepts it. Drag from an **input** (e.g. needs `VAE`) → nodes that produce it.
  * Sections: *already on your canvas* (free matching sockets), *★ used in your BrickHeart workflows*, then everything else installed.
  * Loader rows show the model files you actually have as chips. Click a chip to add the node already set to that file and wired up. If a slot has no files, it says so and points you to `download_model.py` (the helper never downloads anything itself).
  * The panel stays open after you release the wire. `↻` re-scans after you add models or custom nodes; `Esc` closes. Wildcard (`*`) sockets and deprecated nodes are never suggested. Console: `BrickHeartConnect.debug()` shows which drag fields your ComfyUI build exposes.
* **Tooltips on almost everything:** curated text for sockets, widgets and core/SUPIR/inpaint nodes; any other installed node (including custom nodes) falls back to its author's own description or its category; unknown widgets get a type-based explanation. The tour, HUD and helper controls all carry their own tooltips.

See [`docs/ROADMAP_AND_IDEAS.md`](docs/ROADMAP_AND_IDEAS.md) for the roadmap, open to-dos and ideas (including how to share this with others).

## Quick start

```powershell
.\setup.ps1
python download_model.py --dry-run <hf_repo_or_url>   # audit first, then confirm to download
.\run_comfyui.ps1
```

Models expected (not in this repo): `sd_xl_base_1.0.safetensors` and `SUPIR-v0Q_fp16.safetensors` in `models/checkpoints/`, SDXL Turbo diffusers snapshot in `models/diffusers/sdxl-turbo/`.

## Lessons learned

- SUPIR "alligator skin / craquelure" artifacts → `s_churn = 0`, `s_noise = 1.0`; never use SDXL Turbo as the SUPIR backbone (use SDXL Base).
- Keep SUPIR `cfg` ≈ 2.5–3.5, 20–30 steps, tile size 512, FP8 UNet on 12 GB.

## Roadmap (BrickHeart tool integration)

Planned bridges for local tools: ComfyUI-Chord (PBR maps), Depth-Anything-3, BiRefNet/RMBG, TripoSG/TripoSplat. See the integration notes in project discussions; weights stay on disk and are mounted via `extra_model_paths.yaml`.

## Notes

- Model weights, `venv`, caches and outputs are git-ignored.
- Upstream licenses apply to ComfyUI and ComfyUI-SUPIR (and SUPIR weights).
