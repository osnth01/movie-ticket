import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import movies from './reducers'
import MovieList from './containers/MovieListContainer'
import ShowTimeList from './components/ShowTimeList'

let store = createStore(movies)

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <MovieList />
  </Provider>,
  target
)
