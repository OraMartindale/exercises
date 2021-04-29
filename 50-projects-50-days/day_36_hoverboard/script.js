const container = document.getElementById('container');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple'];
const SQUARES = 500;

const setColor = element => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = element => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px black`;
};
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

