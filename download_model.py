#!/usr/bin/env python3
"""
Model Gatekeeper & Download Manager for ComfyUI
Strict Human-in-the-Loop Protocol: Inspects remote footprint and halts for confirmation.
"""

import os
import sys
import argparse
import urllib.parse
import requests
from tqdm import tqdm

try:
    from huggingface_hub import HfApi, hf_hub_url
except ImportError:
    HfApi = None
    hf_hub_url = None

WORKSPACE_ROOT = os.path.dirname(os.path.abspath(__file__))
MODELS_ROOT = os.path.join(WORKSPACE_ROOT, "models")

CATEGORY_MAP = {
    "checkpoint": "checkpoints",
    "checkpoints": "checkpoints",
    "vae": "vae",
    "lora": "loras",
    "loras": "loras",
    "controlnet": "controlnet",
    "clip": "text_encoders",
    "text_encoder": "text_encoders",
    "text_encoders": "text_encoders",
    "unet": "unet",
    "diffusion_models": "diffusion_models",
    "upscale": "upscale_models",
    "upscale_models": "upscale_models",
    "embeddings": "embeddings",
}

def detect_category(filename: str, user_category: str = None) -> str:
    if user_category:
        clean = user_category.lower().strip()
        return CATEGORY_MAP.get(clean, clean)
    
    fn_lower = filename.lower()
    if "vae" in fn_lower:
        return "vae"
    if "lora" in fn_lower:
        return "loras"
    if "controlnet" in fn_lower or "t2i" in fn_lower:
        return "controlnet"
    if "upscale" in fn_lower or "esrgan" in fn_lower:
        return "upscale_models"
    if "embedding" in fn_lower:
        return "embeddings"
    if "clip" in fn_lower or "t5" in fn_lower:
        return "text_encoders"
    return "checkpoints"

def format_size(bytes_size: int) -> str:
    if bytes_size is None or bytes_size <= 0:
        return "Unknown size"
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_size < 1024.0:
            return f"{bytes_size:.2f} {unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.2f} PB"

def inspect_url(url: str):
    headers = {"User-Agent": "ComfyUI-Harness-Gatekeeper/1.0"}
    resp = requests.head(url, headers=headers, allow_redirects=True, timeout=15)
    if resp.status_code >= 400:
        # Fallback to GET stream if HEAD is blocked
        resp = requests.get(url, headers=headers, stream=True, allow_redirects=True, timeout=15)
    
    final_url = resp.url
    size = None
    if "Content-Length" in resp.headers:
        try:
            size = int(resp.headers["Content-Length"])
        except ValueError:
            pass
            
    # Try resolving filename
    filename = None
    cd = resp.headers.get("Content-Disposition", "")
    if "filename=" in cd:
        filename = cd.split("filename=")[-1].strip('"\'; ')
    if not filename:
        parsed = urllib.parse.urlparse(final_url)
        filename = os.path.basename(parsed.path)
    if not filename:
        filename = "downloaded_model.safetensors"
        
    return final_url, filename, size

def inspect_hf_repo(repo_id: str, subfolder: str = None, filename: str = None):
    if not HfApi:
        raise RuntimeError("huggingface_hub is not installed in the active environment.")
    api = HfApi()
    files = api.list_repo_files(repo_id=repo_id)
    candidates = [f for f in files if f.endswith((".safetensors", ".ckpt", ".pt", ".bin"))]
    
    if filename:
        target_file = filename
    elif candidates:
        # Priority to safetensors
        safetensors = [f for f in candidates if f.endswith(".safetensors")]
        target_file = safetensors[0] if safetensors else candidates[0]
    else:
        raise ValueError(f"No suitable model weights found in HuggingFace repo: {repo_id}")
        
    url = hf_hub_url(repo_id=repo_id, filename=target_file, subfolder=subfolder)
    return inspect_url(url)

def download_file(url: str, target_path: str, expected_size: int = None):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    temp_path = target_path + ".tmp"
    headers = {"User-Agent": "ComfyUI-Harness-Gatekeeper/1.0"}
    
    print(f"\n[INITIATING DOWNLOAD] {url} -> {target_path}")
    with requests.get(url, headers=headers, stream=True, timeout=30) as r:
        r.raise_for_status()
        total_size = int(r.headers.get('content-length', expected_size or 0))
        
        with open(temp_path, 'wb') as f, tqdm(
            desc=os.path.basename(target_path),
            total=total_size,
            unit='iB',
            unit_scale=True,
            unit_divisor=1024,
        ) as bar:
            for chunk in r.iter_content(chunk_size=1024 * 1024):
                if chunk:
                    size = f.write(chunk)
                    bar.update(size)
                    
    # Atomic replace
    if os.path.exists(target_path):
        os.remove(target_path)
    os.rename(temp_path, target_path)
    print(f"\n[DOWNLOAD COMPLETE] Successfully saved model to: {target_path}")

def main():
    parser = argparse.ArgumentParser(description="ComfyUI Model Gatekeeper & Download Auditor")
    parser.add_argument("source", help="Direct URL or Hugging Face repo ID (e.g. runwayml/stable-diffusion-v1-5)")
    parser.add_argument("--filename", "-f", help="Specific filename when using a HuggingFace repo ID", default=None)
    parser.add_argument("--category", "-c", help="Target category (checkpoints, vae, loras, controlnet, etc.)", default=None)
    parser.add_argument("--dest", "-d", help="Custom destination file path", default=None)
    parser.add_argument("--yes", "-y", action="store_true", help="Non-interactive approval (bypass confirmation prompt)")
    parser.add_argument("--dry-run", action="store_true", help="Audit model footprint and destination without prompting or downloading")
    
    args = parser.parse_args()
    source = args.source.strip()
    
    print("=" * 70)
    print(" ComfyUI Model Gatekeeper & Download Auditor")
    print("=" * 70)
    
    # 1. Resolve metadata
    if source.startswith("http://") or source.startswith("https://"):
        resolved_url, filename, size_bytes = inspect_url(source)
    else:
        resolved_url, filename, size_bytes = inspect_hf_repo(source, filename=args.filename)
        
    category = detect_category(filename, args.category)
    
    if args.dest:
        target_path = os.path.abspath(args.dest)
    else:
        target_path = os.path.join(MODELS_ROOT, category, filename)
        
    # Check if target already exists
    already_exists = os.path.exists(target_path)
    existing_size = os.path.getsize(target_path) if already_exists else 0
    
    # Display Footprint Audit
    print(f"\n--- Model Footprint Audit ---")
    print(f" Source URL      : {resolved_url}")
    print(f" Filename        : {filename}")
    print(f" Estimated Size  : {format_size(size_bytes)} ({size_bytes if size_bytes else 'unknown'} bytes)")
    print(f" Model Category  : {category}")
    print(f" Target Path     : {target_path}")
    print(f" Target Status   : {'ALREADY EXISTS (' + format_size(existing_size) + ')' if already_exists else 'New file'}")
    print("-" * 70)
    
    if args.dry_run:
        print("[DRY-RUN] Audit complete. Exiting without changes.")
        return 0

    if already_exists and existing_size == size_bytes and size_bytes is not None:
        print(f"[SKIP] Model already present with matching size at {target_path}")
        return 0

    # Human-in-the-Loop Confirmation Gate
    if not args.yes:
        sys.stdout.write(f"\n[APPROVAL REQUIRED] Approve download of {format_size(size_bytes)} to:\n -> {target_path}\nProceed? [y/N]: ")
        sys.stdout.flush()
        try:
            choice = input().strip().lower()
        except EOFError:
            print("\n[ABORTED] Non-interactive execution detected without approval flag.")
            return 1
            
        if choice not in ('y', 'yes'):
            print("\n[ABORTED] Download cancelled by user.")
            return 0
            
    # Execute download
    download_file(resolved_url, target_path, expected_size=size_bytes)
    return 0

if __name__ == "__main__":
    sys.exit(main())
