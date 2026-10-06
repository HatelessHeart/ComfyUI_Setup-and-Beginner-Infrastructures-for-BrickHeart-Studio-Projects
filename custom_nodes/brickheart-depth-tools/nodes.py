"""ComfyUI nodes: thin torch wrappers around depth_slice.py."""
import numpy as np
import torch

from . import depth_slice as ds

CATEGORY = "BrickHeart/depth"


def _to_np(t):
    return t.detach().cpu().numpy().astype(np.float32)


def _img(a):
    return torch.from_numpy(np.ascontiguousarray(a.astype(np.float32)))


def _align_mask(mask, batch):
    """MASK [B or 1,H,W] -> numpy, repeated/truncated to the image batch size."""
    if mask is None:
        return None
    m = _to_np(mask)
    if m.ndim == 2:
        m = m[None]
    if m.shape[0] != batch:
        m = np.repeat(m[:1], batch, axis=0) if m.shape[0] == 1 else m[:batch]
    return m


class BHDepthSlice:
    DESCRIPTION = ("Keeps only a band of a depth map: choose a near and far fraction (0 = nearest part of the subject, "
                   "1 = farthest). Outputs the band re-spread to a full 0-1 depth map, a mask of the band, and a "
                   "histogram preview that shows where you are cutting. Use the result as a depth guide for texturing.")
    CATEGORY = CATEGORY
    FUNCTION = "run"
    RETURN_TYPES = ("IMAGE", "MASK", "IMAGE", "STRING")
    RETURN_NAMES = ("slice_depth", "slice_mask", "histogram", "range_info")

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "depth": ("IMAGE", {"tooltip": "Depth map from a depth-estimation node or a render pass. Grey image; brighter or darker = nearer, see white_is_near."}),
                "near": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01, "tooltip": "Start of the band as a fraction of the subject's depth range. 0 = nearest point."}),
                "far": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01, "tooltip": "End of the band as a fraction of the subject's depth range. 1 = farthest point."}),
                "feather": ("FLOAT", {"default": 0.05, "min": 0.0, "max": 0.5, "step": 0.01, "tooltip": "Softness of the band edges, as a fraction of the range. 0 = hard cut."}),
                "white_is_near": ("BOOLEAN", {"default": True, "tooltip": "Turn on if brighter pixels are nearer (most depth estimators). Turn off if brighter means farther."}),
                "robust_range": ("BOOLEAN", {"default": True, "tooltip": "Ignore the extreme 1% at each end when measuring the range, so stray pixels don't squash the useful depth."}),
                "remap": ("BOOLEAN", {"default": True, "tooltip": "Re-spread the band to the full 0-1 range so the guide uses all its contrast."}),
                "output_white_is_near": ("BOOLEAN", {"default": True, "tooltip": "Brightness convention of the output depth. Most depth ControlNets and guides expect white = near."}),
            },
            "optional": {
                "subject_mask": ("MASK", {"tooltip": "Measure the depth range only inside this mask (for example from background removal), and keep the band inside it."}),
            },
        }

    def run(self, depth, near, far, feather, white_is_near, robust_range, remap, output_white_is_near, subject_mask=None):
        d = ds.image_to_depth(_to_np(depth))
        B = d.shape[0]
        sm = _align_mask(subject_mask, B)
        frac, lo, hi = ds.normalize_depth(d, white_is_near, robust_range, sm)
        mask = ds.slab_mask(frac, near, far, feather)
        if sm is not None:
            mask = mask * (sm > 0.5).astype(np.float32)
        out = ds.sliced_depth(frac, mask, near, far, remap, output_white_is_near)
        hist = np.stack([ds.histogram_image(frac[i], near, far, None if sm is None else sm[i]) for i in range(B)])
        info = "; ".join(f"image {i}: raw depth range used {lo[i]:.4f} to {hi[i]:.4f}" for i in range(B))
        return (_img(ds.depth_to_rgb(out)), _img(mask), _img(hist), info)


class BHDepthSliceStack:
    DESCRIPTION = ("Splits the subject's depth range into several equal bands (for example 4) and outputs one mask and one "
                   "re-spread depth map per band. Useful for texturing in layers, front to back.")
    CATEGORY = CATEGORY
    FUNCTION = "run"
    RETURN_TYPES = ("IMAGE", "MASK", "IMAGE")
    RETURN_NAMES = ("slice_depths", "slice_masks", "histogram")
    OUTPUT_IS_LIST = (False, False, False)

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "depth": ("IMAGE", {"tooltip": "Depth map from a depth-estimation node or a render pass."}),
                "slices": ("INT", {"default": 4, "min": 2, "max": 16, "step": 1, "tooltip": "How many equal depth bands to cut. Output order is nearest band first, for each input image."}),
                "feather": ("FLOAT", {"default": 0.03, "min": 0.0, "max": 0.25, "step": 0.01, "tooltip": "Softness of the band edges so neighbouring bands blend. 0 = hard cuts."}),
                "white_is_near": ("BOOLEAN", {"default": True, "tooltip": "Turn on if brighter pixels are nearer (most depth estimators)."}),
                "robust_range": ("BOOLEAN", {"default": True, "tooltip": "Ignore the extreme 1% at each end when measuring the range."}),
                "output_white_is_near": ("BOOLEAN", {"default": True, "tooltip": "Brightness convention of the output depth maps."}),
            },
            "optional": {
                "subject_mask": ("MASK", {"tooltip": "Measure the range only inside this mask and keep the bands inside it."}),
            },
        }

    def run(self, depth, slices, feather, white_is_near, robust_range, output_white_is_near, subject_mask=None):
        d = ds.image_to_depth(_to_np(depth))
        B = d.shape[0]
        sm = _align_mask(subject_mask, B)
        frac, _, _ = ds.normalize_depth(d, white_is_near, robust_range, sm)
        outs, masks, hists = [], [], []
        for i in range(B):
            for near, far in ds.stack_edges(slices):
                m = ds.slab_mask(frac[i:i + 1], near, far, feather)
                if sm is not None:
                    m = m * (sm[i:i + 1] > 0.5).astype(np.float32)
                outs.append(ds.depth_to_rgb(ds.sliced_depth(frac[i:i + 1], m, near, far, True, output_white_is_near))[0])
                masks.append(m[0])
            hists.append(ds.histogram_image(frac[i], 0.0, 1.0, None if sm is None else sm[i]))
        return (_img(np.stack(outs)), _img(np.stack(masks)), _img(np.stack(hists)))


NODE_CLASS_MAPPINGS = {"BHDepthSlice": BHDepthSlice, "BHDepthSliceStack": BHDepthSliceStack}
NODE_DISPLAY_NAME_MAPPINGS = {"BHDepthSlice": "BrickHeart Depth Slice", "BHDepthSliceStack": "BrickHeart Depth Slice Stack"}
