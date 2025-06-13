import type { GridInstance } from '../core/instance';
import type { BorderStyle, BorderColor } from '../types';

function createMenuItem(label: string, active: boolean, onClick: () => void): HTMLLIElement {
  const li = document.createElement('li');
  li.textContent = label;
  if (active) {
    li.classList.add('disabled');
  } else {
    li.addEventListener('click', onClick);
  }
  return li;
}

export function attachGlobalMenu(instance: GridInstance): void {
  const root = instance.root;
  if (!root.querySelector('.menu-icon')) {
    const icon = document.createElement('div');
    icon.className = 'menu-icon';
    root.appendChild(icon);

    icon.addEventListener('click', () => {
      const existing = root.querySelector('.grid-menu');
      if (existing) {
        existing.remove();
        return;
      }
      const menu = document.createElement('div');
      menu.className = 'grid-menu';

      const styleList = document.createElement('ul');
      styleList.appendChild(document.createElement('li')).textContent = 'Borders';
      (['None', 'Outline', 'All'] as BorderStyle[]).forEach((style) => {
        styleList.appendChild(
          createMenuItem(style, instance.state.borderStyle === style, () => {
            instance.setState({ ...instance.state, borderStyle: style });
            menu.remove();
          })
        );
      });
      const colorList = document.createElement('ul');
      colorList.appendChild(document.createElement('li')).textContent = 'Border Color';
      (['Black', 'Grey', 'None'] as BorderColor[]).forEach((color) => {
        colorList.appendChild(
          createMenuItem(color, instance.state.borderColor === color, () => {
            instance.setState({ ...instance.state, borderColor: color });
            menu.remove();
          })
        );
      });

      menu.appendChild(styleList);
      menu.appendChild(colorList);
      root.appendChild(menu);
    });
  }

  if (!root.dataset.menuListener) {
    root.addEventListener('mouseleave', () => {
      const existing = root.querySelector('.grid-menu');
      existing?.remove();
    });
    root.dataset.menuListener = '1';
  }
}
