import { combineReducers } from 'redux'
import movies from './movies'
import movieFilters from './movieFilters'

const rootReducer = combineReducers({
  movies,
  movieFilters
})

export default rootReducer