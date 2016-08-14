import expect from 'expect'
import movies from '../../src/reducers/movies'

function setup() {
  const initialState = []

  for (let i = 1; i <= 8; i++) {
    initialState.push({
      id: i,
      title: 'Movie ' + i.toString()
    })
  }

  return {
    initialState
  }
}

describe('movies reducer', () => {
  it('should have initial state', () => {
    const { initialState } = setup()

    expect(movies(undefined, {})).toEqual(initialState)
  })
})