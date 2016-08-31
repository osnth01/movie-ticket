import React from 'react'
import expect from 'expect'
import ShowTimeList from '../../src/components/ShowTimeList'
import { mount } from 'enzyme'

function setup() {
  const component = mount(
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

    expect(h1.text()).toBe('Select Show Time')
  })
})