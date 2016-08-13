import React from 'react'
import expect from 'expect'
import MovieList from '../../src/components/MovieList'
import { mount } from 'enzyme'

function setup() {
  const props = []

  for (let i = 1; i <= 8; i++) {
    props.push({
      id: i,
      title: 'Movie ' + i.toString()
    })
  }

  const component = mount(<MovieList movies={props}/>)

  return {
    component,
    props,
    h1: component.find('h1'),
    movies: component.find('Movie')
  }
}

describe('MovieList component', () => {
  it('should render "Playing Today"', () => {
    const { h1 } = setup()

    expect(h1.text()).toEqual('Playing Today')
  })

  it('should render the number of movies given', () => {
    const { component, props, movies } = setup()

    expect(movies.length).toEqual(props.length)
  })
})