import React, { PropTypes } from 'react'

const Movie = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <ul>
      { 
        movie.features.map( (feature, i) => {
          return (<li key={i}>{feature}</li>)
        } )
      }
    </ul>
  </div>
)

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie