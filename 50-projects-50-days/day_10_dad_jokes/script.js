const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      jokeElement.innerHTML = data.joke;
    });
};

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
