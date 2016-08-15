import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import movies from './reducers'
import MovieList from './containers/MovieListContainer'
import ShowTimeList from './components/ShowTimeList'

let store = createStore(
  combineReducers({
    movies,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(hashHistory, store)

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={MovieList} />
      <Route path="/show-times" component={ShowTimeList} />
    </Router>
  </Provider>,
  target
)
