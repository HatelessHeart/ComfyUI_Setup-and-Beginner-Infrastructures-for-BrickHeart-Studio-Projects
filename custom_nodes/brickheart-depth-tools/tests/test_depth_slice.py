"""Run: python tests/test_depth_slice.py   (needs only numpy)"""
import os, sys
import numpy as np
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
import depth_slice as ds

W = 100
def ramp(white_is_near=True, B=1, H=8):
    """Horizontal ramp: column x has raw depth value x/(W-1)."""
    r = np.tile(np.linspace(0, 1, W, dtype=np.float32), (H, 1))
    return np.stack([r] * B)

def test_normalize_orientation():
    d = ramp()
    f_near_white, lo, hi = ds.normalize_depth(d, white_is_near=True, robust=False)
    f_far_white, _, _ = ds.normalize_depth(d, white_is_near=False, robust=False)
    # white = near: brightest column (x=99) must be fraction 0 (nearest)
    assert f_near_white[0, 0, -1] < 1e-6 and f_near_white[0, 0, 0] > 1 - 1e-6
    assert f_far_white[0, 0, 0] < 1e-6 and f_far_white[0, 0, -1] > 1 - 1e-6
    assert abs(lo[0]) < 1e-6 and abs(hi[0] - 1) < 1e-6

def test_hard_slab_selects_expected_columns():
    f, _, _ = ds.normalize_depth(ramp(), white_is_near=False, robust=False)   # fraction == x/99
    m = ds.slab_mask(f, 0.2, 0.6, feather=0.0)
    cols = np.where(m[0, 0] > 0.5)[0]
    assert cols.min() == int(np.ceil(0.2 * 99)) and cols.max() == int(np.floor(0.6 * 99)), (cols.min(), cols.max())

def test_swapped_near_far_is_tolerated():
    f, _, _ = ds.normalize_depth(ramp(), white_is_near=False, robust=False)
    assert np.array_equal(ds.slab_mask(f, 0.6, 0.2, 0.0), ds.slab_mask(f, 0.2, 0.6, 0.0))

def test_feather_is_soft_and_centered_on_edge():
    f, _, _ = ds.normalize_depth(ramp(), white_is_near=False, robust=False)
    m = ds.slab_mask(f, 0.3, 0.7, feather=0.1)[0, 0]
    x_edge = int(round(0.3 * 99))
    assert 0.3 < m[x_edge] < 0.7, m[x_edge]           # about half-way at the edge itself
    assert m[int(0.5 * 99)] > 0.99 and m[2] < 0.01 and m[-2] < 0.01
    assert np.all((m >= 0) & (m <= 1))

def test_remap_spreads_band_to_full_range():
    f, _, _ = ds.normalize_depth(ramp(), white_is_near=False, robust=False)
    m = ds.slab_mask(f, 0.2, 0.6, 0.0)
    out = ds.sliced_depth(f, m, 0.2, 0.6, remap=True, output_white_is_near=False, background=0.0)[0, 0]
    inside = out[m[0, 0] > 0.5]
    assert inside.min() < 0.03 and inside.max() > 0.97, (inside.min(), inside.max())
    assert out[0] == 0.0 and out[-1] == 0.0           # outside the band -> background

def test_output_orientation_flag():
    f, _, _ = ds.normalize_depth(ramp(), white_is_near=False, robust=False)
    m = ds.slab_mask(f, 0.0, 1.0, 0.0)
    a = ds.sliced_depth(f, m, 0.0, 1.0, True, True)[0, 0]
    b = ds.sliced_depth(f, m, 0.0, 1.0, True, False)[0, 0]
    assert a[0] > 0.99 and a[-1] < 0.01 and b[0] < 0.01 and b[-1] > 0.99   # nearest column bright when white=near

def test_subject_mask_sets_the_range():
    # background is far brighter/darker than the subject; the range must come from the subject only
    d = np.zeros((1, 8, W), np.float32); d[..., :50] = 0.9; d[..., 50:] = np.linspace(0.2, 0.4, 50)  # subject on right
    subj = np.zeros((1, 8, W), np.float32); subj[..., 50:] = 1
    f, lo, hi = ds.normalize_depth(d, white_is_near=False, robust=False, subject_mask=subj)
    assert abs(lo[0] - 0.2) < 1e-5 and abs(hi[0] - 0.4) < 1e-5, (lo, hi)
    f_all, lo2, hi2 = ds.normalize_depth(d, white_is_near=False, robust=False)
    assert hi2[0] > 0.89                               # without the mask the background dominates

def test_robust_range_ignores_outliers():
    d = ramp(); d[0, 0, 0] = 50.0                     # one hot pixel
    _, lo, hi = ds.normalize_depth(d, False, robust=True)
    assert hi[0] < 2.0, hi
    _, _, hi_raw = ds.normalize_depth(d, False, robust=False)
    assert hi_raw[0] == 50.0

def test_empty_mask_falls_back():
    f, lo, hi = ds.normalize_depth(ramp(), False, False, np.zeros((1, 8, W), np.float32))
    assert hi[0] > lo[0]

def test_flat_depth_does_not_divide_by_zero():
    f, lo, hi = ds.normalize_depth(np.full((1, 4, 4), 0.5, np.float32), True, True)
    assert np.isfinite(f).all()

def test_stack_partitions_the_range():
    f, _, _ = ds.normalize_depth(ramp(), False, False)
    n = 4
    total = np.zeros_like(f)
    for near, far in ds.stack_edges(n):
        total += ds.slab_mask(f, near, far, 0.0)
    assert total.min() >= 1 and total.max() <= 2        # hard bands cover every pixel; shared edges may count twice
    assert len(ds.stack_edges(n)) == n and ds.stack_edges(n)[0][0] == 0.0 and ds.stack_edges(n)[-1][1] == 1.0

def test_histogram_image_shape_and_slab_marker():
    f, _, _ = ds.normalize_depth(ramp(), False, False)
    h = ds.histogram_image(f[0], 0.25, 0.75)
    assert h.shape == (128, 256, 3) and h.dtype == np.float32 and h.min() >= 0 and h.max() <= 1
    gold_cols = np.where((h[0, :, 0] > 0.95) & (h[0, :, 1] > 0.8) & (h[0, :, 2] < 0.1))[0]
    assert abs(gold_cols.min() - 0.25 * 255) <= 2 and abs(gold_cols.max() - 0.75 * 255) <= 2, gold_cols

def test_image_to_depth_channels():
    img = np.zeros((2, 4, 4, 3), np.float32); img[..., 0] = 0.3; img[..., 1] = 0.6; img[..., 2] = 0.9
    d = ds.image_to_depth(img)
    assert d.shape == (2, 4, 4) and abs(d[0, 0, 0] - 0.6) < 1e-6

if __name__ == "__main__":
    fails = 0
    for name, fn in sorted(globals().items()):
        if name.startswith("test_") and callable(fn):
            try:
                fn(); print("PASS", name)
            except Exception as e:
                fails += 1; print("FAIL", name, "->", repr(e))
    print("\n%s" % ("ALL PASSED" if not fails else f"{fails} FAILED"))
    sys.exit(1 if fails else 0)
