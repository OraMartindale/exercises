const backgroundImage = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', event => {
  const input = event.target.value;
  const length = input.length;
  let blurValue = 20 - length * 2

  if (blurValue < 0)
    blurValue = 0;

  backgroundImage.style.filter = `blur(${blurValue}px)`;
});
