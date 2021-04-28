const imageContainer = document.getElementById('imgs');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const images = document.querySelectorAll('#imgs img');

let index = 0;
let interval;

const run = () => {
  index++;
  changeImage();
};

const changeImage = () => {
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  imageContainer.style.transform = `translateX(${-500 * index}px)`;
};

const resetInterval = () => {
  if (interval)
    clearInterval(interval);
  interval = setInterval(run, 1000);
};

previousButton.addEventListener('click', () => {
  index--;
  changeImage();
  resetInterval();
});
nextButton.addEventListener('click', () => {
  index++;
  changeImage();
  resetInterval();
});

resetInterval();
