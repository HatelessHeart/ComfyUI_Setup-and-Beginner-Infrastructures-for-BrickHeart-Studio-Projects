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
python tests/test_depth_slice.py     # math, needs only numpy
python tests/test_nodes_shim.py      # node wiring against a stand-in for torch (not real torch)
```
The ComfyUI wrappers have not yet been run inside a real ComfyUI; confirm on your install.
