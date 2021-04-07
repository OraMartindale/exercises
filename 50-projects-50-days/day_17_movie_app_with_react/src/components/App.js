import { useEffect, useState } from 'react';
import Movie from './Movie';
import './App.css';

const API_KEY = 'e450ee80db22442cea3dbf57282d2cf0';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      getMovies(API_URL);
    },
    []
  );

  const getMovies = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue && searchValue !== '') {
      getMovies(SEARCH_API + searchValue);
      setSearchValue('');
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchValue} onChange={handleChange} className="search" placeholder="Search" />
        </form>
      </header>

      <main>
        <MovieContainer movies={movies} />
      </main>
    </>
  );
};

const MovieContainer = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default App;
