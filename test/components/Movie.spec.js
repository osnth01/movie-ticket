import React from 'react'
import expect from 'expect'
import Movie from '../../src/components/Movie'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    title: 'Movie 1'
  }

  const component = shallow(<Movie movie={props} />)

  return {
    component,
    props
  }
}

describe('Movie component', () => {
  it('should render the title of the movie', () => {
    const { component, props } = setup()

    expect(component.text()).toEqual(props.title)
  })
})