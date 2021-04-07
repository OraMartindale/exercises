const API_KEY = 'e450ee80db22442cea3dbf57282d2cf0';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});

const getMovies = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showMovies(data.results);
    });
};

const showMovies = movies => {
  main.innerHTML = '';

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="${IMAGE_PATH}${poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieElement);
  });
};

const getClassByRate = vote => {
  if (vote >= 8)
    return 'green';
  
  if (vote >= 5)
    return 'orange';
  
  return 'red';
};

getMovies(API_URL);

