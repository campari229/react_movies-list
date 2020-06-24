import PropTypes from 'prop-types';

export const MovieShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
});
