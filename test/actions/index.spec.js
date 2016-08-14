import expect from 'expect'
import { filterMovies } from '../../src/actions'

describe('filterMovie action', () => {
  it('should create a FILTER_MOVIE action', () => {
    const filter = 'IMAX'
    const value = true

    expect(
      filterMovies(filter, value)
    )
    .toEqual(
      {
        type: 'FILTER_MOVIE',
        filter,
        value
      }
    )
  })
})