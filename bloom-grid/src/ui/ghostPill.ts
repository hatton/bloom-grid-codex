export function createGhostPill(): HTMLDivElement {
  const pill = document.createElement('div');
  pill.className = 'ghost-pill';
  pill.tabIndex = 0;
  pill.textContent = '+';
  return pill;
}
