const initialState = []

for (let i = 1; i <= 8; i++) {
  initialState.push({
    id: i,
    title: 'Movie ' + i.toString()
  })
}

const movies = (state = initialState, action) => {
  return state
}

export default movies