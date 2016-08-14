import expect from 'expect'
import movieFilters from '../../src/reducers/movieFilters'

function setup() {
  const initialState = []

  return {
    initialState
  }
}

describe('movieFilters reducer', () => {
  it('should have initial state', () => {
    const { initialState } = setup()

    expect(movieFilters(undefined, {})).toEqual(initialState)
  })

  it('should add a filter', () => {
    const filters = []

    const action = {
      type: 'FILTER_MOVIE',
      filter: 'IMAX',
      value: true
    }

    const newFilterState = movieFilters(filters, action)

    expect(newFilterState).toEqual(['IMAX'])
  })

  it('should remove a filter', () => {
    const filters = ['IMAX']

    const action = {
      type: 'FILTER_MOVIE',
      filter: 'IMAX',
      value: false
    }

    const newFilterState = movieFilters(filters, action)

    expect(newFilterState).toEqual([])
  })
})