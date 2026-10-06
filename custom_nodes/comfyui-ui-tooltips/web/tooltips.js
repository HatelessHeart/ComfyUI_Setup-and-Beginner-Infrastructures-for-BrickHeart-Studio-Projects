import { app } from "../../scripts/app.js";

// Comprehensive dictionaries explaining ComfyUI primitives & SUPIR types
export const SOCKET_DESCRIPTIONS = {
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
    "SUPIR_cond_neg": "Negative conditioning tensor formatted for SUPIR's unconditional guidance.",
    "STRING": "Plain text value (prompts, filenames, labels).",
    "INT": "Whole-number value (steps, seed, pixel sizes).",
    "FLOAT": "Decimal value (cfg, denoise, strengths).",
    "BOOLEAN": "On/off switch (true or false).",
    "CLIP_VISION": "Image-understanding encoder (CLIP vision) used by image-prompt adapters such as IP-Adapter or unCLIP.",
    "CLIP_VISION_OUTPUT": "Embedding produced by a CLIP vision model from a reference image.",
    "STYLE_MODEL": "Adapter that transfers the look of a reference image into conditioning.",
    "GLIGEN": "Grounded-generation model that places objects in boxes you define.",
    "SAMPLER": "A sampling algorithm object (Euler, DPM++ ...) for advanced custom-sampler workflows.",
    "SIGMAS": "A list of noise levels, one per step. Defines the denoising schedule for custom samplers.",
    "NOISE": "Noise source object for custom samplers.",
    "GUIDER": "Guidance object (CFG, basic, etc.) used by custom samplers."
};

export const WIDGET_DESCRIPTIONS = {
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

    "strength": "How strongly this effect is applied. 0 = off, 1 = full. LoRAs often sit between 0.6 and 1.0.",
    "strength_model": "LoRA strength on the diffusion model (changes the picture).",
    "strength_clip": "LoRA strength on the text encoder (changes how prompts are read).",
    "lora_name": "LoRA file to apply, from your loras folder.",
    "vae_name": "VAE file to use for encode/decode, from your vae folder.",
    "control_net_name": "ControlNet file to load, from your controlnet folder.",
    "model_name": "Model file to load from the matching models folder.",
    "start_percent": "Fraction of the sampling process at which this effect begins (0 = first step).",
    "end_percent": "Fraction of the sampling process at which this effect stops (1 = last step).",
    "stop_at_clip_layer": "How many CLIP layers to skip from the end. -1 is normal; -2 is common for anime-style models.",
    "crop": "How to fit an image to a new size: center-crop or disabled.",
    "add_noise": "Whether the sampler adds fresh noise before denoising.",
    "return_with_leftover_noise": "Leave some noise in the result so a later sampler can finish the job.",
    "start_at_step": "First denoising step this sampler runs (advanced multi-sampler workflows).",
    "end_at_step": "Last denoising step this sampler runs (advanced multi-sampler workflows).",
    "noise_seed": "Starting seed for the noise. Same seed and settings reproduce the same image.",
    "value": "Value held by this node.",
    "multiline": "Allows several lines of text.",

    "unet_name": "Diffusion model file to load, from your diffusion_models / unet folder.",
    "clip_name": "Text-encoder file to load, from your text_encoders / clip folder.",
    "type": "Which model family this text encoder is used with (for example flux2 or qwen_image). Must match the diffusion model.",
    "device": "Where this model runs: 'default' lets ComfyUI decide (normally the GPU).",
    "weight_dtype": "Numeric precision the model weights are loaded in. 'default' keeps the file's own precision; FP8 options use less VRAM.",
    "shift": "Sampling-schedule shift for this model family. Changes how noise levels are spread across the steps.",
    "tile_size": "Size of each tile when decoding in tiles. Smaller tiles use less memory.",
    "overlap": "How much neighboring tiles overlap, to hide seams.",
    "blur_radius": "How far the mask edge is softened, in pixels. Larger values blend the repaint more smoothly.",
    "expand": "How many pixels to grow (positive) or shrink (negative) the mask.",
    "enhancement_style": "How the prompt rewriter should treat your text (for example Refine).",
    "temperature": "Randomness of the text model's output: lower is more literal, higher is more creative.",
    "max_tokens": "Upper limit on the length of the generated text.",
    "top_p": "Limits the text model to the most likely words that add up to this probability.",
    "repetition_penalty": "Discourages the text model from repeating itself.",
    "texture_size": "Width and height in pixels of the baked texture image.",
    "file_format": "File type to write (for example glb).",
    "background": "What to put behind the subject: Alpha means transparent.",

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

export const NODE_ROLE_DESCRIPTIONS = {
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

    "VAELoader": "Loads a standalone VAE file, to replace the VAE baked into a checkpoint (often fixes washed-out colors).",
    "LoraLoader": "Applies a LoRA (small add-on weights for a style or subject) to the MODEL and CLIP. Strength controls how strongly.",
    "CLIPSetLastLayer": "Stops CLIP early (clip skip). Some models are trained expecting -2.",
    "ControlNetLoader": "Loads a ControlNet model that steers composition from edge, depth or pose maps.",
    "ControlNetApplyAdvanced": "Applies a ControlNet to your prompt conditioning using a guide image, with strength and start/end timing.",
    "UpscaleModelLoader": "Loads a super-resolution model (ESRGAN, RealESRGAN ...) for pixel upscaling.",
    "ImageUpscaleWithModel": "Upscales an image with a loaded upscale model. Sharper than simple resizing.",
    "LatentUpscale": "Resizes a latent directly. Fast but soft; usually followed by a low-denoise sampler pass.",
    "ImageScale": "Resizes an image to exact width and height.",
    "PreviewImage": "Shows an image in the UI without saving it to disk.",
    "ConditioningCombine": "Merges two prompt conditionings so both apply.",
    "ConditioningSetMask": "Limits a prompt's conditioning to a masked region.",
    "VAEEncode": "Compresses a full-resolution pixel image into a 4-channel latent tensor for img2img or inpainting.",
    "SetLatentNoiseMask": "Attaches a mask to a latent so the sampler only changes the masked area.",
    "MaskToImage": "Converts a mask into a viewable grayscale image.",
    "ImageToMask": "Extracts one color channel of an image as a mask.",
    "Reroute": "A pass-through point that tidies long wires. It does not change data.",
    "PrimitiveNode": "Drives a widget on another node from one shared value, so several nodes can follow one setting.",
    "Note": "A text note on the canvas. It has no effect on the image.",

    // BrickHeart studio workflows (Flux2 / Qwen / Trellis2 / mesh projection). Draft text: see docs/ROADMAP_AND_IDEAS.md
    "CLIPLoader": "Loads a standalone text-encoder file. Set 'type' to the model family it belongs to (for example qwen_image or flux2) so it is wired the right way.",
    "DualCLIPLoader": "Loads two text encoders at once, for model families that use a pair.",
    "UNETLoader": "Loads a diffusion model on its own (no text encoder or VAE inside), the style used by Flux and Qwen files. Pair it with a CLIP loader and a VAE loader.",
    "UnetLoaderGGUF": "Loads a quantized (GGUF) diffusion model: smaller in VRAM than the full-precision file, with a small quality trade-off.",
    "LoraLoaderModelOnly": "Applies a LoRA (a small add-on that changes the model's behavior) to the diffusion model only. Strength sets how strongly.",
    "PrimitiveInt": "Holds one whole number you can wire into several nodes, so they always agree (for example width and height).",
    "PrimitiveFloat": "Holds one decimal number you can wire into several nodes.",
    "PrimitiveString": "Holds one line of text you can wire into other nodes.",
    "PrimitiveStringMultiline": "Holds a block of text (such as a prompt) you can wire into other nodes.",
    "PrimitiveBoolean": "Holds a true/false switch you can wire into other nodes.",
    "ComfySwitchNode": "Chooses between two inputs depending on a true/false switch.",
    "RMBG": "Removes the background from an image, leaving the subject with transparency (or a solid color).",
    "ReferenceLatent": "Attaches a reference image (as a latent) to the prompt conditioning so an edit model can use it as guidance.",
    "ModelSamplingAuraFlow": "Adjusts the sampling schedule for AuraFlow-style models (including Qwen Image). 'shift' changes how the schedule is spread.",
    "CFGNorm": "Normalizes the effect of guidance strength (CFG). Advanced: leave at defaults unless a workflow says otherwise.",
    "KSamplerSelect": "Picks the sampler algorithm for the custom-sampler setup.",
    "Flux2Scheduler": "Builds the list of noise levels (the schedule) for Flux2. You set the number of steps and the image size.",
    "RandomNoise": "Provides the starting noise from a seed for the custom-sampler setup.",
    "CFGGuider": "Combines the model with positive and negative prompts and a CFG strength, producing the guider the custom sampler follows.",
    "SamplerCustomAdvanced": "Runs the denoising loop from separate parts: noise, guider, sampler and schedule. The modular alternative to KSampler.",
    "TextEncodeQwenImageEditPlus": "Prompt encoder for Qwen Image Edit: reads your edit instruction plus the input image(s) and the VAE, so the model can see what it is editing.",
    "EmptyFlux2LatentImage": "Creates a blank Flux2-format latent at the chosen size to start generation from.",
    "EmptySD3LatentImage": "Creates a blank latent in the SD3-style format (also used by Qwen Image) to start generation from.",
    "VAEDecodeTiled": "Decodes a latent to pixels in tiles to save memory. tile_size and overlap control the tiling.",
    "Canny": "Detects edges in an image (outlines). Useful as a clean structure guide.",
    "SolidMask": "Creates a mask filled with a single value at a given size (1 means all white).",
    "InvertMask": "Flips a mask: white becomes black and black becomes white.",
    "MaskToImage": "Converts a mask into a viewable grayscale image.",
    "LoadImageMask": "Loads one color channel of an image file as a mask.",
    "ImageCompositeMasked": "Pastes one image onto another through a mask, at a given position.",
    "GetImageSize": "Reads an image's width and height so other nodes can match it.",
    "GrowMaskWithBlur": "Expands or shrinks a mask and blurs its edge so repaints blend smoothly.",
    "SetLatentNoiseMask": "Limits sampling to a masked region of the latent, so only that area changes.",
    "ResizeMask": "Resizes a mask to a given size.",
    "ImageScaleToMaxDimension": "Scales an image so its longest side matches a target size.",
    "Preview3D": "Shows a 3D model file in the UI so you can orbit around it.",
    "AILab_QwenVL_PromptEnhancer": "Uses a Qwen vision-language model to rewrite a short prompt into a richer one.",
    "Trellis2LoadModel": "Loads the TRELLIS.2 3D generation model. low_vram trades speed for fitting on smaller GPUs.",
    "Trellis2LoadImageWithTransparency": "Loads the source image for 3D generation, keeping its transparency.",
    "Trellis2PreProcessImage": "Pads and resizes the source image (and can remove its background) before 3D generation.",
    "Trellis2ImageCondGenerator": "Extracts features from the source image that guide the later 3D generation passes.",
    "Trellis2SparseGenerator": "First generation pass: roughly decides where the object occupies space.",
    "Trellis2ShapeGenerator": "Second generation pass: refines the rough structure into detailed shape.",
    "Trellis2TexSlatGenerator": "Third generation pass: generates the surface appearance for the shape.",
    "Trellis2DecodeLatents": "Decodes the generated data into an actual mesh with texture information.",
    "Trellis2ReconstructMeshWithQuad": "Rebuilds the mesh with quad faces and can remove floaters and inner faces.",
    "Trellis2SimplifyMesh": "Reduces the mesh's polygon count toward a target face number.",
    "Trellis2FillHolesWithCuMesh": "Fills holes in the mesh (CuMesh method).",
    "Trellis2FillHolesNicelyWithMeshlib": "Fills holes in the mesh more carefully (Meshlib method).",
    "Trellis2UnWrapAndRasterizer": "Flattens the 3D surface into a 2D UV layout and bakes the texture onto it.",
    "Trellis2ExportMesh": "Writes the finished mesh to disk (for example as .glb).",

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

export const BUTTON_DESCRIPTIONS = {
    "#queue-button": "Queue Prompt: Dispatch current workflow to the ComfyUI execution queue (Shortcut: Ctrl+Enter).",
    "#extra-options-button": "Extra Options: Access batch count, queue auto-trigger, and queue management.",
    "#autoQueueCheckbox": "Auto Queue: Automatically re-queue generations whenever you modify a prompt or node parameter."
};

// Best available plain-language description for a node class: our curated text first,
// then the node author's own description (ComfyUI /object_info), then a category-based sentence.
export function describeNode(cls, def) {
    if (NODE_ROLE_DESCRIPTIONS[cls]) return NODE_ROLE_DESCRIPTIONS[cls];
    if (def && def.description) return trimText(def.description);
    if (def) {
        const ins = [];
        for (const g of ["required", "optional"]) {
            for (const [name, cfg] of Object.entries((def.input || {})[g] || {})) {
                if (typeof cfg[0] === "string" && cfg[0] === cfg[0].toUpperCase() && !["INT", "FLOAT", "STRING", "BOOLEAN", "COMBO"].includes(cfg[0])) ins.push(`${name} (${cfg[0]})`);
            }
        }
        const outs = (def.output || []).map((t, i) => (def.output_name || [])[i] || t);
        const cat = def.category ? String(def.category).split("/").join(" › ") : "";
        const parts = [`${def.display_name || cls}${cat ? ` (${cat})` : ""}.`];
        if (ins.length) parts.push(`Takes ${ins.slice(0, 5).join(", ")}${ins.length > 5 ? "…" : ""}.`);
        if (outs.length) parts.push(`Produces ${outs.slice(0, 4).join(", ")}.`);
        return parts.join(" ");
    }
    return "";
}

// Author descriptions can be long (some are whole recipe tables). Keep the first sentence or two.
function trimText(s) {
    const flat = String(s).replace(/\s+/g, " ").trim();
    if (flat.length <= 220) return flat;
    const cut = flat.slice(0, 220);
    const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
    return (end > 80 ? cut.slice(0, end + 1) : cut.slice(0, cut.lastIndexOf(" ")).trimEnd() + "…");
}

function describeWidget(widget) {
    // A tooltip the node itself defines (node authors can set one per input) beats our generic wording.
    if (!WIDGET_DESCRIPTIONS[widget.name] && widget.tooltip) return widget.tooltip;
    const known = WIDGET_DESCRIPTIONS[widget.name];
    if (known) return `${widget.name}: ${known}`;
    const t = widget.type;
    if (t === "combo") return `${widget.name}: pick one option from the list. Options come from the files and choices installed in your ComfyUI.`;
    if (t === "number" || t === "slider") return `${widget.name}: numeric setting. Drag, click the arrows, or double-click to type a value.`;
    if (t === "toggle") return `${widget.name}: on/off switch. Click to toggle.`;
    if (t === "text" || t === "customtext") return `${widget.name}: text field. Click to edit.`;
    if (t === "button") return `${widget.name}: button. Click to run its action.`;
    return `${widget.name} (${t}): configurable parameter.`;
}

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
        } else {
            // Any other installed node (including custom nodes): use the author's description or category.
            // Hover-only: the title is left alone so the canvas stays readable.
            const def = node.constructor && node.constructor.nodeData;
            const text = describeNode(nodeType, def);
            if (text) node.desc = text;
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
                widget.tooltip = describeWidget(widget);
            }
        }
    }
});
