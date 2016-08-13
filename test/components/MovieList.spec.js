import React from 'react'
import expect from 'expect'
import MovieList from '../../src/components/MovieList'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<MovieList />)

  return {
    component
  }
}

describe('MovieList component', () => {
  it('should render "Playing Today"', () => {
    const { component } = setup()

    expect(component.text()).toEqual('Playing Today')
  })
})