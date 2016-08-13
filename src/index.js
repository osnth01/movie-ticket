import React from 'react'
import { render } from 'react-dom'
import movies from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MovieList from './containers/MovieListContainer'

let store = createStore(movies)

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <MovieList />
  </Provider>,
  target
)
