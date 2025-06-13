export const bloomGridStyles = `
[data-bloom-grid-version="0"] {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid var(--bloom-border-color, #ccc);
}
[data-bloom-grid-version="0"] .body {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(var(--col-count), minmax(30px, auto));
  grid-auto-rows: minmax(24px, auto);
  width: 100%;
  height: 100%;
}
[data-bloom-grid-version="0"] .row {
  display: contents;
}
[data-bloom-grid-version="0"] .cell {
  border: 1px solid #ddd;
  padding: 2px;
  min-width: 30px;
}
[data-bloom-grid-version="0"] .ghost-pill {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid #ccc;
  cursor: pointer;
}

[data-bloom-grid-version="0"][data-border-style="None"] {
  border: none;
}
[data-bloom-grid-version="0"][data-border-style="Outline"] .cell {
  border: none;
}
[data-bloom-grid-version="0"][data-border-style="None"] .cell {
  border: none;
}
[data-bloom-grid-version="0"][data-border-style="All"] .cell {
  border: 1px solid var(--bloom-border-color, #ccc);
}
[data-bloom-grid-version="0"][data-border-color="Black"] {
  --bloom-border-color: black;
}
[data-bloom-grid-version="0"][data-border-color="Grey"] {
  --bloom-border-color: grey;
}
[data-bloom-grid-version="0"][data-border-color="None"] {
  --bloom-border-color: transparent;
}

[data-bloom-grid-version="0"] .menu-icon {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-bottom: 8px solid black;
  cursor: pointer;
  display: none;
}
[data-bloom-grid-version="0"]:hover .menu-icon {
  display: block;
}
[data-bloom-grid-version="0"] .grid-menu {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  padding: 4px;
  z-index: 10;
}
[data-bloom-grid-version="0"] .grid-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
[data-bloom-grid-version="0"] .grid-menu li {
  padding: 2px 6px;
  cursor: pointer;
}
[data-bloom-grid-version="0"] .grid-menu li.disabled {
  color: #888;
  pointer-events: none;
}
`;
