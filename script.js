const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.body;

btn.addEventListener("click", () => {
  const r = randomNumbers()[0];
  const g = randomNumbers()[1];
  const b = randomNumbers()[2];
  const color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
  h1.textContent = color;
});

function randomNumbers() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return [r, g, b];
}
