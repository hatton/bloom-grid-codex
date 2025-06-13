export function createGrabHandle(): HTMLDivElement {
  const handle = document.createElement('div');
  handle.className = 'grab-handle';
  handle.textContent = '\u2807\u2807'; // simple placeholder
  return handle;
}
