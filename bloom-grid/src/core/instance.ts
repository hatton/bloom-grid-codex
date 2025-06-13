import type { GridState } from '../types';
import { renderRow } from '../components/row';
import { applyColumnStyles } from '../components/column';
import { clearElement } from '../utils/dom';
import { UndoRedoHistory } from '../state/history';

export class GridInstance {
  state: GridState;
  root: HTMLDivElement;
  history = new UndoRedoHistory();

  constructor(root: HTMLDivElement, initialState: GridState) {
    this.root = root;
    this.state = initialState;
    this.render();
  }

  setState(newState: GridState) {
    this.history.push(this.state);
    this.state = newState;
    this.render();
  }

  render() {
    clearElement(this.root);
    this.root.classList.add('bloom-grid');
    const body = document.createElement('div');
    body.className = 'body';

    // apply column styles via first row
    this.state.rows.forEach((row) => {
      const rowEl = renderRow(row);
      Array.from(rowEl.children).forEach((cellEl, idx) => {
        applyColumnStyles(cellEl as HTMLDivElement, this.state.columns[idx]);
      });
      body.appendChild(rowEl);
    });

    this.root.appendChild(body);
  }

  destroy() {
    clearElement(this.root);
    this.root.classList.remove('bloom-grid');
  }
}
