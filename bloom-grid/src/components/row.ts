import type { RowData } from '../types';
import { renderCell } from './cell';

export function renderRow(row: RowData): HTMLDivElement {
  const rowEl = document.createElement('div');
  rowEl.className = 'row';
  rowEl.dataset.rowId = row.id;
  row.cells.forEach((cell) => {
    rowEl.appendChild(renderCell(cell));
  });
  return rowEl;
}
