const loadingPercentText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let loadingPercent = 0;

const blurring = () => {
  loadingPercent++;

  if (loadingPercent > 99) {
    clearInterval(interval);
  }

  loadingPercentText.innerText = `${loadingPercent}%`;
  loadingPercentText.style.opacity = scale(loadingPercent, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loadingPercent, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(blurring, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}