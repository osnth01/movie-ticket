export const filterMovie = (filter, value) => {
  return {
    type: 'FILTER_MOVIE',
    filter,
    value
  }
}