import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieShape } from '../MovieShape/MovieShape';

export const MoviesList = props => (
  <div className="movies">
    {props.movies.map(movie => <MovieCard {...movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};
