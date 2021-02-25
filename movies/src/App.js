import './App.css';
import Movie from './components/Movie';
import movies from './movies';

function App() {
  return (
    <div className="App">
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}

export default App;
