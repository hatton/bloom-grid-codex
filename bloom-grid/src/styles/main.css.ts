export const bloomGridStyles = `
[data-bloom-grid-version="0"] {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
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
`;
