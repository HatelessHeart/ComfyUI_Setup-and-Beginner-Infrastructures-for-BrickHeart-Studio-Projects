import { app } from "../../scripts/app.js";

// Comprehensive dictionaries explaining ComfyUI primitives & SUPIR types
const SOCKET_DESCRIPTIONS = {
    "MODEL": "Diffusion model backbone (UNet/DiT) containing learned neural weights used to denoise latents.",
    "CLIP": "Contrastive Language-Image Pre-Training model. Encodes natural language text prompts into mathematical embedding vectors.",
    "VAE": "Variational Auto-Encoder. Compresses raw pixel images into latent space (1/8th size) and decodes latents back to visible images.",
    "LATENT": "Compressed numerical representation of an image in latent space. Standard SD/SDXL latent is 4 channels; Flux is 16 channels.",
    "IMAGE": "Raw pixel tensor in RGB [0.0 to 1.0] format ready for preview, saving, or post-processing.",
    "MASK": "Single-channel grayscale transparency tensor where white (1.0) indicates regions to redraw and black (0.0) indicates locked original pixels.",
    "CONDITIONING": "Steering instructions combining text prompt embeddings and attention guidance for the sampling diffusion process.",
    "CONTROL_NET": "Conditioning adapter that guides spatial composition using edge maps, depth, poses, or sketches.",
    "UPSCALE_MODEL": "Pre-trained super-resolution neural network (e.g. ESRGAN, DAT, RealESRGAN) for high-fidelity pixel upscaling.",
    "SUPIRMODEL": "Combined SUPIR control model and SDXL diffusion backbone for image restoration.",
    "SUPIRVAE": "SUPIR Variational Auto-Encoder supporting tiled encoding/decoding and deep feature extraction.",
    "SUPIR_cond_pos": "Positive conditioning tensor formatted for SUPIR's dual-text and aesthetic guidance.",
    "SUPIR_cond_neg": "Negative conditioning tensor formatted for SUPIR's unconditional guidance."
};

const WIDGET_DESCRIPTIONS = {
    // Core parameters
    "seed": "Numerical starting seed. Changing the seed alters the initial random noise distribution, producing a completely different composition.",
    "control_after_generate": "Determines how the seed updates after each run: 'randomize', 'increment', 'decrement', or 'fixed' (keep exact same seed).",
    "steps": "Number of denoising iterations. Standard SD 1.5/SDXL: 20-30 steps. Turbo/Lightning models: 1-4 steps. Higher steps add detail up to a point of diminishing returns.",
    "cfg": "Classifier-Free Guidance scale. Controls prompt adherence. Standard models: 5.0-8.0. Turbo/Lightning: 1.0-2.0. Higher values enforce prompt keywords but can cause over-saturation and artifacting.",
    "sampler_name": "Mathematical algorithm (e.g., Euler, DPM++ 2M, DDIM) used to calculate the trajectory from pure noise to a clean image.",
    "scheduler": "Pacing schedule (e.g., Karras, Normal, Exponential) controlling how much noise is stripped away at each step.",
    "denoise": "Amount of noise applied to the latent. 1.00 = generate entirely new image from scratch; <1.00 = keep existing image structure and apply variations (img2img/upscaling).",
    "width": "Horizontal image resolution in pixels. Must be a multiple of 8 (preferably 64) for VAE compatibility.",
    "height": "Vertical image resolution in pixels. Must be a multiple of 8 (preferably 64) for VAE compatibility.",
    "batch_size": "Number of images generated simultaneously in parallel per queue execution.",
    "ckpt_name": "Filename of the model checkpoint weights containing the UNet, CLIP, and VAE.",
    "text": "Conditioning text prompt. Describe subjects, lighting, composition, camera style, and mood.",
    "filename_prefix": "Subfolder and filename template prepended to saved outputs in the output directory.",
    "image": "Input image selection or uploaded file to load into the canvas pipeline.",
    "upload": "Upload an image file directly from local storage into the node.",

    // Inpainting parameters
    "grow_mask_by": "Expands the masked region outwards by N pixels to smoothly feather and blend inpainted seams into surrounding geometry.",
    "mask": "Single-channel grayscale transparency tensor where white (1.0) indicates regions to redraw and black (0.0) indicates locked original pixels.",
    "pixels": "Raw image pixel tensor fed into the VAE for latent encoding or inpainting.",

    // SUPIR & Advanced Upscale parameters
    "s_churn": "Controls stochastic noise injection per step. Set to 0 for clean outputs; higher values force texture hallucination but can cause craquelure/cracked grid artifacts.",
    "EDM_s_churn": "Controls stochastic noise injection per step. Set to 0 for clean outputs; higher values force texture hallucination but can cause craquelure/cracked grid artifacts.",
    "s_noise": "Noise multiplier applied per step (default 1.0 is neutral baseline).",
    "color_fix_type": "Post-processing color lock (Wavelet or AdaIN). Wavelet matches high-frequency details to the base image to prevent color shift.",
    "fp8_unet": "Casts the diffusion UNet to 8-bit floating point, reducing VRAM footprint from ~11GB down to ~6GB.",
    "use_tiled_vae": "Splits the latent during encoding/decoding into regional tiles, preventing Out-Of-Memory errors on large images.",
    "encoder_tile_size": "Tile dimensions in pixels/latents (e.g. 512). Keeps VRAM usage low during the VAE encode step.",
    "decoder_tile_size": "Tile dimensions in pixels/latents (e.g. 512). Keeps VRAM usage low during the VAE decode step.",
    "encoder_tile_size_pixels": "Tile dimensions in pixels (e.g. 512) for tiled VAE encoding.",
    "decoder_tile_size_latent": "Tile dimensions in latent units (e.g. 64 = 512px) for tiled VAE decoding.",
    "cfg_scale": "Guidance strength for the restoration prompt. Keep between 2.0-4.0 to avoid oversaturation and edge burn.",
    "cfg_scale_start": "Initial CFG scale at step 0 for linear CFG scaling schedule. Keep between 2.0-4.0 to avoid oversaturation and edge burn.",
    "cfg_scale_end": "Final CFG scale at the last step for linear CFG scaling schedule.",
    "control_scale": "The strength of the SUPIR control model guidance.",
    "control_scale_start": "Initial strength of the SUPIR restoration control guidance.",
    "control_scale_end": "Final strength of the SUPIR restoration control guidance (default 1.0).",
    "restore_cfg": "Guidance scaling towards original image features during restoration (-1.0 disables).",
    "keep_model_loaded": "Whether to retain large model weights in VRAM between queue prompts (False releases VRAM).",
    "supir_model": "Checkpoint file containing the trained SUPIR restoration control weights.",
    "sdxl_model": "SDXL Base checkpoint used as the restoration backbone.",
    "diffusion_dtype": "Precision for the diffusion UNet computation ('fp16', 'bf16', 'fp32', or 'auto').",
    "encoder_dtype": "Precision used for VAE encoding ('bf16', 'fp32', or 'auto').",
    "decoder_dtype": "Precision used for VAE decoding ('bf16', 'fp32', or 'auto').",
    "upscale_method": "Mathematical interpolation method for pixel resizing (e.g., bicubic, bilinear, lanczos).",
    "scale_by": "Multiplicative resolution factor (e.g. 2.0 scales 512x512 to 1024x1024).",
    "DPMPP_eta": "Scaling factor that influences the diffusion process by adjusting how denoising adapts to changes in noise levels.",
    "sampler": "Diffusion sampler algorithm (RestoreEDMSampler for high quality, RestoreDPMPP2MSampler for low step count).",
    "positive_prompt": "Encodes high-fidelity positive text prompt specifically formatted for the SUPIR restoration pass.",
    "negative_prompt": "Unwanted features and artifacts to suppress during the SUPIR restoration pass."
};

const NODE_ROLE_DESCRIPTIONS = {
    // Core nodes
    "KSampler": "Executes the iterative denoising diffusion loop over a latent image guided by positive/negative conditioning.",
    "CheckpointLoaderSimple": "Loads a standalone .safetensors model file containing the Model, CLIP, and VAE components.",
    "DiffusersLoader": "Loads diffusers-format model directory snapshots into standard ComfyUI Model, CLIP, and VAE tensors.",
    "CLIPTextEncode": "Converts plain text prompts into mathematical conditioning embeddings using the CLIP text encoder.",
    "VAEDecode": "Translates a 4-channel latent tensor into a full-resolution RGB pixel image.",
    "VAEEncode": "Compresses a full-resolution pixel image into a 4-channel latent tensor for img2img or inpainting.",
    "EmptyLatentImage": "Creates a blank, zeroed-out latent tensor at the target width and height to begin text-to-image generation.",
    "SaveImage": "Writes rendered pixel images to the project output directory with embedded workflow generation metadata.",
    "ImageScaleBy": "Scales an image tensor by a multiplicative factor using bicubic, bilinear, or lanczos filtering.",
    "LoadImage": "Loads an external or rendered image into the canvas with support for embedded masks and the interactive Mask Editor.",

    // Inpainting nodes
    "VAEEncodeForInpaint": "Encodes an image and an alpha mask into latent space specifically formatted for inpainting, locking unmasked areas.",
    "InpaintModelConditioning": "Combines latent representations, masks, and conditioning vectors to guide localized diffusion repainting.",

    // SUPIR nodes
    "SUPIR_model_loader_v2": "Loads the SUPIR restoration control weights and attaches them to the SDXL Base model backbone.",
    "SUPIR_conditioner": "Encodes high-fidelity text prompts and positive/negative guidance specifically formatted for the SUPIR restoration pass.",
    "SUPIR_sample": "Executes the iterative EDM restoration diffusion loop using tiled sampling to reconstruct photorealistic micro-details.",
    "SUPIR_decode": "Decodes the restored latent representation into a full-resolution pixel image with optional tiled VAE and color correction.",
    "SUPIR_encode": "Encodes high-resolution pixel images into SUPIR latent representations with optional VAE tiling to conserve VRAM.",
    "SUPIR_Upscale": "Legacy monolithic node executing end-to-end SUPIR upscaling, tiling, and restoration in a single step."
};

const BUTTON_DESCRIPTIONS = {
    "#queue-button": "Queue Prompt: Dispatch current workflow to the ComfyUI execution queue (Shortcut: Ctrl+Enter).",
    "#extra-options-button": "Extra Options: Access batch count, queue auto-trigger, and queue management.",
    "#autoQueueCheckbox": "Auto Queue: Automatically re-queue generations whenever you modify a prompt or node parameter."
};

app.registerExtension({
    name: "ComfyUI.UITooltips",
    async setup() {
        // 1. Ensure canvas tooltips are permanently enabled
        if (app.canvas) {
            app.canvas.show_tooltips = true;
        }

        // 2. Attach hover tooltips to DOM menu buttons
        setTimeout(() => {
            for (const [selector, text] of Object.entries(BUTTON_DESCRIPTIONS)) {
                const el = document.querySelector(selector);
                if (el) {
                    el.title = text;
                    el.setAttribute("aria-label", text);
                }
            }

            // General menu buttons
            document.querySelectorAll(".comfy-menu button").forEach(btn => {
                const label = btn.innerText.trim();
                if (label === "Queue Prompt") btn.title = "Dispatch current workflow to render (Ctrl+Enter)";
                if (label === "Clear") btn.title = "Wipe all nodes and reset to an empty canvas";
                if (label === "Load") btn.title = "Load a saved workflow JSON or dropped image file";
                if (label === "Save") btn.title = "Export the current workflow as a reusable JSON graph";
                if (label === "Refresh") btn.title = "Re-scan models, LoRAs, and custom nodes without restarting the server";
                if (label === "Settings") btn.title = "Configure ComfyUI frontend preferences and hotkeys";
            });
        }, 1500);
    },

    async nodeCreated(node) {
        // 1. Add description to node header
        const nodeType = node.comfyClass || node.type;
        if (NODE_ROLE_DESCRIPTIONS[nodeType]) {
            node.desc = NODE_ROLE_DESCRIPTIONS[nodeType];
            node.title = `${node.title || nodeType} [${NODE_ROLE_DESCRIPTIONS[nodeType]}]`;
        }

        // 2. Annotate Input Sockets
        if (node.inputs) {
            for (const input of node.inputs) {
                const desc = SOCKET_DESCRIPTIONS[input.type] || `Input socket accepting ${input.type} data.`;
                input.tooltip = `${input.name} (${input.type}): ${desc}`;
            }
        }

        // 3. Annotate Output Sockets
        if (node.outputs) {
            for (const output of node.outputs) {
                const desc = SOCKET_DESCRIPTIONS[output.type] || `Output socket providing ${output.type} data.`;
                output.tooltip = `${output.name} (${output.type}): ${desc}`;
            }
        }

        // 4. Annotate Parameter Widgets
        if (node.widgets) {
            for (const widget of node.widgets) {
                const desc = WIDGET_DESCRIPTIONS[widget.name];
                if (desc) {
                    widget.tooltip = `${widget.name}: ${desc}`;
                } else {
                    widget.tooltip = `${widget.name} (${widget.type}): Configurable parameter.`;
                }
            }
        }
    }
});
