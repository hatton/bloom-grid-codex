import { createHeader } from './Header';
import './page.css';

type User = { name: string };

export function createPage(user?: User): HTMLElement {
  const article = document.createElement('article');
  article.appendChild(
    createHeader({
      user,
      onLogin: () => console.log('login'),
      onLogout: () => console.log('logout'),
      onCreateAccount: () => console.log('create account'),
    })
  );
  const section = document.createElement('section');
  section.className = 'storybook-page';
  section.innerHTML = `
    <h2>Pages in Storybook</h2>
    <p>We recommend building UIs with a <strong>component-driven</strong> process.</p>
  `;
  article.appendChild(section);
  return article;
}
