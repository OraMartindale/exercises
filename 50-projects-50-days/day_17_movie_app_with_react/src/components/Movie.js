import './Movie.css';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ movie }) => {
  const { title, poster_path, vote_average, overview } = movie;

  const getClassByRate = vote => {
    if (vote >= 8)
      return 'green';

    if (vote >= 5)
      return 'orange';

    return 'red';
  };

  const concatImagePoster = poster_path => {
    return `${IMAGE_PATH}${poster_path}`;
  };

  return (
    <div className="movie">
      <img src={concatImagePoster(poster_path)} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getClassByRate(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
