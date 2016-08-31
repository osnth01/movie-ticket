import expect from 'expect'
import { seedMovies } from '../../src/seed'
import movies from '../../src/reducers/movies'

function setup() {
  const initialState = seedMovies

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