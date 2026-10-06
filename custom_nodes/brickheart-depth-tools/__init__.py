"""BrickHeart depth tools: slice a depth map by depth fraction for texturing guides.

Backend custom nodes (need torch, which ComfyUI always has). The math lives in depth_slice.py
(pure numpy) so it can be unit-tested without ComfyUI: python tests/test_depth_slice.py
"""
from .nodes import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS"]
