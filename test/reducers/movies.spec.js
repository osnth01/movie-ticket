import expect from 'expect'
import movies from '../../src/reducers/movies'

function setup() {
  const initialState = []

  for (let i = 1; i <= 16; i++) {
    let movie = {
      id: i,
      title: 'Movie ' + i.toString(),
      features: [
        'accessible'
      ]
    }

    if (i >= 11 && i <= 12) {
      movie.features.push('IMAX')
    }

    if (i >= 13 && i <= 14) {
      movie.features.push('3D')
    }

    if (i > 14) {
      movie.features.push('IMAX')
      movie.features.push('3D')
    }

    initialState.push(movie)
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