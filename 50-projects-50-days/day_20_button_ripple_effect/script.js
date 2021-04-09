const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    const xInsideButton = event.clientX - event.target.offsetLeft;
    const yInsideButton = event.clientY - event.target.offsetTop;
    
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInsideButton}px`;
    circle.style.left = `${xInsideButton}px`;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
