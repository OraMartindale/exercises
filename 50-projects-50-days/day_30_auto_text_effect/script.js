const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';

let index = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener('input', () => {
  speed = 300 / speedEl.value;
});

const writeText = () => {
  textEl.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
};

writeText();
