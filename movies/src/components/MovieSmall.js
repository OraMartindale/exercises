import React from 'react';
import './MovieSmall.css';

const Movie = ({ movie }) => {
  const { poster, title, rating, year, length } = movie;
  return (
    <div className="movie">
      <img src={poster} className="movie_poster" />
      <div className="movie_metadata">
        <p className="movie_title">{title}</p>
        <div className="movie_rating_and_length">
          <p className="movie_rating">&nbsp;{rating}&nbsp;</p>
          <p>{length}</p>
        </div>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Movie;
