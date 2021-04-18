const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timesClicked = 0;

const createHeart = event => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  heart.style.top = `${event.clientY - event.target.offsetTop}px`;
  heart.style.left = `${event.clientX - event.target.offsetLeft}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener('dblclick', createHeart);
