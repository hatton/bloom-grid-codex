import { v4 as uuid } from 'uuid';
import type { GridState } from '../types';

export function createDefaultState(): GridState {
  const columns = [0, 1].map(() => ({ id: uuid(), widthMode: 'Auto' as const }));
  const rows = [0, 1].map(() => ({
    id: uuid(),
    heightMode: 'Auto' as const,
    cells: columns.map(() => ({ id: uuid(), type: 'Text' as const, content: '' })),
  }));

  return {
    columns,
    rows,
    borderStyle: 'Outline',
    borderColor: 'Black',
  };
}
