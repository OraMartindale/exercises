const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeElement = document.getElementById('size');
const colorElement = document.getElementById('color');
const clearButton = document.getElementById('clear');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x, y;

colorElement.addEventListener('change', e => color = e.target.value);

increaseButton.addEventListener('click', () => {
  size = Math.min(50, size + 5);
  updateSizeOnScreen();
});

decreaseButton.addEventListener('click', () => {
  size = Math.max(5, size - 5);
  updateSizeOnScreen();
});

const updateSizeOnScreen = () => {
  sizeElement.innerHTML = size;
};

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
canvas.addEventListener('mousedown', e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', e => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (moveToX, moveToY, drawToX, drawToY) => {
  ctx.beginPath();
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(drawToX, drawToY);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
};

