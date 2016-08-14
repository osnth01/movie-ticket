const initialState = []

const movieFilters = (state = initialState, action) => {
  switch(action.type) {
  case 'FILTER_MOVIE':
    if (action.value) {
      return state.concat([action.filter])
    }

    return state.filter( e => e !== action.filter )
  }
  return state
}

export default movieFilters