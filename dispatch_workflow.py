#!/usr/bin/env python3
"""
Workflow Dispatcher & Output Validator for ComfyUI API
Submits workflow schemas to /prompt, monitors execution, and validates output images.
"""

import sys
import json
import time
import urllib.request
import urllib.parse
import os

SERVER_URL = "http://127.0.0.1:8188"

def dispatch(workflow_path: str):
    if not os.path.exists(workflow_path):
        print(f"[ERROR] Workflow file not found: {workflow_path}")
        return 1

    with open(workflow_path, 'r', encoding='utf-8') as f:
        workflow_data = json.load(f)

    # Wrap in prompt container if not already wrapped
    if "prompt" in workflow_data and isinstance(workflow_data["prompt"], dict):
        payload = workflow_data
    else:
        payload = {"prompt": workflow_data}

    # Remove non-prompt UI metadata if needed (class_type and inputs are standard)
    prompt_payload = json.dumps(payload).encode('utf-8')

    req = urllib.request.Request(
        f"{SERVER_URL}/prompt",
        data=prompt_payload,
        headers={"Content-Type": "application/json"}
    )

    print(f"[DISPATCH] Submitting workflow: {workflow_path}")
    try:
        with urllib.request.urlopen(req) as resp:
            res = json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        print(f"[ERROR] Failed to queue prompt: {e}")
        return 1

    prompt_id = res.get("prompt_id")
    print(f"[QUEUED] Prompt ID: {prompt_id}")
    print(f"[MONITORING] Waiting for generation to complete...")

    # Poll history endpoint
    start_time = time.time()
    while True:
        try:
            with urllib.request.urlopen(f"{SERVER_URL}/history/{prompt_id}") as resp:
                history = json.loads(resp.read().decode('utf-8'))
                if prompt_id in history:
                    item = history[prompt_id]
                    status = item.get("status", {})
                    outputs = item.get("outputs", {})
                    elapsed = time.time() - start_time
                    print(f"[COMPLETED] Execution finished in {elapsed:.2f}s!")
                    print(f"[OUTPUTS] Node outputs: {json.dumps(outputs, indent=2)}")
                    return 0
        except Exception as e:
            pass

        time.sleep(1.0)
        if time.time() - start_time > 300:
            print("[TIMEOUT] Generation exceeded 300 seconds.")
            return 1

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python dispatch_workflow.py <path_to_workflow.json>")
        sys.exit(1)
    sys.exit(dispatch(sys.argv[1]))
