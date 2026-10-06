import { app } from "../../scripts/app.js";

/**
 * BrickHeart Spatial Grid HUD Extension
 * Overlays an alphanumeric coordinate grid (Cols A-T, Rows 1-12) over ComfyUI.
 * Toggle visibility anytime by pressing 'G' or clicking the HUD badge.
 */
app.registerExtension({
    name: "BrickHeart.SpatialGridHUD",
    async setup() {
        if (document.getElementById("brickheart-spatial-grid-hud")) return;

        const overlay = document.createElement("div");
        overlay.id = "brickheart-spatial-grid-hud";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.zIndex = "999990";
        overlay.style.pointerEvents = "none";
        overlay.style.overflow = "hidden";
        overlay.style.display = "none"; // Start hidden; toggle with 'G'

        const canvas = document.createElement("canvas");
        canvas.id = "brickheart-spatial-grid-canvas";
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        overlay.appendChild(canvas);

        const badge = document.createElement("div");
        badge.id = "brickheart-spatial-grid-badge";
        badge.innerText = "SPATIAL GRID [G]";
        badge.style.position = "fixed";
        badge.style.bottom = "12px";
        badge.style.right = "16px";
        badge.style.background = "rgba(10, 25, 38, 0.9)";
        badge.style.color = "#00e5ff";
        badge.style.fontFamily = "monospace";
        badge.style.fontSize = "11px";
        badge.style.fontWeight = "bold";
        badge.style.padding = "5px 10px";
        badge.style.borderRadius = "5px";
        badge.style.border = "1px solid #00e5ff";
        badge.style.boxShadow = "0 0 8px rgba(0, 229, 255, 0.35)";
        badge.style.pointerEvents = "auto";
        badge.style.cursor = "pointer";
        badge.style.userSelect = "none";
        badge.style.zIndex = "999999";
        document.body.appendChild(badge);
        document.body.appendChild(overlay);

        let visible = false;
        const numCols = 20;
        const numRows = 12;
        const spotlights = {};

        function indexToCol(idx) {
            let col = "";
            idx += 1;
            while (idx > 0) {
                let rem = (idx - 1) % 26;
                col = String.fromCharCode(65 + rem) + col;
                idx = Math.floor((idx - 1) / 26);
            }
            return col;
        }

        function drawGrid() {
            if (!visible) return;
            const w = window.innerWidth;
            const h = window.innerHeight;
            canvas.width = w * window.devicePixelRatio;
            canvas.height = h * window.devicePixelRatio;
            const ctx = canvas.getContext("2d");
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            ctx.clearRect(0, 0, w, h);

            const cellW = w / numCols;
            const cellH = h / numRows;

            // Translucent cyan grid lines
            ctx.strokeStyle = "rgba(0, 220, 255, 0.22)";
            ctx.lineWidth = 1;
            for (let c = 0; c <= numCols; c++) {
                ctx.beginPath();
                ctx.moveTo(c * cellW, 0);
                ctx.lineTo(c * cellW, h);
                ctx.stroke();
            }
            for (let r = 0; r <= numRows; r++) {
                ctx.beginPath();
                ctx.moveTo(0, r * cellH);
                ctx.lineTo(w, r * cellH);
                ctx.stroke();
            }

            // Cell ID watermarks (A1 to T12)
            ctx.font = "10px monospace";
            ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
            for (let c = 0; c < numCols; c++) {
                const colLetter = indexToCol(c);
                for (let r = 0; r < numRows; r++) {
                    const id = `${colLetter}${r + 1}`;
                    ctx.fillText(id, c * cellW + 4, r * cellH + 12);
                }
            }

            // Spotlights / Highlights
            for (const [cellId, label] of Object.entries(spotlights)) {
                const colLetters = cellId.replace(/[^A-Z]/gi, "").toUpperCase();
                const rowNum = parseInt(cellId.replace(/[^0-9]/g, ""), 10);
                let colIdx = 0;
                for (let i = 0; i < colLetters.length; i++) {
                    colIdx = colIdx * 26 + (colLetters.charCodeAt(i) - 64);
                }
                colIdx -= 1;
                const rowIdx = rowNum - 1;

                const x = colIdx * cellW;
                const y = rowIdx * cellH;

                ctx.fillStyle = "rgba(255, 215, 0, 0.18)";
                ctx.fillRect(x, y, cellW, cellH);
                ctx.strokeStyle = "#ffd700";
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, cellW, cellH);

                ctx.fillStyle = "rgba(255, 215, 0, 0.9)";
                ctx.fillRect(x, y, cellW, 16);
                ctx.fillStyle = "#000000";
                ctx.font = "bold 11px monospace";
                ctx.fillText(`[${cellId}] ${label}`, x + 4, y + 12);
            }
        }

        function toggle() {
            visible = !visible;
            overlay.style.display = visible ? "block" : "none";
            badge.innerText = visible ? "SPATIAL GRID: ON [G]" : "SPATIAL GRID: OFF [G]";
            badge.style.color = visible ? "#00e5ff" : "#888888";
            badge.style.borderColor = visible ? "#00e5ff" : "#555555";
            badge.style.boxShadow = visible ? "0 0 10px rgba(0, 229, 255, 0.4)" : "none";
            if (visible) drawGrid();
        }

        badge.onclick = toggle;
        window.addEventListener("resize", drawGrid);
        window.addEventListener("keydown", (e) => {
            if (e.key === "g" || e.key === "G") {
                if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
                toggle();
            }
        });

        window.BrickHeartGrid = {
            toggle,
            spotlight: (cell, label) => {
                spotlights[cell] = label;
                if (!visible) toggle();
                else drawGrid();
            },
            clear: () => {
                for (let k in spotlights) delete spotlights[k];
                drawGrid();
            }
        };

        console.log("[BrickHeart] Spatial Grid HUD loaded. Press 'G' to toggle.");
    }
});
