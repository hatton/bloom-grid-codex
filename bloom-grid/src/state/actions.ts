import { v4 as uuid } from 'uuid';
import type { GridState, RowData, ColumnData } from '../types';

export function addRow(state: GridState): GridState {
  const newRow: RowData = {
    id: uuid(),
    heightMode: 'Auto',
    cells: state.columns.map(() => ({
      id: uuid(),
      type: 'Text',
      content: '',
    })),
  };
  return {
    ...state,
    rows: [...state.rows, newRow],
  };
}

export function addColumn(state: GridState): GridState {
  const newColumn: ColumnData = {
    id: uuid(),
    widthMode: 'Auto',
  };
  return {
    ...state,
    columns: [...state.columns, newColumn],
    rows: state.rows.map((row) => ({
      ...row,
      cells: [...row.cells, { id: uuid(), type: 'Text', content: '' }],
    })),
  };
}
