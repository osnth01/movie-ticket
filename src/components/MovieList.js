import React from 'react'
import Movie from './Movie'
import CheckBox from './CheckBox'

const MovieList = ({ movies }) => (
  <div>
    <h1>Playing Today</h1>

    <CheckBox />
    <CheckBox />
    <CheckBox />

    {
      movies.map( movie => {
        return ( <Movie movie={movie} /> )
      } )
    }
  </div>
)

export default MovieList