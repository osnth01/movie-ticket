import React from 'react'
import expect from 'expect'
import MovieList from '../../src/components/MovieList'
import { mount } from 'enzyme'

function setup(initialState) {
  const props = {
    movies: [],
    filters: []
  }

  const actions = {
    filterMovies: expect.createSpy()
  }

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

    props.movies.push(movie)
  }

  Object.assign(props, initialState)

  const component = mount(
    <MovieList
      movies={props.movies}
      filters={props.filters}
      filterMovies={actions.filterMovies} />
    )

  return {
    component,
    props,
    actions,
    h1: component.find('h1'),
    checkboxes: component.find('CheckBox'),
    movies: component.find('Movie')
  }
}

describe('MovieList component', () => {
  it('should render "Playing Today"', () => {
    const { h1 } = setup()

    expect(h1.text()).toBe('Playing Today')
  })

  it('should render the number of movies given', () => {
    const { component, props, movies } = setup()

    expect(movies.length).toEqual(props.movies.length)
  })

  it('should render three CheckBox components', () => {
    const { checkboxes } = setup()

    expect(checkboxes.length).toEqual(3)
  })

  describe('movie filters', () => {
    it('should sort the movies by id when no filter is given', () => {
      const { movies, component, props } = setup()

      expect(movies.at(0).find('h2').text()).toBe(props.movies[0].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[15].title)
    })

    it('should sort the movies by accessible', () => {
      const { movies, props } = setup({
        filters: ['accessible']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[0].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[15].title)
    })

    it('should sort the movies by IMAX', () => {
      const { movies, props } = setup({
        filters: ['IMAX']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[10].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[13].title)
    })

    it('should sort the movies by 3D', () => {
      const { movies, props } = setup({
        filters: ['3D']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[12].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[11].title)
    })

    it('should sort the movies by accessible and IMAX', () => {
      const { movies, props } = setup({
        filters: ['accessible', 'IMAX']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[10].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[13].title)
    })

    it('should sort the movies by accessible and 3D', () => {
      const { movies, props } = setup({
        filters: ['accessible', '3D']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[12].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[11].title)
    })

    it('should sort the movies by IMAX and 3D', () => {
      const { movies, props } = setup({
        filters: ['IMAX', '3D']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[14].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[13].title)
    })

    it('should sort the movies by accessible, IMAX, and 3D', () => {
      const { movies, props } = setup({
        filters: ['accessible', 'IMAX', '3D']
      })

      expect(movies.at(0).find('h2').text()).toBe(props.movies[14].title)
      expect(movies.at(15).find('h2').text()).toBe(props.movies[13].title)
    })
  })
})