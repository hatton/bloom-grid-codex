import type { ColumnData } from '../types';

export function applyColumnStyles(el: HTMLDivElement, column: ColumnData) {
  if (column.widthMode === 'Manual' && column.width) {
    el.style.width = `${column.width}%`;
  } else {
    el.style.width = 'auto';
    el.style.minWidth = '30px';
  }
}
