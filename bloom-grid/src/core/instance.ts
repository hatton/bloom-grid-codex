import type { GridState } from '../types';
import { renderRow } from '../components/row';
import { clearElement } from '../utils/dom';
import { UndoRedoHistory } from '../state/history';
import { attachGlobalMenu } from '../ui/globalMenu';
import { createGhostPill } from '../ui/ghostPill';
import { addColumn } from '../state/actions';

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
    this.root.dataset.borderStyle = this.state.borderStyle;
    this.root.dataset.borderColor = this.state.borderColor;
    const body = document.createElement('div');
    body.className = 'body';

    this.root.style.setProperty('--col-count', String(this.state.columns.length));
    body.style.gridTemplateColumns = this.state.columns
      .map((col) =>
        col.widthMode === 'Manual' && col.width
          ? `${col.width}%`
          : 'minmax(30px, auto)'
      )
      .join(' ');
    body.style.gridTemplateRows = this.state.rows
      .map((row) =>
        row.heightMode === 'Manual' && row.height
          ? `${row.height}px`
          : 'minmax(24px, auto)'
      )
      .join(' ');

    this.state.rows.forEach((row) => {
      const rowEl = renderRow(row);
      body.appendChild(rowEl);
    });

    this.root.appendChild(body);

    const addBtn = createGhostPill();
    addBtn.style.position = 'absolute';
    addBtn.style.top = '-12px';
    addBtn.style.right = '0';
    addBtn.addEventListener('click', () => {
      this.setState(addColumn(this.state));
    });
    this.root.appendChild(addBtn);
    attachGlobalMenu(this);
  }

  destroy() {
    clearElement(this.root);
    this.root.classList.remove('bloom-grid');
  }
}
