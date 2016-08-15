import React from 'react'
import expect from 'expect'
import ShowTimeList from '../../src/components/ShowTimeList'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(
    <ShowTimeList />
  )

  return {
    component,
    h1: component.find('h1')
  }
}

describe('ShowTimeList component', () => {
  it('should render "Select Show Time"', () => {
    const { h1 } = setup()

    expect(h1.text()).toEqual('Select Show Time')
  })
})