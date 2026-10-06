import { app } from "../../scripts/app.js";

/**
 * BrickHeart Guided Tour (data-driven)
 * Walks a learner through the loaded workflow one node at a time:
 * the camera glides to the real node, everything else dims, the key setting is ringed in gold,
 * and a card explains what it does, why, and what to try.
 *
 * Lessons live in tours/*.json ("tracks"), listed in tours/index.json. A track says which node
 * types its steps look for; the tour picks the track that matches the workflow on the canvas
 * (or lets the learner choose). Adding or correcting a lesson means editing JSON, not code.
 * Steps whose node is not in the workflow are skipped. Nodes inside subgraphs (collapsed
 * components) are found too; the tour opens the subgraph for that step and returns afterwards.
 * Per-setting explanations are read from widget.tooltip (set by tooltips.js): one source of truth.
 *
 * Track format:  { id, title, summary, reviewed, steps: [ {
 *   find: { type, nth?, titleIncludes?, titleExcludes? }  |  queue: true,
 *   focus?: "widget" | ["alternate", ...], title, body, tryIt, source?: [..] } ] }
 */

const GOLD = "#ffd700";
const CYAN = "#00e5ff";
const CARD_H = 230; // space reserved at the bottom for the explanation card
const SEEN_KEY = "brickheart.tour.seen";

function safeStore(fn) { try { return fn(); } catch (_) { return null; } }

function typeOf(n) { return n.comfyClass || n.type; }

// Every node in the open workflow, including nodes inside subgraphs (collapsed components).
function collectNodes() {
    const out = [], seen = new Set();
    const walk = (graph, depth) => {
        if (!graph || seen.has(graph) || depth > 4) return;
        seen.add(graph);
        for (const n of graph._nodes || graph.nodes || []) {
            out.push({ node: n, graph, depth });
            if (n.subgraph) walk(n.subgraph, depth + 1);
        }
    };
    walk(app.graph, 0);
    return out;
}

function resolveStep(step, all) {
    if (step.queue) return { node: null, graph: null };
    const { type, nth = 0, titleIncludes, titleExcludes } = step.find;
    let list = all.filter(e => typeOf(e.node) === type);
    const title = (e) => (e.node.title || "").toLowerCase();
    if (titleIncludes) list = list.filter(e => title(e).includes(titleIncludes.toLowerCase()));
    if (titleExcludes) list = list.filter(e => !title(e).includes(titleExcludes.toLowerCase()));
    // Top-level first, then workflow flow (left to right, top to bottom) so "nth" is stable across layouts.
    list.sort((a, b) => a.depth - b.depth || a.node.pos[0] - b.node.pos[0] || a.node.pos[1] - b.node.pos[1]);
    const hit = list[nth];
    return hit ? { node: hit.node, graph: hit.graph } : { node: null, graph: null };
}

async function loadTracks() {
    const base = new URL("./tours/", import.meta.url);
    const out = [];
    try {
        const idx = await (await fetch(new URL("index.json", base))).json();
        for (const f of idx.tracks || []) {
            try { out.push(await (await fetch(new URL(f, base))).json()); }
            catch (e) { console.warn("[BrickHeart] could not load tour track", f, e); }
        }
    } catch (e) { console.warn("[BrickHeart] no tour tracks found", e); }
    return out;
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
    const names = [].concat(focus || []);
    if (!node || !names.length) return null;
    const vis = (b) => b.width > 4 && b.height > 4;

    // 1) Vue-rendered nodes (newer frontends): widgets are real DOM rows. Prefer an exact label match,
    //    then a whole-word match, so "steps" never lands on "start_at_step".
    const nodeEl = document.querySelector(`[data-node-id='${node.id}']`);
    if (nodeEl) {
        const rows = Array.from(nodeEl.querySelectorAll(".lg-node-widget"));
        const norm = (t) => (t || "").toLowerCase().replace(/[\s_]+/g, " ").trim();
        for (const name of names) {
            const want = norm(name);
            const hit = rows.find(r => norm(r.textContent) === want || norm(r.querySelector("label, .lg-node-widget-label, span")?.textContent) === want)
                || rows.find(r => new RegExp(`(^|\\s)${want.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`).test(norm(r.textContent)));
            if (hit) {
                const b = hit.getBoundingClientRect();
                if (vis(b)) return { x: b.left, y: b.top, w: b.width, h: b.height };
            }
        }
    }

    // 2) Canvas-drawn widgets: vertical offset lives in last_y (classic) or y (current), relative to the node body.
    const w = findWidget(node, focus);
    if (!w) return null;
    const wy = typeof w.last_y === "number" ? w.last_y : (typeof w.y === "number" ? w.y : null);
    if (wy === null) return null;
    const s = app.canvas.ds.scale;
    const wh = w.computedHeight || (window.LiteGraph && window.LiteGraph.NODE_WIDGET_HEIGHT) || 20;
    const [x, y] = toScreen(node.pos[0] + 6, node.pos[1] + wy);
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
        pill.title = "Start a step-by-step guided tour of the workflow on your canvas";
        pill.style.cssText = [
            "position:fixed", "left:16px", "bottom:16px", "z-index:999985", "padding:9px 14px",
            `background:#005b64`, "color:#fff", `border:1px solid ${CYAN}`, "border-radius:999px",
            "font:600 13px system-ui,sans-serif", "cursor:pointer", "box-shadow:0 4px 18px rgba(0,0,0,.5)",
        ].join(";");
        root.appendChild(pill);

        let tracks = [];    // loaded from tours/*.json
        let track = null;   // the track being run
        let steps = [];     // resolved: [{step, node, graph}]
        let idx = 0;
        let active = false;
        let chooserOpen = false;
        let rootGraph = null; // graph open when the tour started, restored on exit
        let raf = 0;

        // The Spatial Pilot HUD floats above everything; hide it while the tour owns the screen.
        function setHud(show) {
            const hud = document.getElementById("brickheart-pilot-panel");
            if (hud) hud.style.display = show ? "block" : "none";
        }

        function resolveTrack(t, all) {
            const out = [];
            for (const step of t.steps || []) {
                const r = resolveStep(step, all);
                if (step.queue || r.node) out.push({ step, node: r.node, graph: r.graph });
            }
            const found = out.filter(x => !x.step.queue).length;
            return { steps: out, found, total: (t.steps || []).filter(x => !x.queue).length };
        }

        function btn(label, primary, tip) {
            const b = document.createElement("button");
            b.textContent = label;
            if (tip) b.title = tip;
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
            prog.textContent = `${track && track.title ? track.title + " · " : ""}Step ${idx + 1} of ${total}`;
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

            if (node && step._inside) {
                const w = document.createElement("div");
                w.style.cssText = "margin-top:8px;font-size:12.5px;color:#ffcc80;";
                w.textContent = "This node is inside a collapsed component (subgraph). If you can't see it, open the component to follow along.";
                card.appendChild(w);
            }

            const t = document.createElement("div");
            t.style.cssText = "margin-top:8px;font-size:13px;color:#a7ffeb;";
            t.textContent = "Try it: " + step.tryIt;
            card.appendChild(t);

            if (track && (track.reviewed === false || step.verified === false)) {
                const d = document.createElement("div");
                d.style.cssText = "margin-top:6px;font-size:11px;color:#8aa3a8;font-style:italic;";
                d.textContent = "Draft lesson: not yet reviewed by the instructor." + (step.source && step.source.length ? " Source: " + step.source.join("; ") : "");
                d.title = "Lesson text lives in tours/" + track.id + ".json";
                card.appendChild(d);
            }

            const row = document.createElement("div");
            row.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:8px;";
            const exit = btn("Exit tour", false, "Close the tour and return to normal editing (Esc)");
            exit.onclick = stop;
            const hint = document.createElement("span");
            hint.style.cssText = "font-size:11px;color:#6fa8b0;";
            hint.textContent = "← → keys to move · Esc to exit";
            const nav = document.createElement("div");
            nav.style.cssText = "display:flex;gap:8px;";
            const back = btn("Back", false, "Previous step (← key)");
            back.disabled = idx === 0;
            back.style.opacity = idx === 0 ? "0.4" : "1";
            back.onclick = () => go(idx - 1);
            const last = idx === total - 1;
            const next = btn(last ? "Finish" : "Next", true, last ? "End the tour" : "Next step (→ key)");
            next.onclick = () => (last ? stop() : go(idx + 1));
            nav.append(back, next);
            row.append(exit, hint, nav);
            card.appendChild(row);
            next.focus({ preventScroll: true });
        }

        function openGraphFor(entry) {
            // Show the graph that contains the step's node (a subgraph or the root); report if we couldn't.
            const c = app.canvas;
            const want = entry.graph || rootGraph;
            if (!want || !c) return true;
            if (c.graph === want) return true;
            try { if (typeof c.setGraph === "function") c.setGraph(want); } catch (e) { console.warn("[BrickHeart] setGraph failed", e); }
            return c.graph === want;
        }

        function go(i) {
            if (i < 0 || i >= steps.length) return;
            idx = i;
            if (camAnim) camAnim.cancelled = true;
            const entry = steps[idx];
            entry.step._inside = !openGraphFor(entry);
            if (entry.node && !entry.step._inside) glideTo(entry.node);
            renderCard();
        }

        function queueButtonRect() {
            // Several matches can exist (a hidden 0x0 legacy button comes first in some builds):
            // take the first one that is actually visible.
            const selectors = ["[data-testid='queue-button']", ".queue-button-group button", "#queue-button", ".comfy-menu button"];
            for (const sel of selectors) {
                for (const el of document.querySelectorAll(sel)) {
                    const r = el.getBoundingClientRect();
                    if (r.width > 20 && r.height > 20) return { x: r.left, y: r.top, w: r.width, h: r.height };
                }
            }
            return null;
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
            else if (node && !step._inside) { rect = nodeRect(node); wrect = step.focus ? widgetRect(node, step.focus) : null; }

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
            if (chooserOpen && e.key === "Escape") { e.preventDefault(); closeChooser(); return; }
            if (!active) return;
            const tag = e.target && e.target.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || (e.target && e.target.isContentEditable)) return;
            if (e.key === "ArrowRight") { e.preventDefault(); if (idx < steps.length - 1) go(idx + 1); }
            else if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); }
            else if (e.key === "Escape") { e.preventDefault(); stop(); }
        }

        function closeChooser() {
            chooserOpen = false;
            card.style.display = "none";
            pill.style.display = "block";
            setHud(true);
        }

        function flash(msg) {
            pill.textContent = msg;
            setTimeout(() => { pill.textContent = "🎓 Learn this workflow"; }, 4500);
        }

        function begin(t, resolved) {
            track = t;
            steps = resolved.steps;
            chooserOpen = false;
            rootGraph = app.canvas && app.canvas.graph ? app.canvas.graph : app.graph;
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

        function showChooser(viable) {
            chooserOpen = true;
            pill.style.display = "none";
            setHud(false);
            card.innerHTML = "";
            card.style.display = "block";
            const h = document.createElement("div");
            h.style.cssText = "font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;";
            h.textContent = "Pick a lesson";
            const sub = document.createElement("div");
            sub.style.cssText = "font-size:12.5px;color:#80deea;margin-bottom:10px;";
            sub.textContent = "These lessons match nodes in the workflow on your canvas.";
            card.append(h, sub);
            viable.forEach((v, i) => {
                const b = document.createElement("button");
                b.style.cssText = "display:block;width:100%;text-align:left;margin:4px 0;padding:9px 12px;border-radius:8px;cursor:pointer;font:inherit;color:#e0f7fa;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.35);";
                b.title = v.track.summary || v.track.title;
                const t = document.createElement("div");
                t.style.cssText = "font-weight:700;color:#fff;";
                t.textContent = (i === 0 ? "★ " : "") + v.track.title;
                const m = document.createElement("div");
                m.style.cssText = "font-size:12px;color:#80deea;";
                m.textContent = `${v.resolved.found} of ${v.resolved.total} steps match` + (i === 0 ? " · best match" : "");
                b.append(t, m);
                if (v.track.summary) {
                    const sm = document.createElement("div");
                    sm.style.cssText = "font-size:12px;color:#6fa8b0;";
                    sm.textContent = v.track.summary;
                    b.appendChild(sm);
                }
                b.onclick = () => begin(v.track, v.resolved);
                card.appendChild(b);
            });
            const x = document.createElement("button");
            x.textContent = "Cancel";
            x.title = "Close (Esc)";
            x.style.cssText = `margin-top:8px;padding:6px 14px;border-radius:6px;cursor:pointer;background:transparent;color:#80deea;border:1px solid ${CYAN};font:600 13px system-ui;`;
            x.onclick = closeChooser;
            card.appendChild(x);
        }

        async function start() {
            if (!tracks.length) tracks = await loadTracks();
            const all = collectNodes();
            const viable = tracks
                .map(t => ({ track: t, resolved: resolveTrack(t, all) }))
                .filter(v => v.resolved.found >= 2)
                .sort((a, b) => (b.resolved.found / b.resolved.total) - (a.resolved.found / a.resolved.total) || b.resolved.found - a.resolved.found);
            // Offer only real matches: at least 3 steps and a third of the track. Always keep the best one.
            const strong = viable.filter(v => v.resolved.found >= 3 && v.resolved.found / v.resolved.total >= 0.34);
            if (viable.length && !strong.length) strong.push(viable[0]);
            viable.length = 0; viable.push(...strong);
            if (!viable.length) {
                flash(tracks.length ? "No lesson matches this workflow yet. See docs/ROADMAP_AND_IDEAS.md" : "No lessons found (tours/index.json)");
                return;
            }
            if (viable.length === 1) begin(viable[0].track, viable[0].resolved);
            else showChooser(viable);
        }

        function stop() {
            active = false;
            if (camAnim) camAnim.cancelled = true;
            cancelAnimationFrame(raf);
            dim.style.display = "none";
            card.style.display = "none";
            pill.style.display = "block";
            setHud(true);
            try {   // leave the learner where they started if the tour opened a subgraph
                const c = app.canvas;
                if (rootGraph && c && c.graph !== rootGraph && typeof c.setGraph === "function") c.setGraph(rootGraph);
            } catch (_) { /* best effort */ }
        }

        pill.onclick = start;
        window.addEventListener("keydown", onKey, true);
        window.BrickHeartTour = { start, stop, isActive: () => active, tracks: () => tracks.map(t => t.id) };
        loadTracks().then(t => { tracks = t; });

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
