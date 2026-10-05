# Bootstraps the isolated ComfyUI workspace (Windows / PowerShell).
# Pinned upstream commits are the versions this repo's workflows were verified against.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $root

$ComfyRepo = "https://github.com/Comfy-Org/ComfyUI.git"
$ComfyRef  = "88ab4a06566454ad89db8f0bedb970d6c08cd1b7"
$SupirRepo = "https://github.com/kijai/ComfyUI-SUPIR.git"
$SupirRef  = "99d49e912c905ce1aaf7d15898f550b40fb3e6cc"

function Clone-Pinned($repo, $ref, $dest) {
    if (-not (Test-Path $dest)) {
        git clone $repo $dest
    }
    git -C $dest fetch --all --quiet
    git -C $dest checkout $ref --quiet
}

Clone-Pinned $ComfyRepo $ComfyRef "ComfyUI"
Clone-Pinned $SupirRepo $SupirRef "custom_nodes\ComfyUI-SUPIR"

# Python 3.11 virtual environment
if (-not (Test-Path "venv")) { py -3.11 -m venv venv }
$py = "$root\venv\Scripts\python.exe"
& $py -m pip install --upgrade pip
# PyTorch with CUDA 12.4 (RTX 30-series)
& $py -m pip install torch==2.6.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
& $py -m pip install -r ComfyUI\requirements.txt
& $py -m pip install -r custom_nodes\ComfyUI-SUPIR\requirements.txt
& $py -m pip install requests tqdm huggingface_hub

# Model path config + folder layout
Copy-Item config\extra_model_paths.yaml ComfyUI\extra_model_paths.yaml -Force
foreach ($d in "models\checkpoints","models\diffusers","models\vae","models\loras","input","output","tmp","cache") {
    New-Item -ItemType Directory -Force $d | Out-Null
}

Write-Host "`nDone. Weights are NOT included. Fetch them with the gatekeeper, e.g.:"
Write-Host "  python download_model.py <repo_id_or_url> --dry-run"
Write-Host "Then start the server with .\run_comfyui.ps1"
