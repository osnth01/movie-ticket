import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => (
  <div>
    <h1>Playing Today</h1>
    {
      movies.map( movie => {
        return ( <Movie movie={movie} /> )
      } )
    }
  </div>
)

export default MovieList