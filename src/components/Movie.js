import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Movie = ({ movie }) => (
  <div>
    <Link to="show-times">
      <h2>{movie.title}</h2>
      <ul>
        { 
          movie.features.map( (feature, i) => {
            return (<li key={i}>{feature}</li>)
          } )
        }
      </ul>
    </Link>
  </div>
)

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie