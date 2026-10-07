"""Depth parallax ("3D photo") in pure numpy, no torch / ComfyUI imports so it can be unit-tested anywhere.

Idea: a camera that moves sideways makes near things slide across the picture more than far things.
Given an image and a depth map we slide every pixel by an amount that depends on its depth, and keep one
chosen depth (the "focus" plane) perfectly still. Rendering is a backward warp (for each output pixel,
find which source pixel lands there), which never leaves holes; at sharp depth edges the picture
stretches a little ("rubber sheet"), which is the usual trade-off of this cheap method.

Depth input is in "fractions": 0 = nearest, 1 = farthest (see depth_slice.normalize_depth).
"""
import numpy as np

MOTIONS = ("sweep", "orbit", "push_in")


def box_blur(a, radius):
    """Separable box blur of a [H,W] array (edge-clamped). radius 0 returns the input."""
    r = int(radius)
    if r <= 0:
        return a
    k = 2 * r + 1
    pad = np.pad(a, ((0, 0), (r, r)), mode="edge")
    c = np.cumsum(pad, axis=1, dtype=np.float64)
    c = np.concatenate([np.zeros((a.shape[0], 1)), c], axis=1)
    a = ((c[:, k:] - c[:, :-k]) / k).astype(np.float32)
    pad = np.pad(a, ((r, r), (0, 0)), mode="edge")
    c = np.cumsum(pad, axis=0, dtype=np.float64)
    c = np.concatenate([np.zeros((1, a.shape[1])), c], axis=0)
    return ((c[k:, :] - c[:-k, :]) / k).astype(np.float32)


def bilinear(img, xs, ys):
    """Sample img [H,W,C] (or [H,W]) at float pixel coordinates xs, ys (same shape), edge-clamped."""
    H, W = img.shape[:2]
    xs = np.clip(xs, 0, W - 1)
    ys = np.clip(ys, 0, H - 1)
    x0 = np.floor(xs).astype(np.int32)
    y0 = np.floor(ys).astype(np.int32)
    x1 = np.minimum(x0 + 1, W - 1)
    y1 = np.minimum(y0 + 1, H - 1)
    wx = (xs - x0).astype(np.float32)
    wy = (ys - y0).astype(np.float32)
    if img.ndim == 3:
        wx, wy = wx[..., None], wy[..., None]
    top = img[y0, x0] * (1 - wx) + img[y0, x1] * wx
    bot = img[y1, x0] * (1 - wx) + img[y1, x1] * wx
    return (top * (1 - wy) + bot * wy).astype(np.float32)


def camera_offsets(motion, n_frames):
    """Per-frame camera position (cx, cy, zoom) in -1..1, forming a seamless loop (frame 0 == rest pose)."""
    if motion not in MOTIONS:
        raise ValueError(f"unknown motion {motion!r}; choose from {MOTIONS}")
    t = np.arange(n_frames, dtype=np.float64) / max(n_frames, 1)
    ang = 2 * np.pi * t
    if motion == "sweep":
        return [(float(np.sin(a)), 0.0, 0.0) for a in ang]
    if motion == "orbit":
        return [(float(np.sin(a)), float(1 - np.cos(a)) * 0.5, 0.0) for a in ang]
    return [(0.0, 0.0, float(0.5 - 0.5 * np.cos(a))) for a in ang]       # push_in: 0 -> 1 -> 0


_GRID = {}


def _grid(H, W):
    """Pixel coordinate grids, built once per picture size (they are the same for every frame)."""
    key = (H, W)
    if key not in _GRID:
        if len(_GRID) > 4:
            _GRID.clear()
        ys, xs = np.mgrid[0:H, 0:W].astype(np.float32)
        _GRID[key] = (xs, ys, (xs - (W - 1) / 2) / (W / 2), (ys - (H - 1) / 2) / (H / 2))
    return _GRID[key]


def render_frame(img, frac, cam, strength, focus, iterations=6):
    """One frame. img [H,W,C], frac [H,W] in 0(near)..1(far). cam = (cx, cy, zoom).
    strength = largest slide in pixels. focus = depth fraction that stays still."""
    H, W = frac.shape
    cx, cy, zoom = cam
    xs, ys, rx, ry = _grid(H, W)                        # rx, ry: -1..1 across the picture (for push_in)
    norm = max(focus, 1.0 - focus, 1e-6)
    sx, sy = xs.copy(), ys.copy()                       # source coordinate guess for each output pixel
    for _ in range(iterations):                         # fixed-point refinement; too few passes leave a ghost edge on near objects
        f = bilinear(frac, sx, sy)
        k = (focus - f) / norm                          # +1 nearest .. -1 farthest (relative to focus)
        sx = xs - strength * k * (cx + zoom * rx)
        sy = ys - strength * k * (cy + zoom * ry)
    return bilinear(img, sx, sy)


def parallax_frames(img, frac, n_frames=24, strength=0.03, motion="sweep", focus=0.35, depth_blur=3, iterations=6):
    """img [H,W,C] float 0..1, frac [H,W]. strength is a fraction of the picture width (0.03 = 3%).
    Returns [n_frames, H, W, C] float32."""
    H, W = frac.shape
    f = box_blur(frac.astype(np.float32), depth_blur)
    px = float(strength) * W
    return np.stack([render_frame(img, f, cam, px, float(focus), iterations) for cam in camera_offsets(motion, int(n_frames))]).astype(np.float32)
