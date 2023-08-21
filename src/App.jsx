import React from "react";
import "./App.scss";
import SearchBox from "./SearchBox";
import MovieList from "./MovieList";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = (data) => {
    setMovies(data);
  };

  return (
    <div className="app">
      <h1>Movie Recommendations</h1>
      <SearchBox onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
