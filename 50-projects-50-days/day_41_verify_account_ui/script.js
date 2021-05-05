const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', event => {
    const key = event.key;
    if (key >= 0 && key <= 9) {
      codes[index].value = '';
      if (index < codes.length - 1) {
        setTimeout(() => codes[index + 1].focus(), 10);
      }
    } else if (key === 'Backspace') {
      if (index > 0) {
        setTimeout(() => codes[index - 1].focus(), 10);
      }
    }
  });
});