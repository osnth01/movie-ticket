import expect from 'expect'
import { filterMovie } from '../../src/actions'

describe('filterMovie action', () => {
  it('should create a FILTER_MOVIE action', () => {
    const feature = 'IMAX'
    const value = true

    expect(
      filterMovie(feature, value)
    )
    .toEqual(
      {
        type: 'FILTER_MOVIE',
        feature,
        value
      }
    )
  })
})