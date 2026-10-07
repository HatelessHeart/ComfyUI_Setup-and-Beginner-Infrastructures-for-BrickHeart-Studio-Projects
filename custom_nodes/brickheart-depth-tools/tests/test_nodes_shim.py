"""Exercises nodes.py with a stand-in `torch` (NOT the real torch: this checks wiring, shapes and
arguments only). Real-ComfyUI behaviour must still be confirmed on the actual install.
Run: python tests/test_nodes_shim.py"""
import importlib.util, os, sys, types
import numpy as np

class FakeTensor:
    def __init__(self, a): self.a = np.asarray(a)
    def detach(self): return self
    def cpu(self): return self
    def numpy(self): return self.a
    @property
    def shape(self): return self.a.shape

torch = types.ModuleType("torch"); torch.from_numpy = lambda a: FakeTensor(a); sys.modules["torch"] = torch

root = os.path.join(os.path.dirname(__file__), "..")
spec = importlib.util.spec_from_file_location("bh_depth", os.path.join(root, "__init__.py"), submodule_search_locations=[root])
pkg = importlib.util.module_from_spec(spec); sys.modules["bh_depth"] = pkg; spec.loader.exec_module(pkg)

def sphere_scene(H=96, W=96):
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    r2 = ((x - W / 2) ** 2 + (y - H / 2) ** 2) / (W * 0.3) ** 2
    inside = r2 < 1
    bg = 0.15 + 0.1 * (x / W)                       # far, gently sloped background (dark = far)
    ball = 0.5 + 0.5 * np.sqrt(np.clip(1 - r2, 0, 1))  # near, bright centre
    d = np.where(inside, ball, bg).astype(np.float32)
    return d, inside.astype(np.float32)

def test_registered():
    assert set(pkg.NODE_CLASS_MAPPINGS) == {"BHDepthSlice", "BHDepthSliceStack", "BHDepthParallax"}
    for cls in pkg.NODE_CLASS_MAPPINGS.values():
        it = cls.INPUT_TYPES()
        assert "depth" in it["required"] and len(cls.RETURN_TYPES) == len(cls.RETURN_NAMES)
        for k, v in {**it["required"], **it.get("optional", {})}.items():
            assert "tooltip" in v[1], f"{cls.__name__}.{k} lacks a tooltip"

def test_slice_with_subject_mask():
    d, subj = sphere_scene()
    img = FakeTensor(np.repeat(d[None, ..., None], 3, -1)); mask = FakeTensor(subj[None])
    node = pkg.NODE_CLASS_MAPPINGS["BHDepthSlice"]()
    depth_out, m_out, hist, info = node.run(img, 0.0, 0.5, 0.0, True, False, True, True, subject_mask=mask)
    D, M = depth_out.a, m_out.a
    assert D.shape == (1, 96, 96, 3) and M.shape == (1, 96, 96) and hist.a.shape == (1, 128, 256, 3)
    assert M.max() == 1.0 and (M * (1 - subj[None])).sum() == 0            # band never leaks outside the subject
    assert 0.2 < M.sum() / subj.sum() < 0.9                                 # a partial band, not everything
    assert D[M < 0.5].max() == 0.0                                          # background value outside the band
    assert "raw depth range" in info

def test_batch_and_mask_broadcast():
    d, subj = sphere_scene()
    img = FakeTensor(np.stack([np.repeat(d[..., None], 3, -1)] * 3)); mask = FakeTensor(subj[None])   # 1 mask for 3 images
    out = pkg.NODE_CLASS_MAPPINGS["BHDepthSlice"]().run(img, 0.0, 1.0, 0.1, True, True, True, True, subject_mask=mask)
    assert out[0].a.shape[0] == 3 and out[1].a.shape[0] == 3

def test_stack_shapes_and_order():
    d, subj = sphere_scene()
    img = FakeTensor(np.stack([np.repeat(d[..., None], 3, -1)] * 2))
    depths, masks, hist = pkg.NODE_CLASS_MAPPINGS["BHDepthSliceStack"]().run(img, 4, 0.0, True, False, True)
    assert depths.a.shape == (8, 96, 96, 3) and masks.a.shape == (8, 96, 96) and hist.a.shape[0] == 2
    cover = masks.a[:4].sum(0)
    assert cover.min() >= 1.0                                               # 4 hard bands cover every pixel
    # nearest band first: with white=near, band 0 holds the bright centre of the ball
    assert masks.a[0][48, 48] == 1.0 and masks.a[3][48, 48] == 0.0

def test_parallax_node():
    d, subj = sphere_scene()
    rgb = np.repeat(d[..., None], 3, -1).astype(np.float32)
    img = FakeTensor(rgb[None]); depth = FakeTensor(rgb[None]); mask = FakeTensor(subj[None])
    node = pkg.NODE_CLASS_MAPPINGS["BHDepthParallax"]()
    (frames,) = node.run(img, depth, 12, 0.04, "sweep", 0.35, 2, True, True, 4, subject_mask=mask)
    F = frames.a
    assert F.shape == (12, 96, 96, 3) and F.dtype == np.float32 and F.min() >= -1e-6 and F.max() <= 1 + 1e-6
    assert np.abs(F[0] - rgb).max() < 1e-5            # frame 0 is the rest pose
    assert np.abs(F[3] - rgb).max() > 1e-3            # and the camera really moves
    # size mismatch gives a clear error, not a silent crash
    small = FakeTensor(np.zeros((1, 48, 48, 3), np.float32))
    try:
        node.run(img, small, 12, 0.04, "sweep", 0.35, 2, True, True, 4)
    except ValueError as e:
        assert "match" in str(e)
    else:
        raise AssertionError("expected ValueError for mismatched sizes")
    # two images in, frames concatenated
    two = FakeTensor(np.stack([rgb, rgb]))
    (f2,) = node.run(two, two, 6, 0.04, "orbit", 0.35, 2, True, True, 4)
    assert f2.a.shape[0] == 12

if __name__ == "__main__":
    fails = 0
    for n, fn in sorted(globals().items()):
        if n.startswith("test_") and callable(fn):
            try: fn(); print("PASS", n)
            except Exception as e: fails += 1; print("FAIL", n, "->", repr(e))
    print("ALL PASSED" if not fails else f"{fails} FAILED"); sys.exit(1 if fails else 0)
