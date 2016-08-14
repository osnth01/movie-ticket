import expect from 'expect'
import { filterMovie } from '../../src/actions'

describe('filterMovie action', () => {
  it('should create a FILTER_MOVIE action', () => {
    const filter = 'IMAX'
    const value = true

    expect(
      filterMovie(filter, value)
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