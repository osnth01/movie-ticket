import { connect } from 'react-redux'
import MovieList from '../components/MovieList'

function mapStateToProps(state) {
  return {
    movies: state
  }
}

export default connect(
  mapStateToProps
)(MovieList)