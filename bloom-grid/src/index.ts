import type { GridState } from './types';
import { createDefaultState } from './core/grid';
import { GridInstance } from './core/instance';
import { bloomGridStyles } from './styles/main.css.ts';

const instanceMap = new WeakMap<HTMLDivElement, GridInstance>();

function injectStyles() {
  if (document.querySelector('style[data-bloom-grid]')) return;
  const style = document.createElement('style');
  style.dataset.bloomGrid = '0';
  style.textContent = bloomGridStyles;
  document.head.appendChild(style);
}

export function attach(rootDiv: HTMLDivElement, initialState?: GridState): void {
  if (rootDiv.dataset.bloomGridVersion === '0') {
    throw new Error('Grid already attached');
  }
  if (rootDiv.children.length > 0) {
    throw new Error('rootDiv must be empty');
  }
  injectStyles();
  rootDiv.dataset.bloomGridVersion = '0';
  const state = initialState ?? createDefaultState();
  const instance = new GridInstance(rootDiv, state);
  instanceMap.set(rootDiv, instance);
}

export function detach(rootDiv: HTMLDivElement): void {
  const instance = instanceMap.get(rootDiv);
  if (!instance) return;
  instance.destroy();
  instanceMap.delete(rootDiv);
  delete rootDiv.dataset.bloomGridVersion;
}
