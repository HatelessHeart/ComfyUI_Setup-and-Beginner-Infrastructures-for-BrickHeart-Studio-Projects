"""Pure-numpy depth slicing math (no torch, no ComfyUI imports), so it can be tested anywhere.

Conventions
-----------
* depth arrays are float32 [B, H, W]; images are [B, H, W, C] in 0..1 (ComfyUI IMAGE).
* "fraction" = position inside the subject's depth range after normalisation:
  0.0 = nearest point, 1.0 = farthest point.
"""
import numpy as np


def image_to_depth(img):
    """[B,H,W,C] (or [B,H,W]) -> [B,H,W] float32 by averaging colour channels."""
    a = np.asarray(img, dtype=np.float32)
    if a.ndim == 4:
        a = a[..., :3].mean(axis=-1) if a.shape[-1] >= 3 else a[..., 0]
    return a


def normalize_depth(depth, white_is_near=True, robust=True, subject_mask=None):
    """Map each image's depth into fractions 0 (near) .. 1 (far).

    The range is measured only inside subject_mask (if given), so a plain background
    cannot stretch or squash the object's depth. robust=True ignores the extreme 1% at
    each end (outlier pixels from edges/noise).
    Returns (fractions [B,H,W], lo [B], hi [B]) where lo/hi are the raw depth values used.
    """
    d = np.asarray(depth, dtype=np.float32)
    out = np.empty_like(d)
    los, his = [], []
    for i in range(d.shape[0]):
        valid = np.ones(d[i].shape, bool) if subject_mask is None else (np.asarray(subject_mask)[min(i, len(subject_mask) - 1)] > 0.5)
        v = d[i][valid]
        if v.size == 0:           # empty mask: fall back to the whole image
            v = d[i].ravel()
        lo, hi = (np.percentile(v, 1), np.percentile(v, 99)) if robust else (v.min(), v.max())
        if hi - lo < 1e-6:
            hi = lo + 1e-6
        f = np.clip((d[i] - lo) / (hi - lo), 0.0, 1.0)
        out[i] = 1.0 - f if white_is_near else f
        los.append(float(lo)); his.append(float(hi))
    return out, np.array(los), np.array(his)


def _smoothstep(x, e0, e1):
    t = np.clip((x - e0) / max(e1 - e0, 1e-9), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def slab_mask(frac, near, far, feather=0.0):
    """Soft mask of the pixels whose depth fraction lies in [near, far]."""
    near, far = float(min(near, far)), float(max(near, far))
    if feather <= 0:
        return ((frac >= near) & (frac <= far)).astype(np.float32)
    f = float(feather)
    rise = _smoothstep(frac, near - f, near + f) if near > 0 else np.ones_like(frac)
    fall = 1.0 - _smoothstep(frac, far - f, far + f) if far < 1 else np.ones_like(frac)
    return (rise * fall).astype(np.float32)


def sliced_depth(frac, mask, near, far, remap=True, output_white_is_near=True, background=0.0):
    """Depth map for the slab: optionally re-spread to the full 0..1 range, with the
    outside of the slab set to `background`."""
    near, far = float(min(near, far)), float(max(near, far))
    d = np.clip((frac - near) / max(far - near, 1e-9), 0.0, 1.0) if remap else frac
    d = 1.0 - d if output_white_is_near else d
    return (d * mask + float(background) * (1.0 - mask)).astype(np.float32)


def depth_to_rgb(d):
    """[B,H,W] -> [B,H,W,3] grey image."""
    return np.repeat(d[..., None], 3, axis=-1).astype(np.float32)


def histogram_image(frac, near, far, valid=None, bins=64, width=256, height=128):
    """Small preview: distribution of depth fractions with the chosen slab shaded.
    Left edge = nearest, right edge = farthest. Returns [height, width, 3] float32."""
    v = frac if valid is None else frac[valid > 0.5]
    v = v.ravel() if v.size else frac.ravel()
    counts, _ = np.histogram(v, bins=bins, range=(0.0, 1.0))
    peak = max(counts.max(), 1)
    img = np.full((height, width, 3), 0.08, np.float32)
    near, far = float(min(near, far)), float(max(near, far))
    x_near, x_far = int(round(near * (width - 1))), int(round(far * (width - 1)))
    img[:, x_near:x_far + 1] += np.array([0.0, 0.10, 0.12], np.float32)       # shaded slab
    for b in range(bins):
        x0, x1 = int(b * width / bins), max(int((b + 1) * width / bins) - 1, int(b * width / bins) + 1)
        h = int(round(counts[b] / peak * (height - 4)))
        centre = (b + 0.5) / bins
        col = np.array([0.0, 0.9, 1.0], np.float32) if near <= centre <= far else np.array([0.55, 0.55, 0.55], np.float32)
        if h > 0:
            img[height - h:height, x0:x1] = col
    gold = np.array([1.0, 0.84, 0.0], np.float32)
    img[:, x_near:x_near + 2] = gold
    img[:, max(x_far - 1, 0):x_far + 1] = gold
    return np.clip(img, 0.0, 1.0)


def stack_edges(count):
    e = np.linspace(0.0, 1.0, int(count) + 1)
    return [(float(e[i]), float(e[i + 1])) for i in range(int(count))]
