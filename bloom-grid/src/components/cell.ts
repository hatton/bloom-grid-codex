import type { CellData } from '../types';

export function renderCell(cell: CellData): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'cell';
  div.dataset.cellId = cell.id;
  if (cell.type === 'Text' || cell.type === 'Button') {
    div.contentEditable = 'true';
    div.textContent = cell.content;
  } else {
    div.textContent = cell.type;
  }
  return div;
}
