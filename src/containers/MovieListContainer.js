import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FilterActions from '../actions/'
import MovieList from '../components/MovieList'

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
    filters: state.movies.movieFilters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FilterActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)