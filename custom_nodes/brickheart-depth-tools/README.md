# BrickHeart Depth Tools

Slice a depth map by **depth fraction** and use the band as a texturing guide.

Fraction means position inside the subject's own depth range: `0.0` = nearest point, `1.0` = farthest point. So "keep 0.2 to 0.6" is the same operation whatever the raw depth values are.

## Nodes (category `BrickHeart/depth`)

**BrickHeart Depth Slice**: keep one band.
| Output | What it is |
| --- | --- |
| `slice_depth` | The band re-spread to a full 0-1 depth map (outside the band = black). |
| `slice_mask` | Soft mask of the band. |
| `histogram` | Preview of how depth is distributed, with your band shaded and gold edge lines. Left = nearest, right = farthest. Use it to choose `near` / `far`. |
| `range_info` | The raw depth values that were treated as 0 and 1. |

**BrickHeart Depth Slice Stack**: cut the range into N equal bands (2-16) and output one mask and one depth map per band, nearest first, for each input image.

Settings worth knowing: `white_is_near` (turn on for most depth estimators), `robust_range` (ignores the extreme 1% at each end), `feather` (soft band edges), `remap` (re-spread the band to full contrast), and the optional `subject_mask`.

**Use a `subject_mask`** (for example from background removal) whenever the subject sits on a plain background. Without it the background's depth stretches or squashes the range and the fractions stop meaning "front of the object".

**BrickHeart Depth Parallax (3D photo)**: turns a still image plus its depth map into a short, seamlessly looping camera move (a "3D photo"). Near things slide more than far things while one chosen depth (`focus`) stays still.
| Setting | What it does |
| --- | --- |
| `motion` | `sweep` (side to side), `orbit` (a small circle), `push_in` (toward the picture and back). |
| `strength` | The largest slide, as a fraction of the picture width (0.03 = 3%), for whatever is farthest in depth from the focus plane. |
| `focus` | The depth that stays still (0 = nearest, 1 = farthest). |
| `depth_blur` | Softens the depth map first to reduce tearing at depth edges. |
| `refine_passes` | Quality vs speed. Too few passes leave a faint ghost edge on near objects; 6 is clean for most pictures. |

Output is a batch of frames; connect it to ComfyUI's Save Animated WEBP / PNG node to get a clip (check the node name in your install). Because bad depth shows up as tearing and stretched edges, it also works as a quick check of whether a depth map is any good. Speed: about 1 second per megapixel per frame on a plain CPU, so try 512 to 768 pixels first.

## Where the depth map comes from
This pack does not include a depth model and downloads nothing. Feed it:
- the output of any depth-estimation node you have installed (for example a Depth Anything node), or
- a **depth pass rendered from your mesh**, which is exact and usually better for texturing than an estimate.

## Using it for texturing (suggestions, untested in the studio workflows)
- As the *position* guide for a mesh-projection pass, in place of or alongside the Canny edges: `slice_depth` gives the model a clean front-to-back cue.
- With the Stack node: texture front-most band first, then the next, so nearer surfaces don't get painted over by farther ones.
- Use `slice_mask` to restrict an inpaint to one depth layer.

## Tests
```
python tests/test_depth_slice.py     # slicing math, needs only numpy
python tests/test_depth_parallax.py  # parallax math, needs only numpy
python tests/test_nodes_shim.py      # node wiring against a stand-in for torch (not real torch)
```
The ComfyUI wrappers have not yet been run inside a real ComfyUI; confirm on your install.
