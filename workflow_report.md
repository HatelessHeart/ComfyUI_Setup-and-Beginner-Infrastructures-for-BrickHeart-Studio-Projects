# Workflow inspection: G:\DEVstuFF\NEW

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Apply UV to Mesh.json
- nodes: 9  |  distinct types: 7
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (7): EmptyImage, Hy3DSetMeshPBRTextures, Preview3D, PrimitiveInt, Trellis2ExportMesh, Trellis2LoadMesh, Trellis2UnWrapTrimesh

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Describe Image with QwenVL.json
- nodes: 3  |  distinct types: 3
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (2): AILab_QwenVL, Display Any (rgthree)

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Flux2 and Prompt Enhancer.json
- nodes: 19  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (13): AILab_QwenVL_PromptEnhancer, CFGGuider, CLIPLoader, ComfySwitchNode, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveBoolean, PrimitiveInt, PrimitiveStringMultiline, RandomNoise, SamplerCustomAdvanced, UNETLoader

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Qwen and Prompt Enhancer.json
- nodes: 14  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (8): AILab_QwenVL_PromptEnhancer, CLIPLoader, ComfySwitchNode, EmptySD3LatentImage, LoraLoaderModelOnly, PrimitiveBoolean, PrimitiveStringMultiline, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Z Image Turbo and Prompt Enhancer.json
- nodes: 13  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (8): AILab_QwenVL_PromptEnhancer, CLIPLoader, ComfySwitchNode, ConditioningZeroOut, EmptySD3LatentImage, PrimitiveBoolean, PrimitiveStringMultiline, UNETLoader

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Image with Z-Anime and Prompt Enhancer.json
- nodes: 13  |  distinct types: 12
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (7): AILab_QwenVL_PromptEnhancer, CLIPLoader, ComfySwitchNode, EmptySD3LatentImage, PrimitiveBoolean, PrimitiveStringMultiline, UNETLoader

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Mesh Only with Hy2.1.json
- nodes: 9  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (9): Hy3D21ExportMesh, Hy3D21LoadImageWithTransparency, Hy3D21MeshGenerator, Hy3D21PostprocessMesh, Hy3D21SimpleMeshlibDecimate, Hy3D21VAEDecode, Hy3D21VAELoader, Preview3D, Trellis2PreProcessImage

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Mesh Only with Trellis2.json
- nodes: 17  |  distinct types: 16
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (16): Preview3D, PrimitiveInt, PrimitiveString, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesNicelyWithMeshlib, Trellis2FillHolesWithCuMesh, Trellis2ImageCondGenerator, Trellis2LoadImageWithTransparency, Trellis2LoadModel, Trellis2MeshWithVoxelToTrimesh, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2ShapeGenerator, Trellis2SimplifyMesh, Trellis2SparseGenerator

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Mesh with Meshflow.json
- nodes: 6  |  distinct types: 6
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (5): MeshflowExportMesh, MeshflowLoadMesh, MeshflowLoadModel, MeshflowMeshProcessor, Preview3D

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Gen Textured Mesh with Trellis2.json
- nodes: 18  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (17): Preview3D, PrimitiveInt, PrimitiveString, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesNicelyWithMeshlib, Trellis2FillHolesWithCuMesh, Trellis2ImageCondGenerator, Trellis2LoadImageWithTransparency, Trellis2LoadModel, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2ShapeGenerator, Trellis2SimplifyMesh, Trellis2SparseGenerator, Trellis2TexSlatGenerator, Trellis2UnWrapAndRasterizer

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\QRemeshify.json
- nodes: 3  |  distinct types: 3
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (3): QRemeshify, Trellis2ExportMesh, Trellis2LoadMesh

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection - Albedo - Upscaled.json
- nodes: 45  |  distinct types: 31
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (20): CFGGuider, CFGNorm, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, ImageCompositeMasked, InvertMask, KSamplerSelect, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection - Albedo.json
- nodes: 43  |  distinct types: 29
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (20): CFGGuider, CFGNorm, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, ImageCompositeMasked, InvertMask, KSamplerSelect, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection - TexturedView - Albedo - Upscaled.json
- nodes: 47  |  distinct types: 32
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (21): CFGGuider, CFGNorm, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, ImageBlend, ImageCompositeMasked, InvertMask, KSamplerSelect, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection - TexturedView - Albedo.json
- nodes: 45  |  distinct types: 30
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (21): CFGGuider, CFGNorm, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, ImageBlend, ImageCompositeMasked, InvertMask, KSamplerSelect, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection with TexturedView.json
- nodes: 29  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (15): CFGNorm, CLIPLoader, Canny, ImageBlend, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Edit Mesh Projection.json
- nodes: 27  |  distinct types: 21
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (14): CFGNorm, CLIPLoader, Canny, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Image Edit Inpainting with ImageRef - NoBg.json
- nodes: 29  |  distinct types: 21
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (13): CLIPLoader, GetImageSize, GrowMaskWithBlur, ImageScaleToMaxDimension, LoadImageMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, ResizeMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Image Edit Inpainting with ImageRef.json
- nodes: 28  |  distinct types: 20
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (12): CLIPLoader, GetImageSize, GrowMaskWithBlur, ImageScaleToMaxDimension, LoadImageMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, ReferenceLatent, ResizeMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Qwen Image Edit Inpainting.json
- nodes: 22  |  distinct types: 19
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (11): CLIPLoader, GetImageSize, GrowMaskWithBlur, Image Comparer (rgthree), ImageScaleToMaxDimension, LoadImageMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, ResizeMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Remove Background and Center.json
- nodes: 4  |  distinct types: 4
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (3): RMBG, Trellis2LoadImageWithTransparency, Trellis2PreProcessImage

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Remove Background with REMBG.json
- nodes: 7  |  distinct types: 7
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (6): ConvertAny2String, GetImageSize+, JoinStrings, RMBG, StringConstant, Trellis2LoadImageWithTransparency

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\SAM 3.1 - Part with Flux2.json
- nodes: 32  |  distinct types: 26
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 6/13 steps
- types WITHOUT curated tooltip text (17): CFGGuider, CLIPLoader, Flux2Scheduler, GetImageSize, GetImageSize+, ImageComposite+, InvertMask, KSamplerSelect, MaskFromColor+, RMBG, RandomNoise, ReferenceLatent, SAM3_Detect, SamplerCustomAdvanced, SolidMask, Trellis2PreProcessImage, UNETLoader

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\SAM 3.1 - Part with Qwen.json
- nodes: 30  |  distinct types: 25
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 6/13 steps
- types WITHOUT curated tooltip text (17): CFGNorm, CLIPLoader, FluxKontextMultiReferenceLatentMethod, GetImageSize, GetImageSize+, ImageComposite+, InvertMask, LoraLoaderModelOnly, MaskFromColor+, ModelSamplingAuraFlow, RMBG, SAM3_Detect, SolidMask, TextEncodeQwenImageEditPlus, Trellis2PreProcessImage, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\SAM 3.1 - Parts.json
- nodes: 14  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (8): ImageBatchToList+, ImageComposite+, ImageListToBatch+, InvertMask, MaskFromColor+, RMBG, SAM3_Detect, SolidMask

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Texture Mesh with Trellis2.json
- nodes: 8  |  distinct types: 8
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (8): Preview3D, Trellis2ExportMesh, Trellis2LoadImageWithTransparency, Trellis2LoadMesh, Trellis2LoadModel, Trellis2MeshTexturing, Trellis2PreProcessImage, Trellis2SmoothNormals

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Trellis2 - Projection Hy2.0 From Mesh.json
- nodes: 39  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (16): BatchImagesNode, DownloadAndLoadHy3DPaintModel, Hy3DCameraConfig, Hy3DDiffusersSchedulerConfig, Hy3DRenderMultiView, Hy3DSampleMultiView, Preview3D, PrimitiveString, RMBG, SaveTextCustomNode, StringConcatenate, Trellis2Continue, Trellis2ExportMesh, Trellis2LoadImageWithTransparency, Trellis2LoadMesh, Trellis2MultiViewTexturing

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Trellis2 - Projection Hy2.0.json
- nodes: 58  |  distinct types: 31
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (30): BatchImagesNode, DownloadAndLoadHy3DPaintModel, Hy3DCameraConfig, Hy3DDiffusersSchedulerConfig, Hy3DRenderMultiView, Hy3DSampleMultiView, Preview3D, PrimitiveInt, PrimitiveString, RMBG, SaveTextCustomNode, StringConcatenate, Trellis2Continue, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesWithMeshlib, Trellis2FovMoGeCameraConfig, Trellis2ImageCondGenerator, Trellis2LoadImageWithTransparency, Trellis2LoadModel, Trellis2MultiViewTexturing, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2ShapeCascadeGenerator, Trellis2ShapeGenerator, Trellis2SimplifyMesh, Trellis2SmoothNormals, Trellis2SparseGenerator, Trellis2TexSlatGenerator, Trellis2UnWrapAndRasterizer

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Upscale with Flux2.json
- nodes: 24  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 6/13 steps
- types WITHOUT curated tooltip text (14): CFGGuider, CLIPLoader, Flux2Scheduler, GetImageSize, ImageComposite+, KSamplerSelect, MaskFromColor+, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, SolidMask, Trellis2PreProcessImage, UNETLoader

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Upscale with InvSR.json
- nodes: 8  |  distinct types: 8
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (6): ConvertAny2String, GetImageSize+, InvSRSampler, JoinStrings, LoadInvSRModels, StringConstant

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Upscale with Model.json
- nodes: 8  |  distinct types: 8
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (4): ConvertAny2String, GetImageSize+, JoinStrings, StringConstant

## G:\DEVstuFF\NEW\3DSTUDIO\comfyui_workflows\Upscale with Qwen.json
- nodes: 22  |  distinct types: 20
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (14): CFGNorm, CLIPLoader, FluxKontextMultiReferenceLatentMethod, GetImageSize, ImageComposite+, LoraLoaderModelOnly, MaskFromColor+, ModelSamplingAuraFlow, RMBG, SolidMask, TextEncodeQwenImageEditPlus, Trellis2PreProcessImage, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Albedo Image with Flux2Klein4B.json
- nodes: 19  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (11): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Albedo Image with Flux2Klein9B.json
- nodes: 19  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (11): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\CharacterSheet with Flux2Klein9B.json
- nodes: 19  |  distinct types: 17
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (11): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Delight Image with QwenImageEdit2511.json
- nodes: 22  |  distinct types: 18
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (12): CFGNorm, CLIPLoader, FluxKontextMultiReferenceLatentMethod, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Describe Image with QwenVL.json
- nodes: 3  |  distinct types: 3
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (2): AILab_QwenVL, Display Any (rgthree)

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Edit Image with Boogu Edit Turbo.json
- nodes: 10  |  distinct types: 10
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (4): CLIPLoader, PrimitiveInt, TextEncodeBooguEdit, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Edit Image with Flux2Klein4B.json
- nodes: 18  |  distinct types: 16
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (10): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveInt, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Edit Image with Flux2Klein9B.json
- nodes: 18  |  distinct types: 16
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (10): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveInt, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Edit Image with QwenImageEdit2511.json
- nodes: 16  |  distinct types: 14
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (9): CFGNorm, CLIPLoader, FluxKontextMultiReferenceLatentMethod, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with Boogu Turbo.json
- nodes: 10  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (3): CLIPLoader, PrimitiveInt, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with Flux2Dev.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (9): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveInt, RandomNoise, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with Flux2Klein4B.json
- nodes: 14  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (9): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveInt, RandomNoise, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with Flux2Klein9B.json
- nodes: 14  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (9): CFGGuider, CLIPLoader, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, PrimitiveInt, RandomNoise, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with Krea2Turbo.json
- nodes: 10  |  distinct types: 10
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (4): CLIPLoader, ConditioningZeroOut, PrimitiveInt, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with QwenImage2512.json
- nodes: 10  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (4): CLIPLoader, EmptySD3LatentImage, LoraLoaderModelOnly, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Image with ZImageTurbo.json
- nodes: 9  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (4): CLIPLoader, ConditioningZeroOut, EmptySD3LatentImage, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Mesh Only with Hy20.json
- nodes: 9  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (8): Hy3DExportMesh, Hy3DGenerateMesh, Hy3DMiniTurboModelLoader, Hy3DPostprocessMesh, Hy3DVAEDecode, ImagePadKJ, InvertMask, Preview3D

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Mesh Only with Hy21.json
- nodes: 12  |  distinct types: 12
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (10): GetImageSize, Hy3D21ExportMesh, Hy3D21MeshGenerator2, Hy3D21ModelLoader, Hy3D21PostprocessMesh, Hy3D21VAEDecode, ImageCompositeMasked, InvertMask, Preview3D, SolidMask

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen Mesh Only with Trellis2.json
- nodes: 15  |  distinct types: 15
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (15): Preview3D, PrimitiveInt, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesWithMeshlib, Trellis2ImageCondGenerator, Trellis2LoadImageWithTransparency, Trellis2LoadModel, Trellis2MeshWithVoxelToTrimesh, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2ShapeCascadeGenerator, Trellis2ShapeGenerator, Trellis2SimplifyMesh, Trellis2SparseGenerator

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen MultiView Mesh Only with Trellis2.json
- nodes: 14  |  distinct types: 14
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (14): Preview3D, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesWithMeshlib, Trellis2ImageCondMultiViewGenerator, Trellis2LoadModel, Trellis2MeshWithVoxelToTrimesh, Trellis2ReconstructMeshWithQuad, Trellis2SelectImagesForMultiView, Trellis2ShapeCascadeMultiViewGenerator, Trellis2ShapeMultiViewGenerator, Trellis2SimplifyMesh, Trellis2SmoothNormals, Trellis2SparseMultiViewGenerator

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen T-Pose Character with QwenImage2512.json
- nodes: 15  |  distinct types: 14
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (6): AIO_Preprocessor, CLIPLoader, EmptySD3LatentImage, LoraLoaderModelOnly, PrimitiveInt, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Gen TexturedMesh with Trellis2.json
- nodes: 16  |  distinct types: 16
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (16): Preview3D, PrimitiveInt, Trellis2DecodeLatents, Trellis2ExportMesh, Trellis2FillHolesWithMeshlib, Trellis2ImageCondGenerator, Trellis2LoadImageWithTransparency, Trellis2LoadModel, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2ShapeCascadeGenerator, Trellis2ShapeGenerator, Trellis2SimplifyMesh, Trellis2SparseGenerator, Trellis2TexSlatGenerator, Trellis2UnWrapAndRasterizer

## G:\DEVstuFF\NEW\3DSTUDIO\setup\HighPoly to LowPoly Texturing with Trellis2.json
- nodes: 6  |  distinct types: 5
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (5): Preview3D, Trellis2ExportMesh, Trellis2LoadMesh, Trellis2MultiViewTexturing, Trellis2RenderMultiViewNvdiffrast

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Inpainting with Flux2Klein4B.json
- nodes: 27  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (14): CFGGuider, CLIPLoader, Flux2Scheduler, GetImageSize, ImageScaleToMaxDimension, KSamplerSelect, LoadImageMask, ModelSamplingAuraFlow, RMBG, RandomNoise, ReferenceLatent, ResizeMask, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Inpainting with Flux2Klein9B.json
- nodes: 27  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (14): CFGGuider, CLIPLoader, Flux2Scheduler, GetImageSize, ImageScaleToMaxDimension, KSamplerSelect, LoadImageMask, ModelSamplingAuraFlow, RMBG, RandomNoise, ReferenceLatent, ResizeMask, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Inpainting with QwenImageEdit.json
- nodes: 24  |  distinct types: 19
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (10): CLIPLoader, GetImageSize, ImageScaleToMaxDimension, LoadImageMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, ReferenceLatent, ResizeMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection TexturedView with QwenImageEdit - Upscaled.json
- nodes: 31  |  distinct types: 24
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (15): CFGNorm, CLIPLoader, Canny, ImageBlend, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection TexturedView with QwenImageEdit.json
- nodes: 29  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (15): CFGNorm, CLIPLoader, Canny, ImageBlend, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with Flux2Dev - Upscaled.json
- nodes: 27  |  distinct types: 24
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (16): BasicGuider, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2FunControlNetApply, Flux2FunControlNetLoader, Flux2Scheduler, FluxGuidance, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with Flux2Dev.json
- nodes: 25  |  distinct types: 22
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (16): BasicGuider, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2FunControlNetApply, Flux2FunControlNetLoader, Flux2Scheduler, FluxGuidance, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with Flux2Klein9B - Upscaled.json
- nodes: 24  |  distinct types: 21
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (13): CFGGuider, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with Flux2Klein9B.json
- nodes: 22  |  distinct types: 19
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (13): CFGGuider, CLIPLoader, Canny, EmptyFlux2LatentImage, Flux2Scheduler, KSamplerSelect, LoraLoaderModelOnly, PrimitiveInt, RMBG, RandomNoise, ReferenceLatent, SamplerCustomAdvanced, UnetLoaderGGUF

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with QwenImageEdit - Delight 2nd pass.json
- nodes: 35  |  distinct types: 21
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - SHOW  Inpaint sampler: how much to change
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (14): CFGNorm, CLIPLoader, Canny, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with QwenImageEdit - Upscaled.json
- nodes: 29  |  distinct types: 23
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (14): CFGNorm, CLIPLoader, Canny, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Mesh Projection with QwenImageEdit.json
- nodes: 27  |  distinct types: 21
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (14): CFGNorm, CLIPLoader, Canny, ImageCompositeMasked, InvertMask, LoraLoaderModelOnly, ModelSamplingAuraFlow, PrimitiveInt, RMBG, ReferenceLatent, SolidMask, TextEncodeQwenImageEditPlus, UnetLoaderGGUF, VAEDecodeTiled

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Prompt Enhancer.json
- nodes: 2  |  distinct types: 2
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (2): AILab_QwenVL_PromptEnhancer, Display Any (rgthree)

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Refine Mesh with Trellis2.json
- nodes: 14  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (13): Preview3D, PrimitiveInt, PrimitiveString, Trellis2ExportMesh, Trellis2FillHolesWithMeshlib, Trellis2LoadImageWithTransparency, Trellis2LoadMesh, Trellis2LoadModel, Trellis2MeshRefiner, Trellis2MeshWithVoxelToTrimesh, Trellis2PreProcessImage, Trellis2ReconstructMeshWithQuad, Trellis2SimplifyMesh

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Remove Background and Centered.json
- nodes: 5  |  distinct types: 4
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (2): RMBG, VisualBrunoToolsCropImageAlpha

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Remove Background with BiRefNet.json
- nodes: 3  |  distinct types: 3
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (1): BiRefNetRMBG

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Remove Background with RMBG.json
- nodes: 3  |  distinct types: 3
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 2/13 steps
- types WITHOUT curated tooltip text (1): RMBG

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Segmentation with SAM3-1.json
- nodes: 9  |  distinct types: 9
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (5): ImageBatchToList+, InvertMask, JoinImageWithAlpha, SAM3_Detect, VisualBrunoToolsCropImageAlpha

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Simplify Mesh with Trellis2.json
- nodes: 4  |  distinct types: 4
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (4): Preview3D, Trellis2ExportMesh, Trellis2LoadMesh, Trellis2SimplifyTrimesh

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Texture Mesh MultiView with Trellis2.json
- nodes: 6  |  distinct types: 6
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (6): Preview3D, Trellis2ExportMesh, Trellis2LoadMesh, Trellis2LoadModel, Trellis2MeshTexturingMultiView, Trellis2SelectImagesForMultiView

## G:\DEVstuFF\NEW\3DSTUDIO\setup\Texture Mesh with Trellis2.json
- nodes: 7  |  distinct types: 7
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (7): Preview3D, Trellis2ExportMesh, Trellis2LoadImageWithTransparency, Trellis2LoadMesh, Trellis2LoadModel, Trellis2MeshTexturing, Trellis2PreProcessImage

## G:\DEVstuFF\NEW\ComfyUI-Chord\example_workflows\chord_flux_t2i_image_to_material.json
- nodes: 18  |  distinct types: 13
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 4/13 steps
- types WITHOUT curated tooltip text (9): CLIPTextEncodeFlux, ChordLoadModel, ChordMaterialEstimation, ChordNormalToHeight, ConditioningZeroOut, DualCLIPLoader, EmptySD3LatentImage, PrimitiveStringMultiline, UNETLoader

## G:\DEVstuFF\NEW\ComfyUI-Chord\example_workflows\chord_image_to_material.json
- nodes: 9  |  distinct types: 5
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 3/13 steps
- types WITHOUT curated tooltip text (3): ChordLoadModel, ChordMaterialEstimation, ChordNormalToHeight

## G:\DEVstuFF\NEW\ComfyUI-Chord\example_workflows\chord_sdxl_t2i_image_to_material.json
- nodes: 17  |  distinct types: 11
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 6/13 steps
- types WITHOUT curated tooltip text (5): ChordLoadModel, ChordMaterialEstimation, ChordNormalToHeight, MakeCircularVAE, SeamlessTile

## G:\DEVstuFF\NEW\ComfyUI-Chord\example_workflows\chord_zimage_turbo_t2i_image_to_material.json
- nodes: 19  |  distinct types: 14
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (9): CLIPLoader, ChordLoadModel, ChordMaterialEstimation, ChordNormalToHeight, ConditioningZeroOut, EmptySD3LatentImage, ModelSamplingAuraFlow, ResizeAndPadImage, UNETLoader

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Audio Generation (Stable Audio 3 Medium Base).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 8b66c757-fe2f-4184-91f3-479a19deb565

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Audio Generation (Stable Audio 3 Medium).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 8b66c757-fe2f-4184-91f3-479a19deb565

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Brightness and Contrast.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 916dff42-6166-4d45-b028-04eaf69fbb35

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Canny to Image (Z-Image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c84f7959-3738-422b-ba6e-5808b5e90101

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Canny to Video (LTX 2.0).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 884e1862-7567-4e72-bd2a-fd4fdfd06320

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Character Replacement (SCAIL-2 Base).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 35331397-69fb-40ad-b99a-7f17b1a53017

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Character Replacement (SCAIL-2 Extend).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2ebfb952-bd3b-43c3-9390-9ea73d41bd1f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Character Replacement (SCAIL-2 Int8 Base).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): ab27c382-c076-424b-b976-d1bc3f88ba12

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Chromatic Aberration.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2c5ef154-2bde-496d-bc8b-9dcf42f2913f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Color Adjustment.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 36677b92-5dd8-47a5-9380-4da982c1894f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Color Balance.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 243b9e93-7303-4500-8c70-58acb712f5bc

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Color Curves.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d5c462c8-1372-4af8-84f2-547c83470d04

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Control to Image (Anima LLLite).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 96d13c64-6091-4166-acab-4acacde696d4

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\ControlNet (Z-Image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d2e76ecf-6e84-4b8c-8913-48efc09ec1c4

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Crop Images 2x2.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 3b5ed000-6ab3-4458-91f7-8d6d366b0b40

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Crop Images 3x3.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 7fd47bca-ff89-476c-a98d-ca6f7cf756fe

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Depth to Image (Z-Image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d8492a46-9e6c-4917-b5ea-4273aabf5f51

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Depth to Video (ltx 2.0).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 68857357-cbc2-4c3a-a786-c3a58d43f9b1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Edge-Preserving Blur.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c6dc0f88-416b-4db1-bed1-442d793de5ad

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Edit Image (Boogu Image Edit).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 8aafec59-82d8-43ab-9b1e-37c3861b9a8b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Film Grain.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 3324cf54-bcff-405f-a4bf-c5122c72fe56

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\First & Last Frame to Video (LTX-2.5).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): fd50a22f-a8b5-4ad5-a09d-65597cf21d24

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\First-Last-Frame to Video (LTX-2.3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): a5982aee-8136-4819-86a0-cf9d9e510ad6

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\First-Last-Frame to Video.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 283e4561-61a2-4538-b960-265736eb041f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\FLF2V (Wan2.1 VACE).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): b3ce3e73-fd62-47b4-b9a7-586018ca5352

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Frame Interpolation.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 022693be-2baa-4009-870a-28921508a7ef

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Geometry Estimation (MoGe).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 936dfaf2-575a-48b5-9e0c-df391319d11f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Get Any Video Frame.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): dca6e78d-fb06-421e-97f7-6ce17a665260

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Glow.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 0a99445a-aaf8-4a7f-aec3-d7d710ae1495

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Hue and Saturation.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c64f83e9-aa5d-4031-89f1-0704e39299fe

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Albedo Estimation (Marigold V2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 9387c6d1-43e7-47a7-a4a9-53546efa05ea

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Blur.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 198632a3-ee76-4aab-9ce7-a69c624eaff9

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Captioning (gemini).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): e3e78497-720e-45a2-b4fb-c7bfdb80dd11

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Channels.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 4c9d6ea4-b912-40e5-8766-6793a9758c53

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Depth Estimation (Depth Anything 3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 85e595bd-af9e-40ee-85c5-b98bb15da47a

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Depth Estimation (Lotus Depth).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 96338968-1242-4f02-b6a1-d496af4bcffe

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Depth Estimation (Marigold V2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 31c1d8c6-3e4f-4f28-94fe-6a98e980eed1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Depth Estimation (MoGe).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): ca1fac5f-abe5-4729-b7fe-2299f6630a65

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Bernini-R).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 64670aa5-a932-4e9f-a299-3bfef6ebc043

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (FireRed Image Edit 1.1).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): e35fbbeb-d7b1-46d1-a74e-959517d0fb1a

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Flux.2 Dev).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 41b0c117-7470-454c-914e-b8742dc06d62

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Flux.2 Klein 4B).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 7b34ab90-36f9-45ba-a665-71d418f0df18

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Joy Image Edit).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): ee0db3c0-fa61-4e6b-a74d-ccbe2cff1a20

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (LongCat Image Edit).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 372a02a0-a79c-40b4-84a9-34f246fe0e9c

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Mage-Flow-Edit Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 0b2e4bf5-4400-4714-ad6f-82aafcbf3d93

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Mage-Flow-Edit).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 34d802b9-bc39-4753-b675-67789a1c569f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Qwen 2509).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): eba40a3a-f6c5-48ac-b58e-55525d06b373

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Edit (Qwen 2511).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 9fa6af8b-8c99-4446-8681-bccf8ba4ea54

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Face Detection (Mediapipe).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 6062babb-b649-4a71-be9e-20ebce567744

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Inpainting (Flux.1 Fill Dev).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 6e8d6e38-bdc3-436c-be85-ef9e67e70e07

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Inpainting (Qwen-image).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c93d5779-7bfe-4511-98e2-6a665ed0dff2

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Levels.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 75bf8a72-aad8-4f3e-83ee-380e70248240

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Normal Estimation (Marigold V2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): fd1bad31-6e21-4106-8e7b-85465a9381f6

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Outpainting (Qwen-Image).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): fbf07656-8ff8-4299-a3fc-7378e0f4a004

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Segmentation (SAM3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 6e7ab3ea-96aa-470f-9b94-3d9d0e01f481

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Style Reference (Krea-2 Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 919de0b5-6d2b-4e3f-924a-11e077547229

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Gaussian Splat (TripoSplat).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 6c0b94f2-a3d2-4056-93f7-4072126afe39

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Layers(Qwen-Image-Layered).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2d2e3c8e-53b3-4618-be52-6d1d99382f0e

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Model (Hunyuan3d 2.1).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): feb7d184-edf3-4851-9fd6-57a92c00ec42

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Pose Map (SDPose Multi-Person).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 01b6a731-fb78-4070-9a38-c87146da9604

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Pose Map (SDPose-OOD).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 01b6a731-fb78-4070-9a38-c87146da9604

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Video (LTX-2.3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2454ad83-157c-40dd-9f19-5daaf4041ce0

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Video (LTX-2.5).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): db725b27-9a1d-4526-b7ac-ace4a7b16b44

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Video (MiniMax H3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d70595de-536a-4124-9bf3-d5c9ee60c978

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Video (Wan 2.2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 296b573f-1e7d-43df-a2df-925fe5e17063

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image to Video (Wan Dancer).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): dd2f850b-0f7c-40b1-8a70-db5159c81500

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Image Upscale(Z-image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): dd15cfd3-cd53-428c-b3e2-33ed4ff8fa78

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Merge Videos.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 32e6dbcc-e2d7-45c0-a245-fc74b8271dfb

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Motion Transfer (Wan Animate 2 Distilled).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 57b9369a-8c10-4351-8d2f-8b2b5771c838

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Motion Transfer (Wan Animate 2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 15bbb618-bd17-4471-9d94-185ce531cfd5

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Music Cover (YuE2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 75e2923b-fcd3-4bc5-9588-451fa1c1475b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Pose to Image (Z-Image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d8492a46-9e6c-4917-b5ea-4273aabf5f51

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Pose to Video (LTX 2.0).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 68857357-cbc2-4c3a-a786-c3a58d43f9b1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Prompt Enhance.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 24d8bbfd-39d4-4774-bff0-3de40cc7a471

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Remove Background (BiRefNet).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 5b40ca21-ba1a-41d5-b403-4d2d7acdc195

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Select Per-Line Text by Index.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 3fb7557a-470d-4983-9d8c-6d5caa9788f0

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Sharpen.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 621ba4e2-22a8-482d-a369-023753198b7b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Split Image Grid to Tiles.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 609e1fd1-b731-4b78-89ac-d19b1156b025

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Audio (ACE-Step 1.5).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 510f6b52-34ee-40dd-b532-475497dee41b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Anima Base 1.0).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): a3c0dab6-b250-4585-a0f9-8fb8b074fb2f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Anima).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): a3c0dab6-b250-4585-a0f9-8fb8b074fb2f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Boogu Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 3034737a-56b8-4622-a4af-1854c37232e4

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Ernie Image Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2a4f0815-c4d2-4e8b-9bdf-991a8403889d

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Ernie Image).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 03921aea-a70e-44b4-bc77-f6bda10f2120

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Flux.1 Dev).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 1fd98b34-59ef-4d8d-afbf-58bdd7a1cd35

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Flux.1 Krea Dev).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): aa0a207e-bf0e-477c-a87f-f58fcf5f7749

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Flux.2 Dev).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 85066daf-feda-4c7b-bbc3-d4797e8ccf0f

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Ideogram v4).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 3aa9dcf6-e101-4b91-abee-6d7a7c10023b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Krea-2 Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d4f72eea-4f9e-48f8-8702-034f2e3285b8

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Mage-Flow Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d6049ac6-5a0f-4e25-89e6-6d3e7c62fb89

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Mage-Flow).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 0712d928-9cb8-4ae9-8dd7-cf65a1fcce0e

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (NetaYume Lumina).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): fc9485c9-2acd-482e-94f1-b5fa702f2536

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Qwen-Image 2512).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): fd6ee5f8-a0a9-487a-8b44-8cb65957532a

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Qwen-Image).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): e5cfe5ba-2ae0-4bc4-869f-ab2228cb44d3

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Z-Image-Base).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 8a2bb267-5858-4aaf-bdcd-61002711af19

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image (Z-Image-Turbo).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): f2fdebf6-dfaf-43b6-9eb2-7f70613cfdc1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Image.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 2d5985c9-deef-41ae-9c34-6353d3d7d1ef

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Music (MiniMax Music 3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): ac99f841-a3de-4329-9564-953b81cf9e16

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Music (YuE2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 59dddde1-2d83-4b6e-9c71-1e5cb2d823d6

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Video (LTX-2.3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 871cf29d-2726-43a5-b61e-01fa939d699d

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Video (LTX-2.5).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 06bbe69f-691e-4b8c-928e-51e5663cd7e8

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Text to Video (Wan 2.2).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 59b2f9c7-af11-45c8-a22b-871166f816c0

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Unsharp Mask.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): d99ba3f5-8a56-4365-8e45-3f3ea7c572a1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Upscale Video (SeedVR2 3B Int8).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c076cb36-3581-4288-b284-6681dd511fa8

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Captioning (Gemini).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): dcf32045-0ee4-4efc-9aca-9f26f3a157be

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Depth Estimation (Depth Anything 3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 253ec5ca-8333-4ddf-a036-9fc0923651b9

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Depth Estimation (MoGe).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 7ff83f68-6848-47a8-aa43-9036ca6c46e8

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Edit (Bernini-R).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 70d8911e-8530-4a3d-9889-b39e8fbd131b

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Face Detection (Mediapipe).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): ca14b151-8f5e-4386-aab7-d2ec84eaf43c

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Generation (LTX-2.3 IC-LoRA).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 6cac68ab-1080-4eb5-96b5-d7db09f56b5e

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Inpaint (VOID).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): c3157b75-484a-459e-b8de-57823bef5130

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Inpainting (Wan2.1 VACE).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 21da7c57-d95a-48d7-b35a-a22d8e5f5163

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Segmentation (SAM3).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 7937cf78-b52b-40a3-93b2-b4e2e5f98df1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Stitch.json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 637913e7-0206-46ba-8ded-70ae3a7c2e19

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video to Pose Map (SDPose Multi-Person).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): 01b6a731-fb78-4070-9a38-c87146da9604

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\blueprints\Video Upscale(GAN x4).json
- nodes: 1  |  distinct types: 1
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 1/13 steps  **(no tour: need at least 2)**
- types WITHOUT curated tooltip text (1): cf95b747-3e17-46cb-8097-cac60ff9b2e1

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\tests\inference\graphs\default_graph_sdxl1_0.json
- nodes: 11  |  distinct types: 7
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (2): ConditioningZeroOut, KSamplerAdvanced

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\user\default\workflows\01_baseline_sdxl_turbo.json
- nodes: 7  |  distinct types: 6
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\user\default\workflows\02_sdxl_turbo_to_supir_2stage.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\user\default\workflows\03_turbo_inpaint_supir_3stage.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\user\default\workflows\turbo_inpaint_supir_ui.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\ComfyUI\user\default\workflows\turbo_to_supir_ui.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\custom_nodes\ComfyUI-SUPIR\example_workflows\supir_lightning_example_02.json
- nodes: 17  |  distinct types: 15
- tour steps:
  - skip  Pick the engine  (needs DiffusersLoader #1)
  - skip  Say what you want  (needs CLIPTextEncode #1)
  - skip  Choose the canvas size  (needs EmptyLatentImage #1)
  - skip  The sampler: where the picture is made  (needs KSampler #1)
  - skip  Latent → pixels  (needs VAEDecode #1)
  - skip  Your first result  (needs SaveImage #1)
  - SHOW  Hand-off to inpainting
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 5/13 steps
- types WITHOUT curated tooltip text (6): ColorMatch, GetNode, Image Comparer (rgthree), ImageResize+, SUPIR_first_stage, SetNode

## G:\DEVstuFF\NEW\ComfyUI_Test\custom_nodes\comfyui-ui-tooltips\web\turbo_inpaint_supir_ui.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\custom_nodes\comfyui-ui-tooltips\web\turbo_to_supir_ui.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\templates\01_baseline_sdxl_turbo.json
- nodes: 7  |  distinct types: 6
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\templates\02_sdxl_turbo_to_supir_2stage.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\templates\03_turbo_inpaint_supir_3stage.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\01_baseline_sdxl_turbo.json
- nodes: 7  |  distinct types: 6
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\02_sdxl_turbo_to_supir_2stage.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\03_turbo_inpaint_supir_3stage.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\baseline_txt2img.json
- nodes: 7  |  distinct types: 6
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - skip  Stage 2 setup: the restorer  (needs SUPIR_model_loader_v2 #1)
  - skip  The SUPIR sampler: avoiding cracked skin  (needs SUPIR_sample #1)
  - skip  Back to pixels, colors intact  (needs SUPIR_decode #1)
  - SHOW  Run it (Queue button)
- tour would run 7/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\sdxl_turbo_supir_upscale.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\turbo_inpaint_supir_api.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\turbo_inpaint_supir_ui.json
- nodes: 22  |  distinct types: 15
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - SHOW  Hand-off to inpainting
  - SHOW  Mask → latent
  - SHOW  Inpaint sampler: how much to change
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 13/13 steps
- types WITHOUT curated tooltip text (0): none

## G:\DEVstuFF\NEW\ComfyUI_Test\workflows\turbo_to_supir_ui.json
- nodes: 15  |  distinct types: 13
- tour steps:
  - SHOW  Pick the engine
  - SHOW  Say what you want
  - SHOW  Choose the canvas size
  - SHOW  The sampler: where the picture is made
  - SHOW  Latent → pixels
  - SHOW  Your first result
  - skip  Hand-off to inpainting  (needs LoadImage #1)
  - skip  Mask → latent  (needs VAEEncodeForInpaint #1)
  - skip  Inpaint sampler: how much to change  (needs KSampler #2)
  - SHOW  Stage 2 setup: the restorer
  - SHOW  The SUPIR sampler: avoiding cracked skin
  - SHOW  Back to pixels, colors intact
  - SHOW  Run it (Queue button)
- tour would run 10/13 steps
- types WITHOUT curated tooltip text (0): none
