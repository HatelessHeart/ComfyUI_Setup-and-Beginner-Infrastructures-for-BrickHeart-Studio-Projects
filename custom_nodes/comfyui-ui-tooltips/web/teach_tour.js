import { app } from "../../scripts/app.js";

/**
 * BrickHeart Guided Tour
 * Walks a learner through the loaded workflow one node at a time:
 * the camera glides to the real node, everything else dims, the key setting is
 * ringed in gold, and a card explains what it does, why, and what to try.
 * The highlight is computed from the live canvas every frame, so it follows
 * panning/zooming and works with any workflow that uses these node types.
 *
 * Teaching copy lives in STEPS below. Per-setting explanations are read from
 * widget.tooltip (set by tooltips.js) so there is one source of truth.
 */

// find: { type, nth?, titleIncludes? }  -> picks a node in the loaded graph.
// focus: widget name (or list of alternates, first present wins) to ring in gold. Steps whose node isn't in the graph are skipped.
const STEPS = [
    {
        find: { type: "DiffusersLoader" },
        title: "Pick the engine",
        body: "Every image starts with a model. SDXL Turbo is a distilled model: it was trained to finish a picture in 1–4 steps instead of ~25, which is why this first draft takes seconds.",
        tryIt: "Nothing to change here. Notice its three outputs (MODEL, CLIP, VAE): later nodes borrow each one.",
    },
    {
        find: { type: "CLIPTextEncode", nth: 0 },
        focus: "text",
        title: "Say what you want",
        body: "Words become numbers. CLIP reads your prompt and turns it into guidance the sampler can follow. The node below it is the negative prompt: things to steer away from.",
        tryIt: "Rewrite the prompt (subject, lighting, camera, mood), then press Queue Prompt.",
    },
    {
        find: { type: "EmptyLatentImage" },
        focus: "width",
        title: "Choose the canvas size",
        body: "Generation starts from pure noise at a size you pick. 512×512 is Turbo's sweet spot. Bigger isn't better here: it's slower and often breaks the composition. We add resolution later with SUPIR instead.",
        tryIt: "Leave it at 512×512 for now. Try 1024×1024 later and compare the result.",
    },
    {
        find: { type: "KSampler", nth: 0 },
        focus: "steps",
        title: "The sampler: where the picture is made",
        body: "The sampler removes noise a little at a time. A Turbo model needs only 1–4 steps and a cfg near 1.0. Pushing cfg up on Turbo burns the image: oversaturated and crunchy.",
        tryIt: "Set steps to 8 and cfg to 7, Queue, and see it get worse. Then set 2 steps and cfg 1.0 again.",
    },
    {
        find: { type: "VAEDecode", nth: 0 },
        title: "Latent → pixels",
        body: "The sampler works in a compressed 'latent' space, 1/8 the size of the real image. The VAE decoder expands it into pixels you can look at.",
        tryIt: "Just follow the link coming in from the sampler's LATENT output.",
    },
    {
        find: { type: "SaveImage", nth: 0 },
        focus: "filename_prefix",
        title: "Your first result",
        body: "Previews and saves the image into the workspace output folder, with the whole workflow embedded in the file. You can drag any saved image back onto the canvas to restore its exact settings.",
        tryIt: "Queue the workflow and watch the image appear here.",
    },
    {
        find: { type: "LoadImage" },
        title: "Hand-off to inpainting",
        body: "Inpainting means redrawing only part of a picture. This node loads the image you want to fix, and it hosts the Mask Editor where you paint what to change.",
        tryIt: "Right-click the image → Open in MaskEditor. Paint over the area to redo, then Save.",
    },
    {
        find: { type: "VAEEncodeForInpaint" },
        focus: "grow_mask_by",
        title: "Mask → latent",
        body: "Packs the image and your painted mask together for the sampler. White areas get redrawn; black areas stay locked. 'grow_mask_by' widens the mask a few pixels so the repaint blends into its surroundings without a visible seam.",
        tryIt: "If you can see a hard edge around a repaint, raise grow_mask_by.",
    },
    {
        find: { type: "KSampler", nth: 1 },
        focus: "denoise",
        title: "Inpaint sampler: how much to change",
        body: "This sampler uses SDXL Base, a normal model, so it wants ~25 steps and cfg around 6. The key dial is denoise: 1.0 ignores what was there, lower values keep more of the original. This workflow uses 0.75.",
        tryIt: "Lower denoise for a subtle fix, raise it for a bigger change, and re-queue.",
    },
    {
        find: { type: "SUPIR_model_loader_v2" },
        focus: "fp8_unet",
        title: "Stage 2 setup: the restorer",
        body: "SUPIR rebuilds fine detail when upscaling. It's heavy, so FP8 shrinks the model's memory footprint to fit a 12 GB card. It sits on the SDXL Base backbone, never on Turbo.",
        tryIt: "Keep FP8 on unless you have more than 12 GB of VRAM.",
    },
    {
        find: { type: "SUPIR_sample" },
        focus: ["EDM_s_churn", "s_churn"],
        title: "The SUPIR sampler: avoiding cracked skin",
        body: "The classic SUPIR failure is a cracked, scaly texture ('craquelure'). It comes from s_churn (shown as EDM_s_churn on some versions) being above 0. Here it is 0 and s_noise is 1.0, with cfg around 3 and 25 steps.",
        tryIt: "Set the highlighted churn value to 5, Queue, and look for the cracked texture. Then set it back to 0.",
    },
    {
        find: { type: "SUPIR_decode" },
        focus: "color_fix_type",
        title: "Back to pixels, colors intact",
        body: "Decodes the restored result in tiles so large images don't run out of VRAM. The Wavelet color fix keeps the colors matching your original instead of drifting.",
        tryIt: "Compare this final output with the Stage 1 image side by side.",
    },
    {
        queue: true,
        title: "Run it",
        body: "Queue Prompt sends the whole workflow to the GPU. Nodes light up green as they run, and results appear in the Save nodes.",
        tryIt: "Press Ctrl+Enter, or the Queue button in the highlighted area.",
    },
];

const GOLD = "#ffd700";
const CYAN = "#00e5ff";
const CARD_H = 230; // space reserved at the bottom for the explanation card
const SEEN_KEY = "brickheart.tour.seen";

function safeStore(fn) { try { return fn(); } catch (_) { return null; } }

function allNodes() {
    return (app.graph && app.graph._nodes) ? app.graph._nodes : [];
}
function typeOf(n) { return n.comfyClass || n.type; }

function resolveStep(step) {
    if (step.queue) return { node: null };
    const { type, nth = 0, titleIncludes } = step.find;
    let list = allNodes().filter(n => typeOf(n) === type);
    if (titleIncludes) list = list.filter(n => (n.title || "").toLowerCase().includes(titleIncludes.toLowerCase()));
    // Order by workflow flow (left to right, then top to bottom) so "nth" is stable across layouts.
    list.sort((a, b) => a.pos[0] - b.pos[0] || a.pos[1] - b.pos[1]);
    return { node: list[nth] || null };
}

// ---- canvas <-> screen math (LiteGraph: screen = (pos + offset) * scale) ----
function canvasBox() {
    const el = app.canvas && app.canvas.canvas;
    return el ? el.getBoundingClientRect() : { left: 0, top: 0, width: innerWidth, height: innerHeight };
}
function titleH() { return (window.LiteGraph && window.LiteGraph.NODE_TITLE_HEIGHT) || 30; }
function toScreen(x, y) {
    const { ds } = app.canvas;
    const b = canvasBox();
    return [b.left + (x + ds.offset[0]) * ds.scale, b.top + (y + ds.offset[1]) * ds.scale];
}
function nodeRect(node) {
    const s = app.canvas.ds.scale;
    const [x, y] = toScreen(node.pos[0], node.pos[1] - titleH());
    return { x, y, w: node.size[0] * s, h: (node.size[1] + titleH()) * s };
}
function findWidget(node, focus) {
    for (const name of [].concat(focus || [])) {
        const w = (node.widgets || []).find(x => x.name === name);
        if (w) return w;
    }
    return null;
}
function widgetRect(node, focus) {
    const w = findWidget(node, focus);
    if (!w || typeof w.last_y !== "number") return null;
    const s = app.canvas.ds.scale;
    const wh = (window.LiteGraph && window.LiteGraph.NODE_WIDGET_HEIGHT) || 20;
    const [x, y] = toScreen(node.pos[0] + 6, node.pos[1] + w.last_y);
    return { x, y, w: (node.size[0] - 12) * s, h: wh * s };
}

// ---- camera glide ----
let camAnim = null;
function glideTo(node) {
    const c = app.canvas;
    const b = canvasBox();
    const freeH = Math.max(200, b.height - CARD_H);
    const fit = Math.min((b.width * 0.55) / node.size[0], (freeH * 0.7) / (node.size[1] + titleH()));
    const target = Math.max(0.45, Math.min(1.0, fit));
    const cx = node.pos[0] + node.size[0] / 2;
    const cy = node.pos[1] + node.size[1] / 2 - titleH() / 2;
    const to = [b.width / 2 / target - cx, freeH / 2 / target - cy];
    const from = [c.ds.offset[0], c.ds.offset[1]];
    const fromScale = c.ds.scale;
    const t0 = performance.now();
    const dur = 550;
    const myAnim = camAnim = { cancelled: false };
    function frame(now) {
        if (myAnim.cancelled) return;
        const t = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - t, 3); // ease-out
        c.ds.scale = fromScale + (target - fromScale) * e;
        c.ds.offset[0] = from[0] + (to[0] - from[0]) * e;
        c.ds.offset[1] = from[1] + (to[1] - from[1]) * e;
        if (c.setDirty) c.setDirty(true, true);
        if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

app.registerExtension({
    name: "BrickHeart.GuidedTour",
    async setup() {
        if (document.getElementById("brickheart-tour-root")) return;

        const root = document.createElement("div");
        root.id = "brickheart-tour-root";
        document.body.appendChild(root);

        // Dim layer with cut-out, drawn every frame while the tour is active.
        const dim = document.createElement("canvas");
        dim.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:999970;pointer-events:none;display:none;";
        root.appendChild(dim);

        // Explanation card (bottom centre, never covers the focused node).
        const card = document.createElement("div");
        card.setAttribute("role", "dialog");
        card.setAttribute("aria-live", "polite");
        card.style.cssText = [
            "position:fixed", "left:50%", "bottom:20px", "transform:translateX(-50%)",
            "width:min(680px, calc(100vw - 32px))", "box-sizing:border-box", "padding:16px 18px",
            "background:rgba(13,21,32,0.96)", `border:1px solid ${CYAN}`, "border-radius:10px",
            "box-shadow:0 10px 40px rgba(0,0,0,.65)", "color:#e0f7fa",
            "font:14px/1.5 system-ui,-apple-system,sans-serif", "z-index:999990", "display:none",
        ].join(";");
        root.appendChild(card);

        // Launcher pill.
        const pill = document.createElement("button");
        pill.id = "brickheart-tour-pill";
        pill.textContent = "🎓 Learn this workflow";
        pill.style.cssText = [
            "position:fixed", "left:16px", "bottom:16px", "z-index:999985", "padding:9px 14px",
            `background:#005b64`, "color:#fff", `border:1px solid ${CYAN}`, "border-radius:999px",
            "font:600 13px system-ui,sans-serif", "cursor:pointer", "box-shadow:0 4px 18px rgba(0,0,0,.5)",
        ].join(";");
        root.appendChild(pill);

        let steps = [];     // resolved: [{step, node}]
        let idx = 0;
        let active = false;
        let raf = 0;

        // The Spatial Pilot HUD floats above everything; hide it while the tour owns the screen.
        function setHud(show) {
            const hud = document.getElementById("brickheart-pilot-panel");
            if (hud) hud.style.display = show ? "block" : "none";
        }

        function buildSteps() {
            const out = [];
            for (const step of STEPS) {
                const { node } = resolveStep(step);
                if (step.queue || node) out.push({ step, node });
            }
            // The Queue step only makes sense if there's something to teach before it.
            return out.length > 1 ? out : [];
        }

        function btn(label, primary) {
            const b = document.createElement("button");
            b.textContent = label;
            b.style.cssText = [
                "padding:7px 14px", "border-radius:6px", "font:600 13px system-ui,sans-serif", "cursor:pointer",
                `border:1px solid ${CYAN}`, primary ? "background:#00838f;color:#fff" : "background:transparent;color:#80deea",
            ].join(";");
            return b;
        }

        function settingNotes(node, focus) {
            // Pull the explanation tooltips.js attached to the widget, so the card and hover text always agree.
            if (!node || !focus) return "";
            const w = findWidget(node, focus);
            if (!w || !w.tooltip) return "";
            return w.tooltip;
        }

        function renderCard() {
            const { step, node } = steps[idx];
            const total = steps.length;
            card.innerHTML = "";

            const head = document.createElement("div");
            head.style.cssText = "display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:6px;";
            const h = document.createElement("div");
            h.style.cssText = "font-size:16px;font-weight:700;color:#fff;";
            h.textContent = step.title;
            const prog = document.createElement("div");
            prog.style.cssText = `font-size:12px;color:${CYAN};white-space:nowrap;`;
            prog.textContent = `Step ${idx + 1} of ${total}`;
            head.append(h, prog);
            card.appendChild(head);

            const bar = document.createElement("div");
            bar.style.cssText = "height:3px;background:rgba(0,229,255,.18);border-radius:2px;margin-bottom:10px;";
            const fill = document.createElement("div");
            fill.style.cssText = `height:100%;width:${((idx + 1) / total) * 100}%;background:${CYAN};border-radius:2px;transition:width .3s;`;
            bar.appendChild(fill);
            card.appendChild(bar);

            const p = document.createElement("div");
            p.textContent = step.body;
            card.appendChild(p);

            const note = settingNotes(node, step.focus);
            if (note) {
                const n = document.createElement("div");
                n.style.cssText = `margin-top:8px;padding:6px 10px;border-left:3px solid ${GOLD};background:rgba(255,215,0,.08);font-size:12.5px;color:#fff3b0;`;
                n.textContent = note;
                card.appendChild(n);
            }

            const t = document.createElement("div");
            t.style.cssText = "margin-top:8px;font-size:13px;color:#a7ffeb;";
            t.textContent = "Try it: " + step.tryIt;
            card.appendChild(t);

            const row = document.createElement("div");
            row.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:8px;";
            const exit = btn("Exit tour");
            exit.onclick = stop;
            const hint = document.createElement("span");
            hint.style.cssText = "font-size:11px;color:#6fa8b0;";
            hint.textContent = "← → keys to move · Esc to exit";
            const nav = document.createElement("div");
            nav.style.cssText = "display:flex;gap:8px;";
            const back = btn("Back");
            back.disabled = idx === 0;
            back.style.opacity = idx === 0 ? "0.4" : "1";
            back.onclick = () => go(idx - 1);
            const last = idx === total - 1;
            const next = btn(last ? "Finish" : "Next", true);
            next.onclick = () => (last ? stop() : go(idx + 1));
            nav.append(back, next);
            row.append(exit, hint, nav);
            card.appendChild(row);
            next.focus({ preventScroll: true });
        }

        function go(i) {
            if (i < 0 || i >= steps.length) return;
            idx = i;
            if (camAnim) camAnim.cancelled = true;
            const { node } = steps[idx];
            if (node) glideTo(node);
            renderCard();
        }

        function queueButtonRect() {
            const el = document.querySelector("#queue-button, [data-testid='queue-button'], .comfy-menu button");
            if (!el) return null;
            const r = el.getBoundingClientRect();
            return r.width ? { x: r.left, y: r.top, w: r.width, h: r.height } : null;
        }

        function drawFrame() {
            if (!active) return;
            const dpr = window.devicePixelRatio || 1;
            const W = innerWidth, H = innerHeight;
            if (dim.width !== W * dpr || dim.height !== H * dpr) { dim.width = W * dpr; dim.height = H * dpr; }
            const ctx = dim.getContext("2d");
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, W, H);

            const { step, node } = steps[idx];
            let rect = null, wrect = null;
            if (step.queue) rect = queueButtonRect();
            else if (node) { rect = nodeRect(node); wrect = step.focus ? widgetRect(node, step.focus) : null; }

            const pad = 8;
            ctx.fillStyle = "rgba(4, 10, 18, 0.62)";
            ctx.beginPath();
            ctx.rect(0, 0, W, H);
            if (rect) ctx.roundRect(rect.x - pad, rect.y - pad, rect.w + pad * 2, rect.h + pad * 2, 10);
            ctx.fill("evenodd");

            if (rect) {
                ctx.strokeStyle = CYAN;
                ctx.lineWidth = 2;
                ctx.shadowColor = CYAN;
                ctx.shadowBlur = 14;
                ctx.beginPath();
                ctx.roundRect(rect.x - pad, rect.y - pad, rect.w + pad * 2, rect.h + pad * 2, 10);
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
            if (wrect) {
                ctx.strokeStyle = GOLD;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.roundRect(wrect.x - 3, wrect.y - 3, wrect.w + 6, wrect.h + 6, 6);
                ctx.stroke();
            }
            raf = requestAnimationFrame(drawFrame);
        }

        function onKey(e) {
            if (!active) return;
            const tag = e.target && e.target.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || (e.target && e.target.isContentEditable)) return;
            if (e.key === "ArrowRight") { e.preventDefault(); if (idx < steps.length - 1) go(idx + 1); }
            else if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); }
            else if (e.key === "Escape") { e.preventDefault(); stop(); }
        }

        function start() {
            steps = buildSteps();
            if (!steps.length) {
                pill.textContent = "No tour for this workflow yet. Load one from templates/";
                setTimeout(() => { pill.textContent = "🎓 Learn this workflow"; }, 3500);
                return;
            }
            safeStore(() => localStorage.setItem(SEEN_KEY, "1"));
            pill.style.animation = "";
            active = true;
            pill.style.display = "none";
            setHud(false);
            dim.style.display = "block";
            card.style.display = "block";
            go(0);
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(drawFrame);
        }

        function stop() {
            active = false;
            if (camAnim) camAnim.cancelled = true;
            cancelAnimationFrame(raf);
            dim.style.display = "none";
            card.style.display = "none";
            pill.style.display = "block";
            setHud(true);
        }

        pill.onclick = start;
        window.addEventListener("keydown", onKey, true);
        window.BrickHeartTour = { start, stop, isActive: () => active, steps: () => STEPS.length };

        // First visit: gently draw attention to the pill once. Never auto-starts or blocks the canvas.
        if (!safeStore(() => localStorage.getItem(SEEN_KEY))) {
            const style = document.createElement("style");
            style.textContent = "@keyframes bhPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,229,255,.7)}50%{box-shadow:0 0 0 12px rgba(0,229,255,0)}}";
            document.head.appendChild(style);
            pill.style.animation = "bhPulse 1.8s ease-in-out 4";
        }
        console.log("[BrickHeart] Guided tour ready.");
    }
});
