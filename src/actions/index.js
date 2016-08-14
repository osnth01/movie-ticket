export const filterMovies = (filter, value) => {
  return {
    type: 'FILTER_MOVIE',
    filter,
    value
  }
}