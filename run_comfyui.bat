@echo off
setlocal
cd /d "%~dp0"

set "HF_HOME=%~dp0cache\huggingface"
set "TORCH_HOME=%~dp0cache\torch"
set "TMPDIR=%~dp0tmp"
set "TEMP=%~dp0tmp"
set "TMP=%~dp0tmp"

"%~dp0venv\Scripts\python.exe" ComfyUI\main.py --listen 127.0.0.1 --port 8188 --windows-standalone-build --output-directory "%~dp0output" --input-directory "%~dp0input" --temp-directory "%~dp0tmp" %*
endlocal
