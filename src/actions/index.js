export const filterMovie = (feature, value) => {
  return {
    type: 'FILTER_MOVIE',
    feature,
    value
  }
}