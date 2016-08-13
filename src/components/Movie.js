import React, { PropTypes } from 'react'

const Movie = ({ movie }) => (
  <h2>{movie.title}</h2>
)

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie