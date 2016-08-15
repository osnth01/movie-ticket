import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Movie from './Movie'
import CheckBox from './CheckBox'

const MovieList = ({ movies, filters, filterMovies }) => {

  const contains = (features, filters) => {
    return filters.filter( f => !features.includes(f) ).length === 0
  }

  const movieFilter = (a, b) => {
    if (contains(a.features, filters) && !contains(b.features, filters)) {
      return -1
    } else if ((contains(a.features, filters) === contains(b.features, filters)) && (a.id < b.id)) {
      return -1
    }

    return 1
  }

  let sortedMovies = movies.slice(0).sort(movieFilter)

  return (
    <div>
      <h1>Playing Today</h1>

      <CheckBox filter={'accessible'} onClick={filterMovies} />
      <CheckBox filter={'IMAX'} onClick={filterMovies} />
      <CheckBox filter={'3D'} onClick={filterMovies} />

      {
        sortedMovies.map( (movie, i) => {
          return ( <Movie key={i} movie={movie} /> )
        } )
      }

      <Link to="show-times">Select Show Time</Link>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  filterMovies: PropTypes.func.isRequired
}

export default MovieList