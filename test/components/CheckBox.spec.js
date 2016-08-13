import React from 'react'
import expect from 'expect'
import CheckBox from '../../src/components/CheckBox'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<CheckBox />)

  return {
    component
  }
}

describe('CheckBox component', () => {
  it('should render a checkbox', () => {
    const { component } = setup()

    expect(component.type()).toBe('input')
    expect(component.props().type).toBe('checkbox')
  })
})