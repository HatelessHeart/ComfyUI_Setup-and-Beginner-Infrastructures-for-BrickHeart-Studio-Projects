# ComfyUI Pipeline Templates Directory

This directory contains standardized, validated workflow templates for our isolated ComfyUI workspace running on Windows (NVIDIA RTX 3060 12GB).

All templates are pre-formatted for direct loading in the ComfyUI web UI (`http://127.0.0.1:8188`), equipped with active socket/widget tooltips via `comfyui-ui-tooltips`, and structured into visual LiteGraph color groups.

---

## Template Catalog

### `01_baseline_sdxl_turbo.json`
* **Architecture:** 1-Stage Draft Synthesis (Text-to-Image)
* **Resolution:** $512 \times 512$
* **Execution Time:** ~2.1 seconds
* **Peak VRAM:** ~5.2 GB
* **Models Used:** SDXL Turbo (`models/diffusers/sdxl-turbo` zero-copy junction)
* **Sampling:** `euler_ancestral`, `karras`, `steps = 2`, `cfg = 1.0`, `denoise = 1.0`
* **Visual Group:** Blue (`#2b4c7e`)
* **When to use:** Rapid ideation, draft iteration, instant composition testing.

---

### `02_sdxl_turbo_to_supir_2stage.json`
* **Architecture:** 2-Stage Synthesis & Super-Resolution
  * **Stage 1:** SDXL Turbo draft at $512 \times 512$ (2 steps).
  * **Stage 2:** SUPIR photorealistic $2\times$ super-resolution to $1024 \times 1024$ (25 steps).
* **Resolution:** $512 \times 512 \rightarrow 1024 \times 1024$
* **Execution Time:** ~150 seconds (~2.5 mins)
* **Peak VRAM:** ~9.7 GB (fits comfortably within 12GB limit)
* **Models Used:**
  * SDXL Turbo (Stage 1 base generation)
  * SDXL Base 1.0 (`sd_xl_base_1.0.safetensors` via FP8 UNet)
  * SUPIR v0Q (`SUPIR-v0Q_fp16.safetensors`)
* **Key Controls:**
  * `EDM_s_churn: 0` (eliminates craquelure / alligator skin fractal noise)
  * `s_noise: 1.0` (neutral noise baseline)
  * `color_fix_type: Wavelet` (locks chromatic distribution to original render)
  * `use_tiled_vae: true` (tile size 512)
* **Visual Groups:**
  * Stage 1: Slate Blue (`#2b4c7e`)
  * Stage 2: Emerald Green (`#1b5e3a`)
* **When to use:** Automated, end-to-end photorealistic image generation without manual intervention.

---

### `03_turbo_inpaint_supir_3stage.json`
* **Architecture:** 3-Stage Synthesis, Anatomical Inpainting & Super-Resolution
  * **Stage 1:** SDXL Turbo draft at $512 \times 512$ (2 steps).
  * **Stage 1.5:** Interactive `LoadImage` Mask Editor bridge + SDXL Base inpainting (25 steps, DPM++ 2M, $\text{denoise} = 0.75$, `grow_mask_by = 6`).
  * **Stage 2:** SUPIR photorealistic $2\times$ super-resolution to $1024 \times 1024$ (25 steps).
* **Resolution:** $512 \times 512 \rightarrow 512 \times 512 \text{ (corrected)} \rightarrow 1024 \times 1024 \text{ (restored)}$
* **Models Used:**
  * SDXL Turbo (Stage 1)
  * SDXL Base 1.0 (Stage 1.5 inpainting & Stage 2 SUPIR backbone)
  * SUPIR v0Q (Stage 2 super-resolution)
* **Visual Groups:**
  * Stage 1: Deep Blue (`#1e3a5f`)
  * Stage 1.5: Amber / Gold (`#8a6012`)
  * Stage 2: Emerald Green (`#1b5e3a`)
* **When to use:** Correcting anatomical defects (missing legs, distorted hands, faces) before running high-detail upscaling.

---

## How to Load in ComfyUI

1. Open `http://127.0.0.1:8188` in your browser.
2. In the top-right menu or the left **Workflows** panel, choose **Load**.
3. Select any template (`01_...`, `02_...`, or `03_...`).
4. To inpaint in Template 3: Right-click the thumbnail in **`Stage 1.5: Mask Editor Bridge`** $\rightarrow$ **"Open in Mask Editor"** $\rightarrow$ paint mask $\rightarrow$ **Save to node** $\rightarrow$ **Queue Prompt**.
