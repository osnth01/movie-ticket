import React from 'react'
import expect from 'expect'
import Movie from '../../src/components/Movie'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    title: 'Movie 1',
    features: ['accessible']
  }

  const component = shallow(<Movie movie={props} />)

  return {
    component,
    link: component.find('Link'),
    h2: component.find('h2'),
    props
  }
}

describe('Movie component', () => {
  it('should render the title of the movie', () => {
    const { h2, props } = setup()

    expect(h2.text()).toBe(props.title)
  })

  it('should have a link', () => {
    const { link } = setup()

    expect(link.type().displayName).toBe('Link')
  })
})