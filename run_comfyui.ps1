param (
    [switch]$Cpu
)

$PSScriptRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
Set-Location $PSScriptRoot

$env:HF_HOME = "$PSScriptRoot\cache\huggingface"
$env:TORCH_HOME = "$PSScriptRoot\cache\torch"
$env:TMPDIR = "$PSScriptRoot\tmp"
$env:TEMP = "$PSScriptRoot\tmp"
$env:TMP = "$PSScriptRoot\tmp"

$argsList = @(
    "ComfyUI\main.py",
    "--listen", "127.0.0.1",
    "--port", "8188",
    "--windows-standalone-build",
    "--output-directory", "$PSScriptRoot\output",
    "--input-directory", "$PSScriptRoot\input",
    "--temp-directory", "$PSScriptRoot\tmp"
)

if ($Cpu) {
    $argsList += "--cpu"
}

& "$PSScriptRoot\venv\Scripts\python.exe" @argsList
