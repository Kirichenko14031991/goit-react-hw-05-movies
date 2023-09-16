import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies?.map(({ id, title, name }) => {
        return (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </MovieLink>
          </MovieItem>
        );
      })}
    </ul>
  );
};

export default MovieList;
