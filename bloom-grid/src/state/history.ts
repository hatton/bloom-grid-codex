import type { GridState } from '../types';

export class UndoRedoHistory {
  private undoStack: GridState[] = [];
  private redoStack: GridState[] = [];

  push(state: GridState) {
    this.undoStack.push(structuredClone(state));
    this.redoStack.length = 0;
  }

  undo(current: GridState): GridState | null {
    const prev = this.undoStack.pop();
    if (!prev) return null;
    this.redoStack.push(structuredClone(current));
    return prev;
  }

  redo(current: GridState): GridState | null {
    const next = this.redoStack.pop();
    if (!next) return null;
    this.undoStack.push(structuredClone(current));
    return next;
  }
}
