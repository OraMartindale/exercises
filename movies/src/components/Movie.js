import React from 'react';
import Cast from './Cast';
import './Movie.css';

const Movie = ({ movie }) => {
  const { poster, title, rating, year, genre, length, trailer, imdb_score, rotten_tomato_score, meta_critic_score, description } = movie;
  return (
    <div className="movie">
      <div className="movie_header">
        <img src={poster} className="movie_poster" />
        <div className="movie_metadata">
          <h1>{title}</h1>
          <ul>
            <li className="rating">{rating}</li>
            <li>{year}</li>
            <li>{genre}</li>
            <li>{length}</li>
          </ul>
        </div>
      </div>

      <iframe src={trailer} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <ul className="movie_scores">
        <li className="imdb_score">{imdb_score}</li>
        <li className="rotten_tomato_score">{rotten_tomato_score}%</li>
        <li className="meta_critic_score">{meta_critic_score}%</li>
      </ul>
      
      <p className="movie_description">{description}</p>

      <div className="movie_buttons">
        <button className="watch_now">
          <div className="movie_buttons_action">
            <img src="https://www.gstatic.com/kpui/watch/hulu_40x40.png" />
          </div>
          Watch Now
        </button>
        <button className="watched_it">
          <div className="movie_buttons_action">
            <i class="fas fa-check"></i>
          </div>
          Watched it?
        </button>
        <button className="watchlist">
          <div className="movie_buttons_action">
            <i class="far fa-bookmark"></i>
          </div>
          Watchlist
        </button>
      </div>

      <Cast />
    </div>
  );
};

export default Movie;
