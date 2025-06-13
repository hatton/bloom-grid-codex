
import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export function createButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps): HTMLButtonElement {
  const btn = document.createElement('button');
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.type = 'button';
  btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');
  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }
  btn.textContent = label;
  Object.assign(btn, props);
  return btn;
}
