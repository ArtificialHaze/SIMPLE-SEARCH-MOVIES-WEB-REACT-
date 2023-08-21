import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <a className="movie-card" href={movie.url}>
      <h2 className="movie-title">{movie.title}</h2>
      <img src={movie.poster_path} className="movie-img" alt="Movie Poster" />
      <p className="movie-release_date">{movie.release_date}</p>
      <p className="movie-popularity">{movie.popularity}</p>
      <p className="movie-vote_average">{movie.vote_average}</p>
      <p className="movie-vote_count">{movie.vote_count}</p>
    </a>
  );
};

export default MovieCard;
