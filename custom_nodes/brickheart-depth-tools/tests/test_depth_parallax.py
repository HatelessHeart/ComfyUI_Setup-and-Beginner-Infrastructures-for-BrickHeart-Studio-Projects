"""Run: python tests/test_depth_parallax.py   (needs only numpy)"""
import os, sys
import numpy as np
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
import depth_parallax as dp

H, W = 64, 128
xs = np.tile(np.linspace(0, 1, W, dtype=np.float32), (H, 1))            # horizontal gradient image: value = x / (W-1)
ys = np.tile(np.linspace(0, 1, H, dtype=np.float32)[:, None], (1, W))   # vertical gradient image

def rgb(a): return np.repeat(a[..., None], 3, -1)

def two_layer(near_top=True):
    f = np.ones((H, W), np.float32)            # far everywhere ...
    f[: H // 2] = 0.0                          # ... except the top half, which is nearest
    return f

def test_zero_strength_is_identity():
    img = rgb(xs); f = two_layer()
    fr = dp.parallax_frames(img, f, n_frames=8, strength=0.0, depth_blur=0)
    assert fr.shape == (8, H, W, 3) and np.abs(fr - img[None]).max() < 1e-5

def test_frame_zero_is_rest_pose():
    for motion in dp.MOTIONS:
        cams = dp.camera_offsets(motion, 12)
        assert cams[0] == (0.0, 0.0, 0.0), (motion, cams[0])
    img = rgb(xs); fr = dp.parallax_frames(img, two_layer(), 12, 0.05, "sweep", 0.5, 0)
    assert np.abs(fr[0] - img).max() < 1e-5

def test_loop_is_seamless():
    # the frame after the last one would be frame 0 again: last frame must be one step before rest pose
    for motion in dp.MOTIONS:
        n = 24
        cams = dp.camera_offsets(motion, n)
        nxt = dp.camera_offsets(motion, n * 1000)[1]                         # a tiny step from rest
        step_last = np.hypot(cams[-1][0] - 0, cams[-1][1] - 0) + abs(cams[-1][2])
        step_first_to_second = np.hypot(cams[1][0] - cams[0][0], cams[1][1] - cams[0][1]) + abs(cams[1][2] - cams[0][2])
        assert step_last <= step_first_to_second * 1.05 + 1e-9, (motion, step_last, step_first_to_second)

def test_near_and_far_slide_opposite_by_strength_pixels():
    px = 6.0
    img = rgb(xs); f = two_layer()
    cam = (1.0, 0.0, 0.0)                                                    # the quarter-sweep pose
    out = dp.render_frame(img, f, cam, strength=px, focus=0.5, iterations=3)
    row_near, row_far = 8, H - 8                                             # well away from the boundary
    cols = slice(20, W - 20)
    # value = x/(W-1); a content shift of s pixels changes the value by -s/(W-1)
    shift_near = (xs[row_near, cols] - out[row_near, cols, 0]) * (W - 1)
    shift_far = (xs[row_far, cols] - out[row_far, cols, 0]) * (W - 1)
    assert np.allclose(shift_near, px, atol=0.05), shift_near.mean()         # near: moves right by px
    assert np.allclose(shift_far, -px, atol=0.05), shift_far.mean()          # far: moves left by px

def test_focus_plane_stays_still():
    f = np.full((H, W), 0.35, np.float32); f[:, W // 2:] = 0.0               # left half sits exactly on the focus depth
    img = rgb(xs)
    out = dp.render_frame(img, f, (1.0, 0.0, 0.0), strength=10.0, focus=0.35)
    assert np.abs(out[:, 8:W // 2 - 12] - img[:, 8:W // 2 - 12]).max() < 1e-4
    assert np.abs(out[:, W // 2 + 12:-8] - img[:, W // 2 + 12:-8]).max() > 1e-3   # the near half did move

def test_orbit_moves_vertically_sweep_does_not():
    f = two_layer(); img = rgb(ys)
    n = 24
    sweep = dp.parallax_frames(img, f, n, 0.1, "sweep", 0.5, 0)
    orbit = dp.parallax_frames(img, f, n, 0.1, "orbit", 0.5, 0)
    assert np.abs(sweep - img[None]).max() < 1e-5                            # horizontal-only motion leaves a vertical gradient alone
    assert np.abs(orbit - img[None]).max() > 1e-3

def test_push_in_center_is_still_edges_move():
    f = np.zeros((H, W), np.float32)                                         # everything near
    img = rgb(xs)
    out = dp.render_frame(img, f, (0.0, 0.0, 1.0), strength=8.0, focus=0.5)
    c = W // 2
    assert abs(out[H // 2, c, 0] - img[H // 2, c, 0]) < 0.01
    assert abs(out[H // 2, 4, 0] - img[H // 2, 4, 0]) > 0.01 and abs(out[H // 2, W - 5, 0] - img[H // 2, W - 5, 0]) > 0.01

def test_output_range_shape_dtype():
    rng = np.random.default_rng(0)
    img = rng.random((H, W, 3)).astype(np.float32); f = rng.random((H, W)).astype(np.float32)
    out = dp.parallax_frames(img, f, 10, 0.08, "orbit", 0.3, 4)
    assert out.shape == (10, H, W, 3) and out.dtype == np.float32 and out.min() >= -1e-6 and out.max() <= 1 + 1e-6

def test_unknown_motion_raises():
    try:
        dp.camera_offsets("spin", 8)
    except ValueError:
        return
    raise AssertionError("expected ValueError")

def test_helpers():
    a = np.full((10, 12), 0.7, np.float32)
    assert np.allclose(dp.box_blur(a, 3), 0.7, atol=1e-5) and dp.box_blur(a, 0) is a
    img = rgb(xs)
    got = dp.bilinear(img, np.array([[10.0]]), np.array([[5.0]]))
    assert abs(got[0, 0, 0] - xs[5, 10]) < 1e-6
    half = dp.bilinear(img, np.array([[10.5]]), np.array([[5.0]]))
    assert abs(half[0, 0, 0] - (xs[5, 10] + xs[5, 11]) / 2) < 1e-6
    far = dp.bilinear(img, np.array([[-50.0]]), np.array([[999.0]]))          # clamps instead of crashing
    assert np.isfinite(far).all()

if __name__ == "__main__":
    fails = 0
    for n, fn in sorted(globals().items()):
        if n.startswith("test_") and callable(fn):
            try: fn(); print("PASS", n)
            except Exception as e: fails += 1; print("FAIL", n, "->", repr(e))
    print("ALL PASSED" if not fails else f"{fails} FAILED"); sys.exit(1 if fails else 0)
