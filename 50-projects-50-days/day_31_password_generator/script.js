const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

clipboardElement.addEventListener('click', () => {
  const password = resultElement.innerText;
  if (!password) return;

  const textarea = document.createElement('textarea');
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});

generateElement.addEventListener('click', () => {
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let password = '';
  const typesCount = lower + upper + number + symbol;
  const types = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i+=typesCount) {
    types.forEach(type => {
      const key = Object.keys(type)[0];
      password += randomFunc[key]();
    });
  }

  return password.slice(0, length);
}

const getRandomLowercaseLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getRandomUppercaseLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLowercaseLetter,
  upper: getRandomUppercaseLetter,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
