export const bloomGridStyles = `
[data-bloom-grid-version="0"] {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
[data-bloom-grid-version="0"] .row {
  display: flex;
}
[data-bloom-grid-version="0"] .cell {
  flex: 1;
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
