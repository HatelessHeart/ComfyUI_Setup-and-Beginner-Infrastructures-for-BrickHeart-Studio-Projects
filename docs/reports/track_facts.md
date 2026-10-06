# Track facts

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Flux2 and Prompt Enhancer.json  (API format)
- nodes: 19

### [9] SaveImage  —  “Save Image”
  - filename_prefix: "Flux2-Klein"
  - fed by: images ← [97] VAEDecode

### [84] KSamplerSelect  —  “KSamplerSelect”
  - sampler_name: "euler"

### [85] Flux2Scheduler  —  “Flux2Scheduler”
  - steps: 8
  - fed by: width ← [90] PrimitiveInt; height ← [91] PrimitiveInt

### [86] CFGGuider  —  “CFGGuider”
  - cfg: 1.5
  - fed by: model ← [93] UNETLoader; positive ← [96] CLIPTextEncode; negative ← [89] CLIPTextEncode

### [87] SamplerCustomAdvanced  —  “SamplerCustomAdvanced”
  - fed by: noise ← [92] RandomNoise; guider ← [86] CFGGuider; sampler ← [84] KSamplerSelect; sigmas ← [85] Flux2Scheduler; latent_image ← [88] EmptyFlux2LatentImage

### [88] EmptyFlux2LatentImage  —  “Empty Flux 2 Latent”
  - batch_size: 1
  - fed by: width ← [90] PrimitiveInt; height ← [91] PrimitiveInt

### [89] CLIPTextEncode  —  “CLIP Text Encode (Negative Prompt)”
  - text: "blurry, low detail, low contrast, deformed"
  - fed by: clip ← [94] CLIPLoader

### [90] PrimitiveInt  —  “Width”
  - value: 1024

### [91] PrimitiveInt  —  “Height”
  - value: 1024

### [92] RandomNoise  —  “RandomNoise”
  - noise_seed: 12345

### [93] UNETLoader  —  “Load Diffusion Model”
  - unet_name: "flux-2-klein-9b-kv-fp8.safetensors"
  - weight_dtype: "default"

### [94] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_3_8b_fp8mixed.safetensors"
  - type: "flux2"
  - device: "default"

### [95] VAELoader  —  “Load VAE”
  - vae_name: "flux2-vae.safetensors"

### [96] CLIPTextEncode  —  “CLIP Text Encode (Positive Prompt)”
  - fed by: text ← [98] ComfySwitchNode; clip ← [94] CLIPLoader

### [97] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [87] SamplerCustomAdvanced; vae ← [95] VAELoader

### [98] ComfySwitchNode  —  “Switch”
  - fed by: switch ← [99] PrimitiveBoolean; on_false ← [100] PrimitiveStringMultiline; on_true ← [101] AILab_QwenVL_PromptEnhancer

### [99] PrimitiveBoolean  —  “Enhance Prompt”
  - value: true

### [100] PrimitiveStringMultiline  —  “String (Multiline)”
  - value: "An anime dwarf sorcerer, standing in T-Pose with arms apart, front view, gray background"

### [101] AILab_QwenVL_PromptEnhancer  —  “QwenVL Prompt Enhancer”
  - model_name: "Qwen3-VL-4B-Instruct"
  - quantization: "None (FP16)"
  - attention_mode: "auto"
  - use_torch_compile: false
  - device: "auto"
  - enhancement_style: "📝 Refine"
  - custom_system_prompt: ""
  - max_tokens: 256
  - temperature: 0.7
  - top_p: 0.9
  - repetition_penalty: 1.1
  - keep_model_loaded: true
  - seed: 12345
  - fed by: prompt_text ← [100] PrimitiveStringMultiline

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Qwen and Prompt Enhancer.json  (API format)
- nodes: 14

### [90] SaveImage  —  “Save Image”
  - filename_prefix: "Images/Image_1024"
  - fed by: images ← [113] VAEDecode

### [110] VAELoader  —  “Load VAE”
  - vae_name: "qwen_image_vae.safetensors"

### [112] CLIPTextEncode  —  “CLIP Text Encode (Positive Prompt)”
  - fed by: text ← [123] ComfySwitchNode; clip ← [118] CLIPLoader

### [113] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [116] KSampler; vae ← [110] VAELoader

### [114] EmptySD3LatentImage  —  “EmptySD3LatentImage”
  - width: 1024
  - height: 1024
  - batch_size: 1

### [115] CLIPTextEncode  —  “CLIP Text Encode (Negative Prompt)”
  - text: "低分辨率，低画质，肢体畸形，手指畸形，画面过饱和，蜡像感，人脸无细节，过度光滑，画面具有AI感。构图混乱。文字模糊，扭曲"
  - fed by: clip ← [118] CLIPLoader

### [116] KSampler  —  “KSampler”
  - seed: 12345
  - steps: 4
  - cfg: 1
  - sampler_name: "euler"
  - scheduler: "simple"
  - denoise: 1
  - fed by: model ← [119] LoraLoaderModelOnly; positive ← [112] CLIPTextEncode; negative ← [115] CLIPTextEncode; latent_image ← [114] EmptySD3LatentImage

### [117] UnetLoaderGGUF  —  “Unet Loader (GGUF)”
  - unet_name: "qwen-image-2512-Q6_K.gguf"

### [118] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_2.5_vl_7b_fp8_scaled.safetensors"
  - type: "qwen_image"
  - device: "default"

### [119] LoraLoaderModelOnly  —  “Load LoRA”
  - lora_name: "Qwen-Image-2512-Lightning-4steps-V1.0-bf16.safetensors"
  - strength_model: 1
  - fed by: model ← [117] UnetLoaderGGUF

### [120] PrimitiveStringMultiline  —  “String (Multiline)”
  - value: "An anime dwarf sorcerer, standing in T-Pose with arms apart, front view, gray background"

### [121] AILab_QwenVL_PromptEnhancer  —  “QwenVL Prompt Enhancer”
  - model_name: "Qwen3-VL-4B-Instruct"
  - quantization: "None (FP16)"
  - attention_mode: "auto"
  - use_torch_compile: false
  - device: "auto"
  - enhancement_style: "📝 Refine"
  - custom_system_prompt: ""
  - max_tokens: 256
  - temperature: 0.7
  - top_p: 0.9
  - repetition_penalty: 1.1
  - keep_model_loaded: true
  - seed: 12345
  - fed by: prompt_text ← [120] PrimitiveStringMultiline

### [122] PrimitiveBoolean  —  “Enhance Prompt”
  - value: true

### [123] ComfySwitchNode  —  “Switch”
  - fed by: switch ← [122] PrimitiveBoolean; on_false ← [120] PrimitiveStringMultiline; on_true ← [121] AILab_QwenVL_PromptEnhancer

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Image Edit Inpainting.json  (API format)
- nodes: 22

### [1] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus (Positive Prompt)”
  - prompt: "Make a gold face"
  - fed by: clip ← [33] CLIPLoader; vae ← [10] VAELoader; image1 ← [158] ImageScale

### [10] VAELoader  —  “Load VAE”
  - vae_name: "qwen_image_vae.safetensors"

### [11] LoadImage  —  “Load Image 1”
  - image: "clipspace/clipspace-painted-masked-1777042923407.png [input]"

### [13] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [152] KSampler; vae ← [10] VAELoader

### [14] SaveImage  —  “Save Image”
  - filename_prefix: "ComfyUI"
  - fed by: images ← [13] VAEDecode

### [24] LoraLoaderModelOnly  —  “Load LoRA”
  - lora_name: "Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors"
  - strength_model: 1
  - fed by: model ← [160] UnetLoaderGGUF

### [30] ModelSamplingAuraFlow  —  “ModelSamplingAuraFlow”
  - shift: 3.1
  - fed by: model ← [24] LoraLoaderModelOnly

### [33] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_2.5_vl_7b_fp8_scaled.safetensors"
  - type: "qwen_image"
  - device: "default"

### [39] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus (Negative Prompt)”
  - prompt: ""
  - fed by: clip ← [33] CLIPLoader; vae ← [10] VAELoader; image1 ← [158] ImageScale

### [51] Image Comparer (rgthree)  —  “Image Comparer (rgthree)”
  - rgthree_comparer: {"images": [{"name": "A", "selected": true, "url": "/api/view?filename=rgthree.compare._temp_hulpi_00003_.png&type=temp&subfolder=&rand=0.4879672000794206"},...
  - fed by: image_a ← [11] LoadImage; image_b ← [13] VAEDecode

### [119] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [158] ImageScale; vae ← [10] VAELoader

### [126] SetLatentNoiseMask  —  “Set Latent Noise Mask”
  - fed by: samples ← [119] VAEEncode; mask ← [148] ResizeMask

### [128] GrowMaskWithBlur  —  “Grow Mask With Blur”
  - expand: 0
  - incremental_expandrate: 0
  - tapered_corners: true
  - flip_input: false
  - blur_radius: 31.3
  - lerp_alpha: 1
  - decay_factor: 1
  - fill_holes: false
  - fed by: mask ← [161] LoadImageMask

### [129] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [138] ImageScaleToMaxDimension; vae ← [10] VAELoader

### [130] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [129] VAEEncode; vae ← [10] VAELoader

### [132] GetImageSize  —  “Get Image Size”
  - fed by: image ← [130] VAEDecode

### [138] ImageScaleToMaxDimension  —  “ImageScaleToMaxDimension”
  - upscale_method: "lanczos"
  - largest_size: 1024
  - fed by: image ← [11] LoadImage

### [148] ResizeMask  —  “Resize Mask”
  - keep_proportions: true
  - upscale_method: "lanczos"
  - crop: "center"
  - fed by: width ← [132] GetImageSize; height ← [132] GetImageSize; mask ← [128] GrowMaskWithBlur

### [152] KSampler  —  “KSampler”
  - seed: 258107651719923
  - steps: 4
  - cfg: 1
  - sampler_name: "euler"
  - scheduler: "simple"
  - denoise: 1
  - fed by: model ← [30] ModelSamplingAuraFlow; positive ← [1] TextEncodeQwenImageEditPlus; negative ← [39] TextEncodeQwenImageEditPlus; latent_image ← [126] SetLatentNoiseMask

### [158] ImageScale  —  “Upscale Image”
  - upscale_method: "lanczos"
  - crop: "center"
  - fed by: width ← [132] GetImageSize; height ← [132] GetImageSize; image ← [11] LoadImage

### [160] UnetLoaderGGUF  —  “Unet Loader (GGUF)”
  - unet_name: "qwen-image-edit-2511-Q4_K_M.gguf"

### [161] LoadImageMask  —  “Load Image (as Mask)”
  - image: "Textured - 2048-mask.png"
  - channel: "red"

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Textured Mesh with Trellis2.json  (API format)
- nodes: 18

### [6] Trellis2LoadImageWithTransparency  —  “Source Image”
  - image: "Normal_00001_.png"

### [39] Trellis2LoadModel  —  “Trellis2 - LoadModel”
  - modelname: "microsoft/TRELLIS.2-4B"
  - backend: "flash_attn"
  - device: "cuda"
  - low_vram: true
  - keep_models_loaded: false
  - conv_backend: "flex_gemm"
  - sparse_backend: "flash_attn"
  - use_reconviagen: false

### [161] Trellis2ReconstructMeshWithQuad  —  “Trellis2 - Reconstruct Mesh With Quad”
  - remesh_band: 1
  - resolution: 1024
  - remove_floaters: true
  - remove_inner_faces: true
  - fed by: mesh ← [193] Trellis2FillHolesWithCuMesh

### [193] Trellis2FillHolesWithCuMesh  —  “Trellis2 - Fill Holes with CuMesh”
  - max_permieters: 1
  - fed by: mesh ← [217] Trellis2DecodeLatents

### [194] Trellis2PreProcessImage  —  “Trellis2 - PreProcess Image”
  - padding: 10
  - remove_background: false
  - max_size: 1024
  - fed by: image ← [6] Trellis2LoadImageWithTransparency

### [203] Trellis2ExportMesh  —  “Trellis2 - Export Mesh”
  - file_format: "glb"
  - fed by: filename_prefix ← [219] PrimitiveString; trimesh ← [272] Trellis2UnWrapAndRasterizer

### [209] PrimitiveInt  —  “Target Face Number”
  - value: 1000000

### [213] Trellis2ImageCondGenerator  —  “Trellis2 - ImageCond Generator”
  - max_views: 1
  - fed by: pipeline ← [39] Trellis2LoadModel; image ← [194] Trellis2PreProcessImage

### [214] Trellis2SparseGenerator  —  “Trellis2 - Sparse Generator”
  - seed: 12345
  - sparse_structure_steps: 50
  - sparse_structure_guidance_strength: 7.5
  - sparse_structure_guidance_rescale: 0.01
  - sparse_structure_rescale_t: 5
  - sparse_structure_sampler: "heun"
  - sparse_structure_resolution: 64
  - sparse_structure_guidance_interval_start: 0.1
  - sparse_structure_guidance_interval_end: 1
  - fill_holes: true
  - hole_iterations: 1
  - verbose: false
  - dino_lock: 0.6
  - dino_substeps: 2
  - hole_fill_algorithm: "flood_fill"
  - dino_foundation_cap: 0.92
  - keep_only_shell: true
  - fed by: pipeline ← [213] Trellis2ImageCondGenerator; image_cond ← [213] Trellis2ImageCondGenerator

### [215] Trellis2ShapeGenerator  —  “Trellis2 - Shape Generator”
  - resolution: 1024
  - shape_steps: 25
  - shape_guidance_strength: 7.5
  - shape_guidance_rescale: 0.01
  - shape_rescale_t: 3
  - shape_sampler: "heun"
  - shape_guidance_interval_start: 0.1
  - shape_guidance_interval_end: 1
  - verbose: false
  - dino_lock: 0.35
  - dino_substeps: 2
  - dino_foundation_cap: 0.92
  - fed by: pipeline ← [214] Trellis2SparseGenerator; image_cond ← [213] Trellis2ImageCondGenerator; coords ← [214] Trellis2SparseGenerator

### [217] Trellis2DecodeLatents  —  “Trellis2 - Decode Latents”
  - use_tiled_decoder: true
  - fed by: resolution ← [215] Trellis2ShapeGenerator; pipeline ← [271] Trellis2TexSlatGenerator; shape_slat ← [215] Trellis2ShapeGenerator; texture_slat ← [271] Trellis2TexSlatGenerator

### [218] Trellis2SimplifyMesh  —  “Trellis2 - Simplify Mesh”
  - method: "Cumesh"
  - fed by: target_face_num ← [209] PrimitiveInt; mesh ← [161] Trellis2ReconstructMeshWithQuad

### [219] PrimitiveString  —  “Name”
  - value: "3DGenStudio"

### [232] Preview3D  —  “Preview 3D & Animation”
  - image: ""
  - fed by: model_file ← [203] Trellis2ExportMesh

### [250] Trellis2FillHolesNicelyWithMeshlib  —  “Trellis2 - Fill Holes Nicely With Meshlib”
  - fed by: mesh ← [218] Trellis2SimplifyMesh

### [257] Trellis2SimplifyMesh  —  “Trellis2 - Simplify Mesh”
  - method: "Cumesh"
  - fed by: target_face_num ← [209] PrimitiveInt; mesh ← [250] Trellis2FillHolesNicelyWithMeshlib

### [271] Trellis2TexSlatGenerator  —  “Trellis2 - Tex Slat Generator”
  - resolution: 1024
  - texture_steps: 25
  - texture_guidance_strength: 7.5
  - texture_guidance_rescale: 0.01
  - texture_rescale_t: 3
  - texture_sampler: "euler"
  - texture_guidance_interval_start: 0
  - texture_guidance_interval_end: 0.9
  - verbose: false
  - dino_lock: 0.35
  - dino_substeps: 2
  - dino_foundation_cap: 0.92
  - fed by: pipeline ← [215] Trellis2ShapeGenerator; image_cond ← [213] Trellis2ImageCondGenerator; shape_slat ← [215] Trellis2ShapeGenerator

### [272] Trellis2UnWrapAndRasterizer  —  “Trellis2 - UV Unwrap and Rasterize”
  - mesh_cluster_threshold_cone_half_angle_rad: 60
  - mesh_cluster_refine_iterations: 0
  - mesh_cluster_global_iterations: 1
  - mesh_cluster_smooth_strength: 1
  - texture_size: 2048
  - texture_alpha_mode: "OPAQUE"
  - double_side_material: false
  - bake_on_vertices: false
  - use_custom_normals: false
  - inpainting: "telea"
  - fed by: mesh ← [257] Trellis2SimplifyMesh; bvh ← [217] Trellis2DecodeLatents

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection - Albedo.json  (API format)
- nodes: 43

### [1] ModelSamplingAuraFlow  —  “ModelSamplingAuraFlow”
  - shift: 3.1
  - fed by: model ← [13] LoraLoaderModelOnly

### [2] VAEDecodeTiled  —  “VAE Decode (Tiled)”
  - tile_size: 128
  - overlap: 64
  - temporal_size: 64
  - temporal_overlap: 8
  - fed by: samples ← [20] KSampler; vae ← [15] VAELoader

### [3] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [9] TextEncodeQwenImageEditPlus; latent ← [12] VAEEncode

### [4] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [33] Canny; vae ← [15] VAELoader

### [5] CFGNorm  —  “CFGNorm”
  - strength: 1
  - pre_cfg: false
  - fed by: model ← [1] ModelSamplingAuraFlow

### [6] EmptyLatentImage  —  “Empty Latent Image”
  - batch_size: 1
  - fed by: width ← [34] PrimitiveInt; height ← [34] PrimitiveInt

### [7] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [8] TextEncodeQwenImageEditPlus; latent ← [12] VAEEncode

### [8] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus (Positive)”
  - prompt: ""
  - fed by: clip ← [14] CLIPLoader; vae ← [15] VAELoader

### [9] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus”
  - prompt: ""
  - fed by: clip ← [14] CLIPLoader; vae ← [15] VAELoader

### [10] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [7] ReferenceLatent; latent ← [4] VAEEncode

### [11] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [3] ReferenceLatent; latent ← [4] VAEEncode

### [12] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [28] ImageCompositeMasked; vae ← [15] VAELoader

### [13] LoraLoaderModelOnly  —  “Load LoRA”
  - lora_name: "Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors"
  - strength_model: 1
  - fed by: model ← [19] UnetLoaderGGUF

### [14] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_2.5_vl_7b_fp8_scaled.safetensors"
  - type: "qwen_image"
  - device: "default"

### [15] VAELoader  —  “Load VAE”
  - vae_name: "qwen_image_vae.safetensors"

### [19] UnetLoaderGGUF  —  “Unet Loader (GGUF)”
  - unet_name: "qwen-image-edit-2511-Q4_K_M.gguf"

### [20] KSampler  —  “KSampler”
  - seed: 1000
  - steps: 4
  - cfg: 1
  - sampler_name: "euler"
  - scheduler: "simple"
  - denoise: 1
  - fed by: model ← [5] CFGNorm; positive ← [10] ReferenceLatent; negative ← [11] ReferenceLatent; latent_image ← [6] EmptyLatentImage

### [21] LoadImage  —  “Position Image”
  - image: ""

### [22] LoadImage  —  “Reference Image”
  - image: ""

### [25] SolidMask  —  “SolidMask”
  - value: 1
  - fed by: width ← [34] PrimitiveInt; height ← [34] PrimitiveInt

### [26] InvertMask  —  “InvertMask”
  - fed by: mask ← [22] LoadImage

### [27] MaskToImage  —  “Convert Mask to Image”
  - fed by: mask ← [25] SolidMask

### [28] ImageCompositeMasked  —  “ImageCompositeMasked”
  - x: 0
  - y: 0
  - resize_source: true
  - fed by: destination ← [27] MaskToImage; source ← [22] LoadImage; mask ← [26] InvertMask

### [33] Canny  —  “Canny”
  - low_threshold: 0.05
  - high_threshold: 0.25
  - fed by: image ← [21] LoadImage

### [34] PrimitiveInt  —  “Image Resolution”
  - value: 1024

### [35] SaveImage  —  “Save Image”
  - filename_prefix: "Qwen"
  - fed by: images ← [36] RMBG

### [36] RMBG  —  “Remove Background (RMBG)”
  - model: "RMBG-2.0"
  - sensitivity: 1
  - process_res: 1024
  - mask_blur: 0
  - mask_offset: 0
  - invert_output: false
  - refine_foreground: false
  - background: "Alpha"
  - background_color: "#222222"
  - fed by: image ← [77:65] VAEDecode

### [77:63] EmptyFlux2LatentImage  —  “Empty Flux 2 Latent”
  - width: 1024
  - height: 1024
  - batch_size: 1

### [77:64] SamplerCustomAdvanced  —  “SamplerCustomAdvanced”
  - fed by: noise ← [77:71] RandomNoise; guider ← [77:70] CFGGuider; sampler ← [77:67] KSamplerSelect; sigmas ← [77:69] Flux2Scheduler; latent_image ← [77:63] EmptyFlux2LatentImage

### [77:65] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [77:64] SamplerCustomAdvanced; vae ← [77:72] VAELoader

### [77:66] CLIPTextEncode  —  “CLIP Text Encode (Negative Prompt)”
  - text: ""
  - fed by: clip ← [77:75] CLIPLoader

### [77:67] KSamplerSelect  —  “KSamplerSelect”
  - sampler_name: "euler"

### [77:68] CLIPTextEncode  —  “CLIP Text Encode (Positive Prompt)”
  - text: ""
  - fed by: clip ← [77:75] CLIPLoader

### [77:69] Flux2Scheduler  —  “Flux2Scheduler”
  - steps: 4
  - width: 1024
  - height: 1024

### [77:70] CFGGuider  —  “CFG Guider”
  - cfg: 1
  - fed by: model ← [77:76] LoraLoaderModelOnly; positive ← [77:73:12:76] ReferenceLatent; negative ← [77:73:12:77] ReferenceLatent

### [77:71] RandomNoise  —  “RandomNoise”
  - noise_seed: 12345

### [77:72] VAELoader  —  “Load VAE”
  - vae_name: "flux2-vae.safetensors"

### [77:73:12:76] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [77:68] CLIPTextEncode; latent ← [77:73:12:78] VAEEncode

### [77:73:12:77] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [77:66] CLIPTextEncode; latent ← [77:73:12:78] VAEEncode

### [77:73:12:78] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [2] VAEDecodeTiled; vae ← [77:72] VAELoader

### [77:74] UnetLoaderGGUF  —  “Unet Loader (GGUF)”
  - unet_name: "flux-2-klein-4b-F16.gguf"

### [77:75] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_3_4b_fp8_mixed.safetensors"
  - type: "flux2"
  - device: "default"

### [77:76] LoraLoaderModelOnly  —  “Load LoRA”
  - lora_name: "PBRFusion4_Albedo.safetensors"
  - strength_model: 1
  - fed by: model ← [77:74] UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Upscale with Flux2.json  (API format)
- nodes: 24

### [225] LoadImage  —  “Load Image”
  - image: "Image_1024_00156_.png"

### [226] RMBG  —  “Remove Background (RMBG)”
  - model: "RMBG-2.0"
  - sensitivity: 1
  - process_res: 1024
  - mask_blur: 0
  - mask_offset: 0
  - invert_output: false
  - refine_foreground: false
  - background: "Alpha"
  - background_color: "#000000"
  - fed by: image ← [225] LoadImage

### [227] Trellis2PreProcessImage  —  “Trellis2 - PreProcess Image”
  - padding: 5
  - remove_background: false
  - max_size: 2048
  - fed by: image ← [226] RMBG

### [231] SaveImage  —  “Save Image”
  - filename_prefix: "Flux2"
  - fed by: images ← [230:174] VAEDecode

### [230:172] KSamplerSelect  —  “KSamplerSelect”
  - sampler_name: "euler"

### [230:173] SamplerCustomAdvanced  —  “SamplerCustomAdvanced”
  - fed by: noise ← [230:175] RandomNoise; guider ← [230:177] CFGGuider; sampler ← [230:172] KSamplerSelect; sigmas ← [230:178] Flux2Scheduler; latent_image ← [230:188] EmptyLatentImage

### [230:174] VAEDecode  —  “VAE Decode”
  - fed by: samples ← [230:173] SamplerCustomAdvanced; vae ← [230:179] VAELoader

### [230:175] RandomNoise  —  “RandomNoise”
  - noise_seed: 1080018651375883

### [230:176] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_3_8b_fp8mixed.safetensors"
  - type: "flux2"
  - device: "default"

### [230:177] CFGGuider  —  “CFGGuider”
  - cfg: 1.5
  - fed by: model ← [230:190] UNETLoader; positive ← [230:183] ReferenceLatent; negative ← [230:184] ReferenceLatent

### [230:178] Flux2Scheduler  —  “Flux2Scheduler”
  - steps: 8
  - width: 1024
  - height: 1024

### [230:179] VAELoader  —  “Load VAE”
  - vae_name: "flux2-vae.safetensors"

### [230:180] CLIPTextEncode  —  “CLIP Text Encode ( Negative Prompt)”
  - text: ""
  - fed by: clip ← [230:176] CLIPLoader

### [230:183] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [230:189] CLIPTextEncode; latent ← [230:185] VAEEncode

### [230:184] ReferenceLatent  —  “ReferenceLatent”
  - fed by: conditioning ← [230:180] CLIPTextEncode; latent ← [230:185] VAEEncode

### [230:185] VAEEncode  —  “VAE Encode”
  - fed by: pixels ← [230:215] ImageComposite+; vae ← [230:179] VAELoader

### [230:188] EmptyLatentImage  —  “Empty Latent Image”
  - width: 1024
  - height: 1024
  - batch_size: 1

### [230:189] CLIPTextEncode  —  “CLIP Text Encode (Positive Prompt)”
  - text: "Upscale the image"
  - fed by: clip ← [230:176] CLIPLoader

### [230:190] UNETLoader  —  “Load Diffusion Model”
  - unet_name: "flux-2-klein-9b-kv-fp8.safetensors"
  - weight_dtype: "default"

### [230:213] SolidMask  —  “SolidMask”
  - value: 0
  - fed by: width ← [230:223] GetImageSize; height ← [230:223] GetImageSize

### [230:214] MaskToImage  —  “Convert Mask to Image”
  - fed by: mask ← [230:213] SolidMask

### [230:215] ImageComposite+  —  “🔧 Image Composite”
  - x: 0
  - y: 0
  - offset_x: 0
  - offset_y: 0
  - fed by: destination ← [227] Trellis2PreProcessImage; source ← [230:214] MaskToImage; mask ← [230:216] MaskFromColor+

### [230:216] MaskFromColor+  —  “🔧 Mask From Color”
  - red: 255
  - green: 255
  - blue: 255
  - threshold: 0
  - fed by: image ← [227] Trellis2PreProcessImage

### [230:223] GetImageSize  —  “Get Image Size”
  - fed by: image ← [227] Trellis2PreProcessImage

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\SAM 3.1 - Part with Qwen.json  (API format)
- nodes: 30

### [163] LoadImage  —  “Load Image”
  - image: "Image_1024_00156_.png"

### [165] SolidMask  —  “SolidMask”
  - value: 0
  - fed by: width ← [171] GetImageSize+; height ← [171] GetImageSize+

### [166] MaskToImage  —  “Convert Mask to Image”
  - fed by: mask ← [165] SolidMask

### [168] InvertMask  —  “InvertMask”
  - fed by: mask ← [164:75] SAM3_Detect

### [169] ImageComposite+  —  “🔧 Image Composite”
  - x: 0
  - y: 0
  - offset_x: 0
  - offset_y: 0
  - fed by: destination ← [163] LoadImage; source ← [166] MaskToImage; mask ← [168] InvertMask

### [171] GetImageSize+  —  “🔧 Get Image Size”
  - fed by: image ← [163] LoadImage

### [192] SaveImage  —  “Save Image”
  - filename_prefix: "Qwen"
  - fed by: images ← [207:203] VAEDecodeTiled

### [210] RMBG  —  “Remove Background (RMBG)”
  - model: "RMBG-2.0"
  - sensitivity: 1
  - process_res: 1024
  - mask_blur: 0
  - mask_offset: 0
  - invert_output: false
  - refine_foreground: false
  - background: "Alpha"
  - background_color: "#000000"
  - fed by: image ← [169] ImageComposite+

### [211] Trellis2PreProcessImage  —  “Trellis2 - PreProcess Image”
  - padding: 5
  - remove_background: false
  - max_size: 2048
  - fed by: image ← [210] RMBG

### [164:75] SAM3_Detect  —  “SAM3 Detect”
  - threshold: 0.5
  - refine_iterations: 3
  - individual_masks: false
  - fed by: model ← [164:77] CheckpointLoaderSimple; image ← [163] LoadImage; conditioning ← [164:78] CLIPTextEncode

### [164:77] CheckpointLoaderSimple  —  “Load Checkpoint”
  - ckpt_name: "sam3.1_multiplex_fp16.safetensors"

### [164:78] CLIPTextEncode  —  “CLIP Text Encode (Prompt)”
  - text: "Head"
  - fed by: clip ← [164:77] CheckpointLoaderSimple

### [207:193] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus”
  - prompt: ""
  - fed by: clip ← [207:202] CLIPLoader; vae ← [207:199] VAELoader; image1 ← [207:220] ImageComposite+

### [207:194] KSampler  —  “KSampler”
  - seed: 3382135155526
  - steps: 4
  - cfg: 1
  - sampler_name: "euler"
  - scheduler: "simple"
  - denoise: 1
  - fed by: model ← [207:206] CFGNorm; positive ← [207:197] FluxKontextMultiReferenceLatentMethod; negative ← [207:198] FluxKontextMultiReferenceLatentMethod; latent_image ← [207:201] EmptyLatentImage

### [207:195] UnetLoaderGGUF  —  “Unet Loader (GGUF)”
  - unet_name: "qwen-image-edit-2511-Q6_K.gguf"

### [207:196] TextEncodeQwenImageEditPlus  —  “TextEncodeQwenImageEditPlus (Positive)”
  - prompt: "Upscale the image"
  - fed by: clip ← [207:202] CLIPLoader; vae ← [207:199] VAELoader; image1 ← [207:220] ImageComposite+

### [207:197] FluxKontextMultiReferenceLatentMethod  —  “Edit Model Reference Method”
  - reference_latents_method: "index_timestep_zero"
  - fed by: conditioning ← [207:196] TextEncodeQwenImageEditPlus

### [207:198] FluxKontextMultiReferenceLatentMethod  —  “Edit Model Reference Method”
  - reference_latents_method: "index_timestep_zero"
  - fed by: conditioning ← [207:193] TextEncodeQwenImageEditPlus

### [207:199] VAELoader  —  “Load VAE”
  - vae_name: "qwen_image_vae.safetensors"

### [207:200] LoraLoaderModelOnly  —  “Load LoRA”
  - lora_name: "Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors"
  - strength_model: 1
  - fed by: model ← [207:195] UnetLoaderGGUF

### [207:201] EmptyLatentImage  —  “Empty Latent Image”
  - width: 1024
  - height: 1024
  - batch_size: 1

### [207:202] CLIPLoader  —  “Load CLIP”
  - clip_name: "qwen_2.5_vl_7b_fp8_scaled.safetensors"
  - type: "qwen_image"
  - device: "default"

### [207:203] VAEDecodeTiled  —  “VAE Decode (Tiled)”
  - tile_size: 128
  - overlap: 64
  - temporal_size: 64
  - temporal_overlap: 8
  - fed by: samples ← [207:194] KSampler; vae ← [207:199] VAELoader

### [207:205] ModelSamplingAuraFlow  —  “ModelSamplingAuraFlow”
  - shift: 3.1
  - fed by: model ← [207:200] LoraLoaderModelOnly

### [207:206] CFGNorm  —  “CFGNorm”
  - strength: 1
  - fed by: model ← [207:205] ModelSamplingAuraFlow

### [207:217] SolidMask  —  “SolidMask”
  - value: 0
  - fed by: width ← [207:221] GetImageSize; height ← [207:221] GetImageSize

### [207:218] MaskToImage  —  “Convert Mask to Image”
  - fed by: mask ← [207:217] SolidMask

### [207:219] MaskFromColor+  —  “🔧 Mask From Color”
  - red: 255
  - green: 255
  - blue: 255
  - threshold: 0
  - fed by: image ← [211] Trellis2PreProcessImage

### [207:220] ImageComposite+  —  “🔧 Image Composite”
  - x: 0
  - y: 0
  - offset_x: 0
  - offset_y: 0
  - fed by: destination ← [211] Trellis2PreProcessImage; source ← [207:218] MaskToImage; mask ← [207:219] MaskFromColor+

### [207:221] GetImageSize  —  “Get Image Size”
  - fed by: image ← [211] Trellis2PreProcessImage

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Trellis2 - Projection Hy2.0.json  (API format)
- nodes: 58

### [89] Trellis2MultiViewTexturing  —  “Trellis2 - Projection MultiView Texturing”
  - blend_texture: true
  - blend_exponent: 2
  - ortho_scale: 1.2
  - norm_size: 1.15
  - fill_holes: true
  - max_hole_size: 20
  - use_metallic: false
  - depth_eps: 0.01
  - mesh_cluster_threshold_cone_half_angle_rad: 60
  - add_alpha_channel: false
  - front_weight: 1
  - back_weight: 1
  - left_weight: 1
  - right_weight: 1
  - top_weight: 1
  - bottom_weight: 1
  - fed by: texture_size ← [1783] PrimitiveInt; custom_azimuths ← [1800] StringConcatenate; custom_elevations ← [1801] StringConcatenate; custom_weights ← [1802] StringConcatenate; trimesh ← [1805:468] Trellis2Continue; custom_images ← [1803] BatchImagesNode

### [90] RMBG  —  “Remove Background (RMBG)”
  - model: "RMBG-2.0"
  - sensitivity: 1
  - process_res: 1024
  - mask_blur: 0
  - mask_offset: 0
  - invert_output: false
  - refine_foreground: false
  - background: "Alpha"
  - background_color: "#222222"
  - fed by: image ← [101:8] Hy3DSampleMultiView

### [91] PrimitiveString  —  “Azimuths1”
  - value: "0,90,180,270,0,0,135"

### [92] PrimitiveString  —  “Elevations1”
  - value: "0,0,0,0,90,-90,-20"

### [93] PrimitiveString  —  “Weights1”
  - value: "1,0.5,1,0.5,0.5,0.5,0.5"

### [94] SaveImage  —  “Save Image”
  - fed by: filename_prefix ← [1785] StringConcatenate; images ← [90] RMBG

### [95] Trellis2ExportMesh  —  “Trellis2 - Export Mesh”
  - file_format: "glb"
  - fed by: filename_prefix ← [1784] StringConcatenate; trimesh ← [89] Trellis2MultiViewTexturing

### [96] Preview3D  —  “Preview 3D & Animation”
  - image: ""
  - fed by: model_file ← [95] Trellis2ExportMesh

### [1775] Trellis2LoadImageWithTransparency  —  “Trellis2 - Load Image with Transparency”
  - image: "Entrance01.png"

### [1777] PrimitiveString  —  “Name”
  - value: "Entrance01_XViews_Hy20"

### [1778] StringConcatenate  —  “Concatenate Text”
  - string_a: "3D/"
  - delimiter: ""
  - fed by: string_b ← [1777] PrimitiveString

### [1779] StringConcatenate  —  “Concatenate Text”
  - delimiter: "/"
  - fed by: string_a ← [1778] StringConcatenate; string_b ← [1777] PrimitiveString

### [1781] PrimitiveInt  —  “Target Face Number”
  - value: 500000

### [1782] PrimitiveInt  —  “Seed”
  - value: 12345

### [1783] PrimitiveInt  —  “Texture Size”
  - value: 2048

### [1784] StringConcatenate  —  “Concatenate Text”
  - string_b: "_TexturedMesh_MV"
  - delimiter: ""
  - fed by: string_a ← [1779] StringConcatenate

### [1785] StringConcatenate  —  “Concatenate Text”
  - string_b: "_NoBG"
  - delimiter: ""
  - fed by: string_a ← [1779] StringConcatenate

### [1793] RMBG  —  “Remove Background (RMBG)”
  - model: "RMBG-2.0"
  - sensitivity: 1
  - process_res: 1024
  - mask_blur: 0
  - mask_offset: 0
  - invert_output: false
  - refine_foreground: false
  - background: "Alpha"
  - background_color: "#222222"
  - fed by: image ← [1792:1790] Hy3DSampleMultiView

### [1794] StringConcatenate  —  “Concatenate Text”
  - string_b: "_NoBG"
  - delimiter: ""
  - fed by: string_a ← [1779] StringConcatenate

### [1795] SaveImage  —  “Save Image”
  - fed by: filename_prefix ← [1794] StringConcatenate; images ← [1793] RMBG

### [1796] PrimitiveString  —  “Azimuths2”
  - value: "45,315,45,315,135,225,225"

### [1797] PrimitiveString  —  “Elevations2”
  - value: "-20,-20,20,20,20,20,-20"

### [1798] PrimitiveString  —  “Weights2”
  - value: "0.5,0.5,0.5,0.5,0.5,0.5,0.5"

### [1799] Trellis2Continue  —  “Trellis2 - Continue”
  - fed by: input_1 ← [90] RMBG; input_2 ← [1805:468] Trellis2Continue

### [1800] StringConcatenate  —  “Azimuths”
  - delimiter: ","
  - fed by: string_a ← [91] PrimitiveString; string_b ← [1796] PrimitiveString

### [1801] StringConcatenate  —  “Elevations”
  - delimiter: ","
  - fed by: string_a ← [92] PrimitiveString; string_b ← [1797] PrimitiveString

### [1802] StringConcatenate  —  “Weights”
  - delimiter: ","
  - fed by: string_a ← [93] PrimitiveString; string_b ← [1798] PrimitiveString

### [1803] BatchImagesNode  —  “Batch Images”
  - fed by: images.image0 ← [90] RMBG; images.image1 ← [1793] RMBG

### [1808] SaveTextCustomNode  —  “Save Text Custom Node”
  - subfolder_dir: ""
  - filename: "_camera_config"
  - fed by: filename_prefix ← [1779] StringConcatenate; text ← [1810] StringConcatenate

### [1809] StringConcatenate  —  “All Texts”
  - delimiter: "#"
  - fed by: string_a ← [1800] StringConcatenate; string_b ← [1801] StringConcatenate

### [1810] StringConcatenate  —  “All Texts”
  - delimiter: "#"
  - fed by: string_a ← [1809] StringConcatenate; string_b ← [1802] StringConcatenate

### [101:3] Hy3DRenderMultiView  —  “Hy3D Render MultiView”
  - render_size: 1024
  - texture_size: 1024
  - generate_textured_maps: false
  - blender_exec_path: ""
  - normal_space: "world"
  - fed by: trimesh ← [1805:468] Trellis2Continue; camera_config ← [101:4] Hy3DCameraConfig

### [101:4] Hy3DCameraConfig  —  “Hy3D Camera Config”
  - camera_distance: 1.1
  - ortho_scale: 1.2
  - fed by: camera_azimuths ← [91] PrimitiveString; camera_elevations ← [92] PrimitiveString; view_weights ← [93] PrimitiveString

### [101:6] DownloadAndLoadHy3DPaintModel  —  “(Down)Load Hy3D PaintModel”
  - model: "hunyuan3d-paint-v2-0"

### [101:7] Hy3DDiffusersSchedulerConfig  —  “Hy3D Diffusers Scheduler Config”
  - scheduler: "Euler"
  - sigmas: "default"
  - fed by: pipeline ← [101:6] DownloadAndLoadHy3DPaintModel

### [101:8] Hy3DSampleMultiView  —  “Hy3D Sample MultiView”
  - view_size: 1024
  - steps: 10
  - seed: 12345
  - denoise_strength: 1
  - fed by: pipeline ← [101:6] DownloadAndLoadHy3DPaintModel; ref_image ← [1775] Trellis2LoadImageWithTransparency; normal_maps ← [101:3] Hy3DRenderMultiView; position_maps ← [101:3] Hy3DRenderMultiView; camera_config ← [101:4] Hy3DCameraConfig; scheduler ← [101:7] Hy3DDiffusersSchedulerConfig

### [1792:1787] DownloadAndLoadHy3DPaintModel  —  “(Down)Load Hy3D PaintModel”
  - model: "hunyuan3d-paint-v2-0"

### [1792:1788] Hy3DDiffusersSchedulerConfig  —  “Hy3D Diffusers Scheduler Config”
  - scheduler: "Euler"
  - sigmas: "default"
  - fed by: pipeline ← [1792:1787] DownloadAndLoadHy3DPaintModel

### [1792:1789] Hy3DRenderMultiView  —  “Hy3D Render MultiView”
  - render_size: 1024
  - texture_size: 1024
  - generate_textured_maps: false
  - blender_exec_path: ""
  - normal_space: "world"
  - fed by: trimesh ← [1799] Trellis2Continue; camera_config ← [1792:1791] Hy3DCameraConfig

### [1792:1790] Hy3DSampleMultiView  —  “Hy3D Sample MultiView”
  - view_size: 1024
  - steps: 10
  - seed: 12345
  - denoise_strength: 1
  - fed by: pipeline ← [1792:1787] DownloadAndLoadHy3DPaintModel; ref_image ← [1775] Trellis2LoadImageWithTransparency; normal_maps ← [1792:1789] Hy3DRenderMultiView; position_maps ← [1792:1789] Hy3DRenderMultiView; camera_config ← [1792:1791] Hy3DCameraConfig; scheduler ← [1792:1788] Hy3DDiffusersSchedulerConfig

### [1792:1791] Hy3DCameraConfig  —  “Hy3D Camera Config”
  - camera_distance: 1.1
  - ortho_scale: 1.2
  - fed by: camera_azimuths ← [1796] PrimitiveString; camera_elevations ← [1797] PrimitiveString; view_weights ← [1798] PrimitiveString

### [1805:1605] Trellis2SimplifyMesh  —  “Trellis2 - Simplify Mesh”
  - method: "Cumesh"
  - fed by: target_face_num ← [1781] PrimitiveInt; mesh ← [1805:404] Trellis2ReconstructMeshWithQuad

### [1805:1686] Trellis2FovMoGeCameraConfig  —  “Trellis2 - Fov MoGe Camera Config”
  - fov: 0.1
  - unit: "rad"
  - extend_pixel: 0
  - mesh_scale: 1

### [1805:1687] Trellis2TexSlatGenerator  —  “Trellis2 - Tex Slat Generator”
  - resolution: 1024
  - texture_steps: 12
  - texture_guidance_strength: 1
  - texture_guidance_rescale: 0
  - texture_rescale_t: 3
  - texture_sampler: "euler"
  - texture_guidance_interval_start: 0.6
  - texture_guidance_interval_end: 0.9
  - verbose: false
  - dino_lock: 0
  - dino_substeps: 2
  - dino_foundation_cap: 0.92
  - fed by: from_resolution ← [1805:400] Trellis2ShapeCascadeGenerator; pipeline ← [1805:400] Trellis2ShapeCascadeGenerator; image_cond ← [1805:397] Trellis2ImageCondGenerator; shape_slat ← [1805:400] Trellis2ShapeCascadeGenerator; image ← [1805:410] Trellis2PreProcessImage; moge_camera_config ← [1805:1686] Trellis2FovMoGeCameraConfig

### [1805:1688] Trellis2UnWrapAndRasterizer  —  “Trellis2 - UV Unwrap and Rasterize”
  - mesh_cluster_threshold_cone_half_angle_rad: 60
  - mesh_cluster_refine_iterations: 0
  - mesh_cluster_global_iterations: 1
  - mesh_cluster_smooth_strength: 1
  - texture_alpha_mode: "OPAQUE"
  - double_side_material: false
  - bake_on_vertices: false
  - use_custom_normals: true
  - inpainting: "telea"
  - reorient_vertices: "90 degrees"
  - fed by: texture_size ← [1783] PrimitiveInt; mesh ← [1805:1763] Trellis2FillHolesWithMeshlib; bvh ← [1805:401] Trellis2DecodeLatents

### [1805:1763] Trellis2FillHolesWithMeshlib  —  “Trellis2 - Fill Holes with Meshlib”
  - fed by: mesh ← [1805:1605] Trellis2SimplifyMesh

### [1805:396] Trellis2LoadModel  —  “Trellis2 - LoadModel”
  - modelname: "microsoft/TRELLIS.2-4B"
  - backend: "flash_attn"
  - device: "cuda"
  - low_vram: true
  - keep_models_loaded: false
  - conv_backend: "flex_gemm"
  - sparse_backend: "flash_attn"
  - use_reconviagen: false

### [1805:397] Trellis2ImageCondGenerator  —  “Trellis2 - ImageCond Generator”
  - max_views: 1
  - fed by: pipeline ← [1805:396] Trellis2LoadModel; image ← [1805:410] Trellis2PreProcessImage

### [1805:398] Trellis2SparseGenerator  —  “Trellis2 - Sparse Generator”
  - sparse_structure_steps: 25
  - sparse_structure_guidance_strength: 7.5
  - sparse_structure_guidance_rescale: 0.01
  - sparse_structure_rescale_t: 5
  - sparse_structure_sampler: "heun"
  - sparse_structure_resolution: 32
  - sparse_structure_guidance_interval_start: 0.1
  - sparse_structure_guidance_interval_end: 1
  - fill_holes: true
  - hole_iterations: 1
  - verbose: false
  - dino_lock: 0.65
  - dino_substeps: 2
  - hole_fill_algorithm: "flood_fill"
  - dino_foundation_cap: 0.92
  - keep_only_shell: true
  - fed by: seed ← [1782] PrimitiveInt; pipeline ← [1805:397] Trellis2ImageCondGenerator; image_cond ← [1805:397] Trellis2ImageCondGenerator; image ← [1805:410] Trellis2PreProcessImage; moge_camera_config ← [1805:1686] Trellis2FovMoGeCameraConfig

### [1805:399] Trellis2ShapeGenerator  —  “Trellis2 - Shape Generator”
  - resolution: 512
  - shape_steps: 12
  - shape_guidance_strength: 7.5
  - shape_guidance_rescale: 0.5
  - shape_rescale_t: 3
  - shape_sampler: "heun"
  - shape_guidance_interval_start: 0.6
  - shape_guidance_interval_end: 1
  - verbose: false
  - dino_lock: 0.65
  - dino_substeps: 2
  - dino_foundation_cap: 0.92
  - fed by: pipeline ← [1805:398] Trellis2SparseGenerator; image_cond ← [1805:397] Trellis2ImageCondGenerator; coords ← [1805:398] Trellis2SparseGenerator; image ← [1805:410] Trellis2PreProcessImage; moge_camera_config ← [1805:1686] Trellis2FovMoGeCameraConfig

### [1805:400] Trellis2ShapeCascadeGenerator  —  “Trellis2 - Shape Cascade Generator”
  - to_resolution: 1024
  - max_num_tokens: 999999
  - shape_steps: 12
  - shape_guidance_strength: 7.5
  - shape_guidance_rescale: 0.5
  - shape_rescale_t: 3
  - shape_sampler: "heun"
  - shape_guidance_interval_start: 0.6
  - shape_guidance_interval_end: 1
  - verbose: false
  - dino_lock: 0.65
  - dino_substeps: 2
  - dino_foundation_cap: 0.92
  - fed by: from_resolution ← [1805:399] Trellis2ShapeGenerator; sparse_structure_resolution ← [1805:398] Trellis2SparseGenerator; pipeline ← [1805:399] Trellis2ShapeGenerator; image_cond ← [1805:397] Trellis2ImageCondGenerator; shape_slat ← [1805:399] Trellis2ShapeGenerator; image ← [1805:410] Trellis2PreProcessImage; moge_camera_config ← [1805:1686] Trellis2FovMoGeCameraConfig

### [1805:401] Trellis2DecodeLatents  —  “Trellis2 - Decode Latents”
  - use_tiled_decoder: true
  - fed by: resolution ← [1805:400] Trellis2ShapeCascadeGenerator; pipeline ← [1805:1687] Trellis2TexSlatGenerator; shape_slat ← [1805:400] Trellis2ShapeCascadeGenerator; texture_slat ← [1805:1687] Trellis2TexSlatGenerator

### [1805:404] Trellis2ReconstructMeshWithQuad  —  “Trellis2 - Reconstruct Mesh With Quad”
  - remesh_band: 1
  - resolution: 1024
  - remove_floaters: true
  - remove_inner_faces: true
  - fed by: mesh ← [1805:401] Trellis2DecodeLatents

### [1805:408] Trellis2SmoothNormals  —  “Trellis2 - Smooth Normals”
  - fed by: trimesh ← [1805:1688] Trellis2UnWrapAndRasterizer

### [1805:409] Trellis2ExportMesh  —  “Trellis2 - Export Mesh”
  - file_format: "glb"
  - fed by: filename_prefix ← [1805:414] StringConcatenate; trimesh ← [1805:408] Trellis2SmoothNormals

### [1805:410] Trellis2PreProcessImage  —  “Trellis2 - PreProcess Image”
  - padding: 5
  - remove_background: false
  - max_size: 1024
  - fed by: image ← [1775] Trellis2LoadImageWithTransparency

### [1805:414] StringConcatenate  —  “Concatenate Text”
  - string_b: "_TexturedMesh"
  - delimiter: ""
  - fed by: string_a ← [1779] StringConcatenate

### [1805:468] Trellis2Continue  —  “Trellis2 - Continue”
  - fed by: input_1 ← [1805:408] Trellis2SmoothNormals; input_2 ← [1805:409] Trellis2ExportMesh

## Node catalogue entries for the types above

- **AILab_QwenVL_PromptEnhancer**: NOT in /object_info (node pack not installed or renamed)
- **BatchImagesNode** (Batch Images), category `image/batch`
  - description: (none)
  - inputs: images:COMFY_AUTOGROW_V3
  - outputs: IMAGE:IMAGE
- **CFGGuider** (CFG Guider), category `model/sampling/guiders`
  - description: (none)
  - inputs: model:MODEL, positive:CONDITIONING, negative:CONDITIONING, cfg:FLOAT
  - outputs: GUIDER:GUIDER
- **CFGNorm** (None), category `advanced/guidance`
  - description: (none)
  - inputs: model:MODEL, strength:FLOAT, pre_cfg:BOOLEAN
  - outputs: patched_model:MODEL
- **CLIPLoader** (Load CLIP), category `model/loaders`
  - description: Recipes:
sd: clip-l
stable cascade: clip-g
sd3: t5 xxl / clip-g / clip-l
stable audio: t5 base
mochi: t5 xxl
cogvideox: t5 xxl (226-token padding)
cosmos: old t5 xxl
lumina2: gemma 2 2B
wan: umt5 xxl
hidream: llama-3.1 (Recommend) or t5
omnigen2: qwen vl 2.5 3B
joyimage: qwen3-vl 8B
lens: gpt-oss-20b
pixeldit: gemma 2 2B elm
minimax: MiniMax H3 Qwen3-VL or Music3 Qwen/RVQ
  - inputs: clip_name:COMBO, type:COMBO, device:COMBO
  - outputs: CLIP:CLIP
- **CLIPTextEncode** (CLIP Text Encode (Prompt)), category `model/conditioning`
  - description: Encodes a text prompt using a CLIP model into an embedding that can be used to guide the diffusion model towards generating specific images.
  - inputs: text:STRING, clip:CLIP
  - outputs: CONDITIONING:CONDITIONING
- **Canny** (Detect Edges (Canny)), category `image/filters`
  - description: (none)
  - inputs: image:IMAGE, low_threshold:FLOAT, high_threshold:FLOAT
  - outputs: IMAGE:IMAGE
- **CheckpointLoaderSimple** (Load Checkpoint), category `model/loaders`
  - description: Loads a diffusion model checkpoint, diffusion models are used to denoise latents.
  - inputs: ckpt_name:COMBO
  - outputs: MODEL:MODEL, CLIP:CLIP, VAE:VAE
- **ComfySwitchNode** (If/Else Switch), category `utilities/logic`
  - description: (none)
  - inputs: switch:BOOLEAN, on_false:COMFY_MATCHTYPE_V3, on_true:COMFY_MATCHTYPE_V3
  - outputs: output:COMFY_MATCHTYPE_V3
- **DownloadAndLoadHy3DPaintModel**: NOT in /object_info (node pack not installed or renamed)
- **EmptyFlux2LatentImage** (Empty Flux 2 Latent), category `model/latent/flux`
  - description: (none)
  - inputs: width:INT, height:INT, batch_size:INT
  - outputs: LATENT:LATENT
- **EmptyLatentImage** (Empty Latent Image), category `model/latent`
  - description: Create a new batch of empty latent images to be denoised via sampling.
  - inputs: width:INT, height:INT, batch_size:INT
  - outputs: LATENT:LATENT
- **EmptySD3LatentImage** (None), category `model/latent/stable diffusion`
  - description: (none)
  - inputs: width:INT, height:INT, batch_size:INT
  - outputs: LATENT:LATENT
- **Flux2Scheduler** (None), category `model/sampling/schedulers`
  - description: (none)
  - inputs: steps:INT, width:INT, height:INT
  - outputs: SIGMAS:SIGMAS
- **FluxKontextMultiReferenceLatentMethod** (Edit Model Reference Method), category `model/conditioning/flux`
  - description: (none)
  - inputs: conditioning:CONDITIONING, reference_latents_method:COMBO
  - outputs: CONDITIONING:CONDITIONING
- **GetImageSize** (Get Image Size), category `image`
  - description: Returns the width, height, and batch size of the image.
  - inputs: image:IMAGE
  - outputs: width:INT, height:INT, batch_size:INT
- **GetImageSize+**: NOT in /object_info (node pack not installed or renamed)
- **GrowMaskWithBlur**: NOT in /object_info (node pack not installed or renamed)
- **Hy3DCameraConfig**: NOT in /object_info (node pack not installed or renamed)
- **Hy3DDiffusersSchedulerConfig**: NOT in /object_info (node pack not installed or renamed)
- **Hy3DRenderMultiView**: NOT in /object_info (node pack not installed or renamed)
- **Hy3DSampleMultiView**: NOT in /object_info (node pack not installed or renamed)
- **Image Comparer (rgthree)**: NOT in /object_info (node pack not installed or renamed)
- **ImageComposite+**: NOT in /object_info (node pack not installed or renamed)
- **ImageCompositeMasked** (Image Composite Masked), category `image/compositing`
  - description: (none)
  - inputs: destination:IMAGE, source:IMAGE, x:INT, y:INT, resize_source:BOOLEAN, mask:MASK
  - outputs: IMAGE:IMAGE
- **ImageScale** (Upscale Image), category `image/upscaling`
  - description: (none)
  - inputs: image:IMAGE, upscale_method:COMBO, width:INT, height:INT, crop:COMBO
  - outputs: IMAGE:IMAGE
- **ImageScaleToMaxDimension** (Scale Image to Max Dimension), category `image/upscaling`
  - description: (none)
  - inputs: image:IMAGE, upscale_method:COMBO, largest_size:INT
  - outputs: IMAGE:IMAGE
- **InvertMask** (Invert Mask), category `image/mask`
  - description: (none)
  - inputs: mask:MASK
  - outputs: MASK:MASK
- **KSampler** (KSampler), category `model/sampling`
  - description: Uses the provided model, positive and negative conditioning to denoise the latent image.
  - inputs: model:MODEL, seed:INT, steps:INT, cfg:FLOAT, sampler_name:COMBO, scheduler:COMBO, positive:CONDITIONING, negative:CONDITIONING, latent_image:LATENT, denoise:FLOAT
  - outputs: LATENT:LATENT
- **KSamplerSelect** (None), category `model/sampling/samplers`
  - description: (none)
  - inputs: sampler_name:COMBO
  - outputs: SAMPLER:SAMPLER
- **LoadImage** (Load Image), category `image`
  - description: (none)
  - inputs: image:COMBO
  - outputs: IMAGE:IMAGE, MASK:MASK
- **LoadImageMask** (Load Image (as Mask)), category `image`
  - description: (none)
  - inputs: image:COMBO, channel:COMBO
  - outputs: MASK:MASK
- **LoraLoaderModelOnly** (Load LoRA), category `model/loaders`
  - description: This LoRAs loader is used to modify the diffusion model, altering the way in which latents are denoised such as applying styles. Multiple LoRA nodes can be linked together.
  - inputs: model:MODEL, lora_name:COMBO, strength_model:FLOAT
  - outputs: MODEL:MODEL
- **MaskFromColor+**: NOT in /object_info (node pack not installed or renamed)
- **MaskToImage** (Convert Mask to Image), category `image/mask`
  - description: (none)
  - inputs: mask:MASK
  - outputs: IMAGE:IMAGE
- **ModelSamplingAuraFlow** (ModelSamplingAuraFlow), category `model/patch`
  - description: (none)
  - inputs: model:MODEL, shift:FLOAT, sampling:COMBO
  - outputs: MODEL:MODEL
- **Preview3D** (Preview 3D & Animation (DEPRECATED)), category `3d`
  - description: Preview a 3D model file without saving it to the ComfyUI output directory.
  - inputs: model_file:STRING,FILE_3D_GLB,FILE_3D_GLTF,FILE_3D_FBX,FILE_3D_OBJ,FILE_3D_STL,FILE_3D_USDZ,FILE_3D, camera_info:LOAD3D_CAMERA, bg_image:IMAGE
  - outputs: (none)
- **PrimitiveBoolean** (Boolean), category `utilities/primitive`
  - description: (none)
  - inputs: value:BOOLEAN
  - outputs: BOOLEAN:BOOLEAN
- **PrimitiveInt** (Int), category `utilities/primitive`
  - description: (none)
  - inputs: value:INT
  - outputs: INT:INT
- **PrimitiveString** (Text), category `utilities/primitive`
  - description: (none)
  - inputs: value:STRING
  - outputs: STRING:STRING
- **PrimitiveStringMultiline** (Text (Multiline)), category `utilities/primitive`
  - description: (none)
  - inputs: value:STRING
  - outputs: STRING:STRING
- **RMBG**: NOT in /object_info (node pack not installed or renamed)
- **RandomNoise** (None), category `model/sampling/noise`
  - description: (none)
  - inputs: noise_seed:INT
  - outputs: NOISE:NOISE
- **ReferenceLatent** (Set Reference Latent), category `model/conditioning`
  - description: This node sets the guiding latent for an edit model. If the model supports it you can chain multiple to set multiple reference images.
  - inputs: conditioning:CONDITIONING, latent:LATENT
  - outputs: CONDITIONING:CONDITIONING
- **ResizeMask**: NOT in /object_info (node pack not installed or renamed)
- **SAM3_Detect** (SAM3 Detect), category `image/detection`
  - description: (none)
  - inputs: model:MODEL, image:IMAGE, threshold:FLOAT, refine_iterations:INT, individual_masks:BOOLEAN, conditioning:CONDITIONING, bboxes:BOUNDING_BOX, positive_coords:STRING, negative_coords:STRING
  - outputs: masks:MASK, bboxes:BOUNDING_BOX
- **SamplerCustomAdvanced** (None), category `model/sampling/custom`
  - description: (none)
  - inputs: noise:NOISE, guider:GUIDER, sampler:SAMPLER, sigmas:SIGMAS, latent_image:LATENT
  - outputs: output:LATENT, denoised_output:LATENT
- **SaveImage** (Save Image), category `image`
  - description: Saves the input images to your ComfyUI output directory.
  - inputs: images:IMAGE, filename_prefix:STRING
  - outputs: images:IMAGE
- **SaveTextCustomNode**: NOT in /object_info (node pack not installed or renamed)
- **SetLatentNoiseMask** (Set Latent Noise Mask), category `model/latent`
  - description: (none)
  - inputs: samples:LATENT, mask:MASK
  - outputs: LATENT:LATENT
- **SolidMask** (Create Solid Mask), category `image/mask`
  - description: (none)
  - inputs: value:FLOAT, width:INT, height:INT
  - outputs: MASK:MASK
- **StringConcatenate** (Concatenate Text), category `text`
  - description: (none)
  - inputs: string_a:STRING, string_b:STRING, delimiter:STRING
  - outputs: STRING:STRING
- **TextEncodeQwenImageEditPlus** (Text Encode Qwen Image Edit Plus), category `model/conditioning/qwen image`
  - description: (none)
  - inputs: clip:CLIP, prompt:STRING, vae:VAE, image1:IMAGE, image2:IMAGE, image3:IMAGE
  - outputs: CONDITIONING:CONDITIONING
- **Trellis2Continue**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2DecodeLatents**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2ExportMesh**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2FillHolesNicelyWithMeshlib**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2FillHolesWithCuMesh**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2FillHolesWithMeshlib**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2FovMoGeCameraConfig**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2ImageCondGenerator**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2LoadImageWithTransparency**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2LoadModel**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2MultiViewTexturing**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2PreProcessImage**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2ReconstructMeshWithQuad**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2ShapeCascadeGenerator**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2ShapeGenerator**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2SimplifyMesh**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2SmoothNormals**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2SparseGenerator**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2TexSlatGenerator**: NOT in /object_info (node pack not installed or renamed)
- **Trellis2UnWrapAndRasterizer**: NOT in /object_info (node pack not installed or renamed)
- **UNETLoader** (Load Diffusion Model), category `model/loaders`
  - description: (none)
  - inputs: unet_name:COMBO, weight_dtype:COMBO
  - outputs: MODEL:MODEL
- **UnetLoaderGGUF**: NOT in /object_info (node pack not installed or renamed)
- **VAEDecode** (VAE Decode), category `model/latent`
  - description: Decodes latent images back into pixel space images.
  - inputs: samples:LATENT, vae:VAE
  - outputs: IMAGE:IMAGE
- **VAEDecodeTiled** (VAE Decode (Tiled)), category `model/latent`
  - description: (none)
  - inputs: samples:LATENT, vae:VAE, tile_size:INT, overlap:INT, temporal_size:INT, temporal_overlap:INT
  - outputs: IMAGE:IMAGE
- **VAEEncode** (VAE Encode), category `model/latent`
  - description: (none)
  - inputs: pixels:IMAGE, vae:VAE
  - outputs: LATENT:LATENT
- **VAELoader** (Load VAE), category `model/loaders`
  - description: (none)
  - inputs: vae_name:COMBO
  - outputs: VAE:VAE