import { app } from "../../scripts/app.js";

/**
 * BrickHeart Spatial Pilot & Teaching HUD
 * Draggable, minimizable in-browser overlay for ComfyUI.
 * Connects directly to Chrome DevTools & LiteGraph DOM for sub-pixel accuracy.
 */
app.registerExtension({
    name: "BrickHeart.SpatialPilotHUD",
    async setup() {
        if (document.getElementById("brickheart-pilot-root")) return;

        // --- ROOT CONTAINER ---
        const root = document.createElement("div");
        root.id = "brickheart-pilot-root";

        // --- FULL-SCREEN GRID CANVAS (Pointer events disabled) ---
        const gridCanvas = document.createElement("canvas");
        gridCanvas.id = "brickheart-grid-canvas";
        gridCanvas.style.position = "fixed";
        gridCanvas.style.top = "0";
        gridCanvas.style.left = "0";
        gridCanvas.style.width = "100vw";
        gridCanvas.style.height = "100vh";
        gridCanvas.style.zIndex = "999980";
        gridCanvas.style.pointerEvents = "none";
        gridCanvas.style.display = "none";
        root.appendChild(gridCanvas);

        // --- DRAGGABLE & MINIMIZABLE HUD WIDGET ---
        const panel = document.createElement("div");
        panel.id = "brickheart-pilot-panel";
        panel.style.position = "fixed";
        panel.style.top = "60px";
        panel.style.right = "24px";
        panel.style.width = "260px";
        panel.style.background = "rgba(13, 21, 32, 0.92)";
        panel.style.backdropFilter = "blur(8px)";
        panel.style.border = "1px solid #00e5ff";
        panel.style.borderRadius = "8px";
        panel.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 12px rgba(0, 229, 255, 0.25)";
        panel.style.color = "#e0f7fa";
        panel.style.fontFamily = "system-ui, -apple-system, sans-serif";
        panel.style.fontSize = "12px";
        panel.style.zIndex = "999999";
        panel.style.userSelect = "none";
        panel.style.transition = "height 0.2s ease, width 0.2s ease";

        // Panel Header (Draggable handle)
        const header = document.createElement("div");
        header.style.display = "flex";
        header.style.alignItems = "center";
        header.style.justifyContent = "space-between";
        header.style.padding = "8px 12px";
        header.style.background = "rgba(0, 229, 255, 0.12)";
        header.style.borderBottom = "1px solid rgba(0, 229, 255, 0.3)";
        header.style.borderRadius = "7px 7px 0 0";
        header.style.cursor = "grab";

        const title = document.createElement("div");
        title.innerHTML = "<b>SPATIAL PILOT</b> <span style='font-size:10px; color:#00e5ff;'>[DEVTOOLS]</span>";
        header.appendChild(title);

        const btnGroup = document.createElement("div");
        btnGroup.style.display = "flex";
        btnGroup.style.gap = "6px";

        // Minimize Button
        const minBtn = document.createElement("button");
        minBtn.innerText = "−";
        minBtn.title = "Minimize / Expand HUD";
        minBtn.style.background = "transparent";
        minBtn.style.border = "1px solid #00e5ff";
        minBtn.style.color = "#00e5ff";
        minBtn.style.borderRadius = "4px";
        minBtn.style.cursor = "pointer";
        minBtn.style.width = "20px";
        minBtn.style.height = "20px";
        minBtn.style.lineHeight = "16px";
        minBtn.style.fontWeight = "bold";
        btnGroup.appendChild(minBtn);
        header.appendChild(btnGroup);
        panel.appendChild(header);

        // Panel Body
        const body = document.createElement("div");
        body.id = "brickheart-pilot-body";
        body.style.padding = "12px";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.gap = "10px";

        // Coordinate Readout
        const readout = document.createElement("div");
        readout.style.fontFamily = "monospace";
        readout.style.fontSize = "11px";
        readout.style.color = "#80deea";
        readout.style.background = "rgba(0, 0, 0, 0.4)";
        readout.style.padding = "6px 8px";
        readout.style.borderRadius = "4px";
        readout.style.border = "1px solid rgba(0, 229, 255, 0.15)";
        readout.innerText = "Hover Block: [ -- ]";
        body.appendChild(readout);

        // Grid Toggle Button
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "brickheart-grid-toggle";
        toggleBtn.innerText = "Toggle Grid Overlay (G)";
        toggleBtn.style.background = "#005b64";
        toggleBtn.style.color = "#ffffff";
        toggleBtn.style.border = "1px solid #00e5ff";
        toggleBtn.style.borderRadius = "5px";
        toggleBtn.style.padding = "7px";
        toggleBtn.style.fontWeight = "bold";
        toggleBtn.style.cursor = "pointer";
        body.appendChild(toggleBtn);

        // Quick Teaching Spotlights
        const sectionTitle = document.createElement("div");
        sectionTitle.innerText = "TEACHING SPOTLIGHTS:";
        sectionTitle.style.fontSize = "10px";
        sectionTitle.style.fontWeight = "bold";
        sectionTitle.style.color = "#4dd0e1";
        sectionTitle.style.marginTop = "4px";
        body.appendChild(sectionTitle);

        const spotGrid = document.createElement("div");
        spotGrid.style.display = "grid";
        spotGrid.style.gridTemplateColumns = "1fr 1fr";
        spotGrid.style.gap = "6px";

        const targets = [
            { id: "turbo", name: "Stage 1 (Turbo)", cell: "D6" },
            { id: "inpaint", name: "Stage 1.5 (Inpaint)", cell: "H7" },
            { id: "supir", name: "Stage 2 (SUPIR)", cell: "K6" },
            { id: "queue", name: "Queue Button", cell: "R2" }
        ];

        targets.forEach(t => {
            const btn = document.createElement("button");
            btn.innerText = t.name;
            btn.style.background = "rgba(0, 229, 255, 0.08)";
            btn.style.color = "#e0f7fa";
            btn.style.border = "1px solid rgba(0, 229, 255, 0.3)";
            btn.style.borderRadius = "4px";
            btn.style.padding = "5px";
            btn.style.fontSize = "10px";
            btn.style.cursor = "pointer";
            btn.onmouseover = () => btn.style.borderColor = "#00e5ff";
            btn.onmouseout = () => btn.style.borderColor = "rgba(0, 229, 255, 0.3)";
            btn.onclick = () => {
                if (window.BrickHeartGrid) {
                    window.BrickHeartGrid.spotlight(t.cell, t.name);
                }
            };
            spotGrid.appendChild(btn);
        });
        body.appendChild(spotGrid);

        // Clear Spotlights Button
        const clearBtn = document.createElement("button");
        clearBtn.innerText = "Clear Spotlights";
        clearBtn.style.background = "transparent";
        clearBtn.style.color = "#80cbc4";
        clearBtn.style.border = "1px solid rgba(128, 203, 196, 0.3)";
        clearBtn.style.borderRadius = "4px";
        clearBtn.style.padding = "4px";
        clearBtn.style.fontSize = "10px";
        clearBtn.style.cursor = "pointer";
        clearBtn.onclick = () => {
            if (window.BrickHeartGrid) window.BrickHeartGrid.clear();
        };
        body.appendChild(clearBtn);

        panel.appendChild(body);
        root.appendChild(panel);
        document.body.appendChild(root);

        // --- DRAG LOGIC ---
        let isDragging = false;
        let dragOffsetX = 0;
        let dragOffsetY = 0;

        header.onmousedown = (e) => {
            isDragging = true;
            header.style.cursor = "grabbing";
            dragOffsetX = e.clientX - panel.offsetLeft;
            dragOffsetY = e.clientY - panel.offsetTop;
        };

        window.addEventListener("mousemove", (e) => {
            if (isDragging) {
                panel.style.left = `${Math.max(10, Math.min(window.innerWidth - panel.offsetWidth - 10, e.clientX - dragOffsetX))}px`;
                panel.style.top = `${Math.max(10, Math.min(window.innerHeight - panel.offsetHeight - 10, e.clientY - dragOffsetY))}px`;
                panel.style.right = "auto";
            }

            // Update coordinate readout
            if (window.BrickHeartGrid && window.BrickHeartGrid.isVisible()) {
                const cell = window.BrickHeartGrid.coordsToCell(e.clientX, e.clientY);
                readout.innerText = `Hover Block: [ ${cell} ]`;
            }
        });

        window.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                header.style.cursor = "grab";
            }
        });

        // --- MINIMIZE LOGIC ---
        let isMinimized = false;
        minBtn.onclick = () => {
            isMinimized = !isMinimized;
            if (isMinimized) {
                body.style.display = "none";
                minBtn.innerText = "+";
                panel.style.width = "180px";
            } else {
                body.style.display = "flex";
                minBtn.innerText = "−";
                panel.style.width = "260px";
            }
        };

        // --- GRID RENDERING LOGIC ---
        let gridVisible = false;
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
            if (!gridVisible) return;
            const w = window.innerWidth;
            const h = window.innerHeight;
            gridCanvas.width = w * window.devicePixelRatio;
            gridCanvas.height = h * window.devicePixelRatio;
            const ctx = gridCanvas.getContext("2d");
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            ctx.clearRect(0, 0, w, h);

            const cellW = w / numCols;
            const cellH = h / numRows;

            ctx.strokeStyle = "rgba(0, 220, 255, 0.20)";
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

            ctx.font = "10px monospace";
            ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
            for (let c = 0; c < numCols; c++) {
                const colLetter = indexToCol(c);
                for (let r = 0; r < numRows; r++) {
                    const id = `${colLetter}${r + 1}`;
                    ctx.fillText(id, c * cellW + 4, r * cellH + 12);
                }
            }

            // Spotlights
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

        function toggleGrid() {
            gridVisible = !gridVisible;
            gridCanvas.style.display = gridVisible ? "block" : "none";
            toggleBtn.innerText = gridVisible ? "Grid: ACTIVE (G)" : "Grid: HIDDEN (G)";
            toggleBtn.style.background = gridVisible ? "#00838f" : "#005b64";
            if (gridVisible) drawGrid();
        }

        toggleBtn.onclick = toggleGrid;
        window.addEventListener("resize", drawGrid);
        window.addEventListener("keydown", (e) => {
            if (e.key === "g" || e.key === "G") {
                if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
                toggleGrid();
            }
        });

        window.BrickHeartGrid = {
            toggle: toggleGrid,
            isVisible: () => gridVisible,
            coordsToCell: (x, y) => {
                const c = Math.floor(x / (window.innerWidth / numCols));
                const r = Math.floor(y / (window.innerHeight / numRows));
                return `${indexToCol(c)}${r + 1}`;
            },
            spotlight: (cell, label) => {
                spotlights[cell] = label;
                if (!gridVisible) toggleGrid();
                else drawGrid();
            },
            clear: () => {
                for (let k in spotlights) delete spotlights[k];
                drawGrid();
            }
        };

        console.log("[BrickHeart] Draggable Spatial Pilot HUD mounted.");
    }
});
