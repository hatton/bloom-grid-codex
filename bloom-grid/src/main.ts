import './index.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <h1>Bloom Grid</h1>
  <div class="card">
    <button id="counter" type="button">count is 0</button>
  </div>
`;

const button = document.querySelector<HTMLButtonElement>('#counter')!;
let count = 0;
button.addEventListener('click', () => {
  count++;
  button.textContent = `count is ${count}`;
});
