const rocket = document.querySelector('.fa-rocket');

rocket.addEventListener('mousedown', start);
rocket.addEventListener('mouseup', end);
rocket.addEventListener('mouseleave', end);
rocket.addEventListener('mousemove', move);

let isDragging = false,
  x = 0,
  y = 0,
  animationID = 0;

function start() {
  isDragging = true;
  animationID = requestAnimationFrame(animate);
  rocket.classList.toggle('grabbing');
}

function end() {
  cancelAnimationFrame(animationID);
  isDragging = false;
  rocket.classList.toggle('grabbing');
}

function move(event) {
  if (isDragging) {
    setPosition(event);
  }
}

function setPosition(event) {
  x = event.pageX - 50;
  y = event.pageY - 50;
}

function animate() {
  moveRocket();

  if (isDragging) {
    requestAnimationFrame(animate)
  }
}

function moveRocket() {
  rocket.style.transform = `translate(${x}px, ${y}px)`;
}