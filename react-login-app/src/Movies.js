import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    })
    .then(response => setMovies(response.data.result))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Stars: {movie.stars}</p>
            <p>Language: {movie.language}</p>
            <p>Release Date: {movie.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
