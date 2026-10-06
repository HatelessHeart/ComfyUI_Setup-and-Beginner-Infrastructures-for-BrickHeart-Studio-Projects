import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { SOCKET_DESCRIPTIONS, NODE_ROLE_DESCRIPTIONS, describeNode } from "./tooltips.js";

/**
 * BrickHeart Connection Helper
 * Drag a wire off any socket and this panel lists what can legally plug into it,
 * using the node catalogue of YOUR running ComfyUI (/object_info), so it only offers
 * nodes that are actually installed, and shows the model files you actually have.
 *
 *  - drag from an OUTPUT (e.g. LATENT)  -> nodes with an INPUT that accepts LATENT
 *  - drag from an INPUT  (e.g. needs VAE) -> nodes with an OUTPUT that produces VAE
 * Click a row to add the node already wired up. Click a file chip to also pick that model.
 * The panel stays open after you let go of the wire, so you can click at leisure.
 */

// Node types used by the BrickHeart workflows: shown first with a star.
const PROJECT_TYPES = new Set([
    "CLIPTextEncode", "CheckpointLoaderSimple", "DiffusersLoader", "EmptyLatentImage", "ImageScaleBy",
    "KSampler", "LoadImage", "SUPIR_conditioner", "SUPIR_decode", "SUPIR_encode",
    "SUPIR_model_loader_v2", "SUPIR_sample", "SaveImage", "VAEDecode", "VAEEncodeForInpaint",
]);
const OFF_KEY = "brickheart.connect.off";
const CYAN = "#00e5ff", GOLD = "#ffd700", AMBER = "#ffb74d";
const MAX_ROWS = 80;
const INFO_TTL_MS = 30000;

function store(fn) { try { return fn(); } catch (_) { return null; } }
const tOf = (n) => n.comfyClass || n.type;

// ---- type rules ("by law"): exact match, or one side lists several types "A,B" ----
function typeMatch(a, b) {
    if (!a || !b || a === "*" || b === "*") return false; // wildcards never auto-suggest
    if (a === b) return true;
    const A = String(a).split(","), B = String(b).split(",");
    return A.some(x => B.includes(x));
}

// ---- node catalogue from the live server ----
let info = null, infoAt = 0, infoPromise = null;
async function getInfo(force) {
    if (!force && info && Date.now() - infoAt < INFO_TTL_MS) return info;
    if (!infoPromise) {
        infoPromise = (async () => {
            const res = await api.fetchApi("/object_info");
            info = await res.json();
            infoAt = Date.now();
            return info;
        })().finally(() => { infoPromise = null; });
    }
    return infoPromise;
}

function inputsOf(def) {
    const out = [];
    for (const group of ["required", "optional"]) {
        const g = (def.input || {})[group] || {};
        for (const [name, cfg] of Object.entries(g)) out.push({ name, spec: cfg[0], opts: cfg[1] || {} });
    }
    return out;
}
// combo widgets: spec is an array of options (installed files). New frontends may use ["COMBO", {options}]
function comboOptions(inp) {
    if (Array.isArray(inp.spec)) return inp.spec;
    if (inp.spec === "COMBO" && Array.isArray(inp.opts.options)) return inp.opts.options;
    return null;
}

// ---- find what the user is dragging, across LiteGraph / ComfyUI frontend generations ----
function getDrag() {
    const c = app.canvas;
    if (!c) return null;
    try {
        // Classic LiteGraph
        if (c.connecting_node && c.connecting_output) {
            const o = c.connecting_output;
            return { node: c.connecting_node, slot: c.connecting_slot, side: "output", type: o.type, name: o.name };
        }
        if (c.connecting_node && c.connecting_input) {
            const i = c.connecting_input;
            return { node: c.connecting_node, slot: c.connecting_slot, side: "input", type: i.type, name: i.name };
        }
        // ComfyUI frontend 1.x
        const cl = c.connecting_links;
        if (cl && cl.length) {
            const l = cl[0];
            const side = l.output ? "output" : "input";
            const s = l.output || l.input;
            return { node: l.node, slot: l.slot, side, type: s && s.type, name: s && s.name };
        }
        // Newer frontend: LinkConnector
        const lc = c.linkConnector;
        if (lc && lc.isConnecting && lc.renderLinks && lc.renderLinks.length) {
            const r = lc.renderLinks[0];
            const side = lc.state && lc.state.connectingTo === "input" ? "output" : "input";
            const slotObj = side === "output" ? (r.fromSlot || (r.node.outputs || [])[r.fromSlotIndex])
                                              : (r.fromSlot || (r.node.inputs || [])[r.fromSlotIndex]);
            return { node: r.node, slot: r.fromSlotIndex, side, type: slotObj && slotObj.type, name: slotObj && slotObj.name };
        }
    } catch (_) { /* shape differs on this build: fall through */ }
    return null;
}

// ---- candidates ----
function buildCandidates(drag, catalogue) {
    const rows = [];
    for (const [cls, def] of Object.entries(catalogue)) {
        if (def.deprecated) continue;
        const hit = [];
        if (drag.side === "output") {
            for (const inp of inputsOf(def)) if (typeof inp.spec === "string" && typeMatch(inp.spec, drag.type)) hit.push(inp.name);
        } else {
            (def.output || []).forEach((ot, i) => {
                if (typeMatch(ot, drag.type)) hit.push((def.output_name || [])[i] || ot);
            });
        }
        if (!hit.length) continue;
        const files = [];
        for (const inp of inputsOf(def)) {
            const opts = comboOptions(inp);
            if (opts && /name|model|ckpt|lora|vae|unet|clip|control/i.test(inp.name)) files.push({ widget: inp.name, options: opts });
        }
        rows.push({ cls, def, hit, files, star: PROJECT_TYPES.has(cls) });
    }
    return rows;
}

function graphMatches(drag) {
    // existing nodes with a still-free slot that accepts the dragged type
    const out = [];
    for (const n of (app.graph && app.graph._nodes) || []) {
        if (n === drag.node) continue;
        if (drag.side === "output") {
            (n.inputs || []).forEach((s, i) => { if (s.link == null && typeMatch(s.type, drag.type)) out.push({ node: n, slot: i, name: s.name }); });
        } else {
            (n.outputs || []).forEach((s, i) => { if (typeMatch(s.type, drag.type)) out.push({ node: n, slot: i, name: s.name }); });
        }
    }
    return out;
}

// ---- connect helpers ----
function connect(drag, node, targetSlot) {
    if (drag.side === "output") drag.node.connect(drag.slot, node, targetSlot);
    else node.connect(targetSlot, drag.node, drag.slot);
}
function slotIndex(node, drag) {
    const list = drag.side === "output" ? node.inputs : node.outputs;
    return (list || []).findIndex(s => typeMatch(s.type, drag.type));
}
function addNode(cls, drag) {
    const LG = window.LiteGraph;
    const n = LG.createNode(cls);
    if (!n) return null;
    const src = drag.node;
    n.pos = drag.side === "output"
        ? [src.pos[0] + src.size[0] + 80, src.pos[1]]
        : [src.pos[0] - (n.size ? n.size[0] : 320) - 80, src.pos[1]];
    app.graph.add(n);
    return n;
}

app.registerExtension({
    name: "BrickHeart.ConnectionHelper",
    async setup() {
        if (document.getElementById("brickheart-connect-panel")) return;

        const panel = document.createElement("div");
        panel.id = "brickheart-connect-panel";
        panel.style.cssText = [
            "position:fixed", "left:16px", "top:70px", "width:360px", "max-height:72vh", "display:none",
            "flex-direction:column", "box-sizing:border-box", "background:rgba(13,21,32,0.97)",
            `border:1px solid ${CYAN}`, "border-radius:10px", "box-shadow:0 10px 40px rgba(0,0,0,.65)",
            "color:#e0f7fa", "font:13px/1.45 system-ui,-apple-system,sans-serif", "z-index:999960",
        ].join(";");
        document.body.appendChild(panel);

        let current = null;       // snapshot of the drag that opened the panel
        let rowsAll = [], graphRows = [], filter = "";
        let lastKey = "";
        const enabled = () => !store(() => localStorage.getItem(OFF_KEY));

        function mk(tag, css, text, title) {
            const e = document.createElement(tag);
            if (css) e.style.cssText = css;
            if (text != null) e.textContent = text;
            if (title) e.title = title;
            return e;
        }
        function smallBtn(label, title, onclick) {
            const b = mk("button", `background:transparent;color:#80deea;border:1px solid rgba(0,229,255,.4);border-radius:4px;padding:2px 8px;font:600 11px system-ui;cursor:pointer;`, label, title);
            b.onclick = onclick;
            return b;
        }

        function close() { panel.style.display = "none"; current = null; }

        function render() {
            if (!current) return;
            const d = current;
            panel.innerHTML = "";
            panel.style.display = "flex";

            const typeTip = SOCKET_DESCRIPTIONS[d.type] || `${d.type} data.`;
            const head = mk("div", "display:flex;justify-content:space-between;align-items:flex-start;gap:8px;padding:10px 12px 6px;");
            const titleBox = mk("div", "");
            titleBox.appendChild(mk("div", "font-weight:700;color:#fff;font-size:14px;", d.side === "output" ? `What accepts ${d.type}?` : `What provides ${d.type}?`, typeTip));
            titleBox.appendChild(mk("div", "font-size:11px;color:#80deea;",
                `${d.side === "output" ? "From output" : "Into input"} “${d.name || d.type}” on ${d.node.title ? d.node.title.split(" [")[0] : tOf(d.node)}`,
                "The socket you pulled the wire from."));
            const btns = mk("div", "display:flex;gap:6px;");
            btns.appendChild(smallBtn("↻", "Re-scan installed nodes and model files (use after adding models or custom nodes)", async () => { await getInfo(true); refresh(); }));
            btns.appendChild(smallBtn("✕", "Close (Esc). Turn this helper off permanently with the checkbox below.", close));
            head.append(titleBox, btns);
            panel.appendChild(head);

            panel.appendChild(mk("div", "padding:0 12px 6px;font-size:12px;color:#b2ebf2;", typeTip));

            const search = mk("input", "margin:0 12px 8px;padding:6px 8px;background:rgba(0,30,45,.7);border:1px solid #00e5ff;border-radius:4px;color:#fff;font-size:12px;outline:none;");
            search.type = "text";
            search.placeholder = "Filter by name or category…";
            search.title = "Type to narrow the list. Matches node name, class and category.";
            search.value = filter;
            search.oninput = () => { filter = search.value.toLowerCase(); renderList(); };
            panel.appendChild(search);

            const list = mk("div", "overflow-y:auto;overflow-x:hidden;padding:0 8px 8px;flex:1;min-height:60px;");
            list.id = "brickheart-connect-list";
            panel.appendChild(list);

            const foot = mk("label", "display:flex;gap:6px;align-items:center;padding:6px 12px;border-top:1px solid rgba(0,229,255,.25);font-size:11px;color:#80cbc4;cursor:pointer;",
                null, "Stops this panel from opening when you drag wires. Re-enable by clearing the 'brickheart.connect.off' browser storage key.");
            const cb = mk("input", ""); cb.type = "checkbox";
            cb.onchange = () => { if (cb.checked) { store(() => localStorage.setItem(OFF_KEY, "1")); close(); } };
            foot.append(cb, document.createTextNode("Don't show this helper"));
            panel.appendChild(foot);

            renderList();
        }

        function section(list, label, tip) {
            list.appendChild(mk("div", `margin:8px 4px 2px;font:700 10px system-ui;letter-spacing:.06em;color:${CYAN};`, label, tip));
        }

        function nodeLabel(def, cls) { return def.display_name || cls; }

        function renderList() {
            const list = panel.querySelector("#brickheart-connect-list");
            if (!list || !current) return;
            list.innerHTML = "";
            const d = current;
            const f = filter;
            const match = (s) => !f || s.toLowerCase().includes(f);

            const gr = graphRows.filter(r => match(r.node.title || tOf(r.node)));
            if (gr.length) {
                section(list, "ALREADY ON YOUR CANVAS", "Nodes you already placed that still have a free matching socket. Click to wire up.");
                for (const r of gr) {
                    const label = (r.node.title || tOf(r.node)).split(" [")[0];
                    const row = mk("button", rowCss(), null,
                        `Connect to the existing “${label}” node, socket “${r.name}”. ${describeNode(tOf(r.node), null) || ""}`);
                    row.appendChild(mk("div", "font-weight:600;color:#fff;", label));
                    row.appendChild(mk("div", "font-size:11px;color:#80deea;", `socket: ${r.name}`));
                    row.onclick = () => {
                        if (d.side === "output") d.node.connect(d.slot, r.node, r.slot); else r.node.connect(r.slot, d.node, d.slot);
                        if (app.canvas.setDirty) app.canvas.setDirty(true, true);
                        close();
                    };
                    list.appendChild(row);
                }
            }

            const rows = rowsAll.filter(r => match(nodeLabel(r.def, r.cls)) || match(r.cls) || match(r.def.category || ""));
            const stars = rows.filter(r => r.star), rest = rows.filter(r => !r.star);
            let shown = 0;
            const emit = (arr) => {
                for (const r of arr) {
                    if (shown++ >= MAX_ROWS) return;
                    list.appendChild(candidateRow(r));
                }
            };
            if (stars.length) { section(list, "★ USED IN YOUR BRICKHEART WORKFLOWS", "Node types that appear in the templates shipped with this project."); emit(stars); }
            if (rest.length) { section(list, `INSTALLED NODES THAT FIT (${rest.length})`, "Every node registered in this ComfyUI install with a compatible socket."); emit(rest); }
            if (!rows.length && !gr.length) {
                list.appendChild(mk("div", "padding:14px 8px;color:#ffab91;",
                    f ? `Nothing matches “${f}”.` : `No installed node has a socket that accepts ${d.type}.`));
            }
            if (rows.length > MAX_ROWS) list.appendChild(mk("div", "padding:8px;color:#80cbc4;font-size:11px;", `Showing first ${MAX_ROWS}. Use the filter to narrow.`));
        }

        function rowCss() {
            return "display:block;width:100%;box-sizing:border-box;overflow:hidden;text-align:left;margin:3px 0;padding:7px 9px;background:rgba(0,229,255,.07);color:#e0f7fa;border:1px solid rgba(0,229,255,.25);border-radius:6px;cursor:pointer;font:inherit;";
        }

        function candidateRow(r) {
            const d = current;
            const label = nodeLabel(r.def, r.cls);
            const desc = describeNode(r.cls, r.def);
            const where = d.side === "output" ? `input${r.hit.length > 1 ? "s" : ""}: ${r.hit.join(", ")}` : `output: ${r.hit.join(", ")}`;
            const box = mk("div", rowCss().replace("cursor:pointer;", "") , null,
                `${label} (${r.cls})\n${desc || "No description available."}\nCategory: ${r.def.category || "n/a"}\nConnects via ${where}.`);
            const top = mk("div", "display:flex;justify-content:space-between;gap:8px;cursor:pointer;");
            top.appendChild(mk("div", "font-weight:600;color:#fff;", (r.star ? "★ " : "") + label));
            top.appendChild(mk("div", "font-size:11px;color:#80deea;white-space:nowrap;", where));
            box.appendChild(top);
            box.appendChild(mk("div", "font-size:11px;color:#6fa8b0;", r.def.category || ""));
            top.onclick = () => place(r, null);

            for (const fgrp of r.files) {
                const wrap = mk("div", "display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;align-items:center;");
                if (!fgrp.options.length) {
                    wrap.appendChild(mk("span", `font-size:11px;color:${AMBER};`, `No ${fgrp.widget} files installed yet`,
                        "ComfyUI found no files for this slot. Download one with download_model.py (it audits and asks first), then press ↻."));
                } else {
                    wrap.appendChild(mk("span", "font-size:11px;color:#80cbc4;", `${fgrp.widget}:`, "Installed files you can pick right now."));
                    fgrp.options.slice(0, 4).forEach(opt => {
                        const chip = mk("button", `background:rgba(255,215,0,.1);color:#fff3b0;border:1px solid rgba(255,215,0,.5);border-radius:10px;padding:1px 8px;font-size:11px;cursor:pointer;`,
                            String(opt).replace(/^.*[\\/]/, ""), `Add this node already set to “${opt}”.`);
                        chip.onclick = (e) => { e.stopPropagation(); place(r, { widget: fgrp.widget, value: opt }); };
                        wrap.appendChild(chip);
                    });
                    if (fgrp.options.length > 4) wrap.appendChild(mk("span", "font-size:11px;color:#6fa8b0;", `+${fgrp.options.length - 4} more`, fgrp.options.join("\n")));
                }
                box.appendChild(wrap);
            }
            return box;
        }

        function place(r, pick) {
            const d = current;
            const n = addNode(r.cls, d);
            if (!n) { toast(`Couldn't create ${r.cls}. Is it installed?`); return; }
            if (pick) {
                const w = (n.widgets || []).find(x => x.name === pick.widget);
                if (w) { w.value = pick.value; if (w.callback) w.callback(pick.value); }
            }
            const idx = slotIndex(n, d);
            if (idx >= 0) connect(d, n, idx);
            else toast(`Added ${r.cls}, but couldn't find a matching socket to wire.`);
            if (app.canvas.setDirty) app.canvas.setDirty(true, true);
            close();
        }

        function toast(msg) {
            const t = mk("div", `position:fixed;left:50%;bottom:30px;transform:translateX(-50%);background:#3e2723;color:#ffccbc;border:1px solid ${AMBER};padding:8px 14px;border-radius:6px;z-index:1000000;font:13px system-ui;`, msg);
            document.body.appendChild(t);
            setTimeout(() => t.remove(), 3500);
        }

        async function refresh() {
            if (!current) return;
            try {
                const cat = await getInfo(false);
                rowsAll = buildCandidates(current, cat);
                rowsAll.sort((a, b) => (nodeLabel(a.def, a.cls)).localeCompare(nodeLabel(b.def, b.cls)));
                graphRows = graphMatches(current);
                render();
            } catch (e) {
                panel.innerHTML = "";
                panel.style.display = "flex";
                panel.appendChild(mk("div", "padding:14px;color:#ff8a80;", "Couldn't read the node catalogue from ComfyUI (/object_info)."));
                console.warn("[BrickHeart] object_info failed", e);
            }
        }

        // Watch for drags. Cheap: one property check per frame, work only when a new drag starts.
        function poll() {
            const tourOn = window.BrickHeartTour && window.BrickHeartTour.isActive && window.BrickHeartTour.isActive();
            if (enabled() && !tourOn) {
                const d = getDrag();
                if (d && d.node && d.type && d.type !== "*") {
                    const key = `${d.node.id}:${d.side}:${d.slot}`;
                    if (key !== lastKey) {
                        lastKey = key;
                        current = d;
                        filter = "";
                        refresh();
                    }
                } else if (!d) {
                    lastKey = ""; // drag ended; keep the panel open until the user closes it
                }
            }
            requestAnimationFrame(poll);
        }
        requestAnimationFrame(poll);

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && current) close();
        });

        // Debug aid: shows which drag fields this ComfyUI build exposes.
        window.BrickHeartConnect = {
            debug: () => {
                const c = app.canvas;
                return {
                    connecting_node: !!c.connecting_node, connecting_output: !!c.connecting_output,
                    connecting_input: !!c.connecting_input, connecting_links: c.connecting_links ? c.connecting_links.length : null,
                    linkConnector: !!c.linkConnector, linkConnector_isConnecting: c.linkConnector ? !!c.linkConnector.isConnecting : null,
                    drag: getDrag() && { side: getDrag().side, type: getDrag().type, name: getDrag().name },
                };
            },
            open: (node, side, slot) => {
                const s = (side === "output" ? node.outputs : node.inputs)[slot];
                current = { node, slot, side, type: s.type, name: s.name };
                filter = "";
                refresh();
            },
            close,
        };
        console.log("[BrickHeart] Connection helper ready.");
    },
});
