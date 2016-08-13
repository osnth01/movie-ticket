import React from 'react'
import expect from 'expect'
import CheckBox from '../../src/components/CheckBox'
import { shallow } from 'enzyme'

function setup() {
  const props = {
    feature: 'IMAX'
  }

  const component = shallow(<CheckBox feature={props.feature} />)

  return {
    component,
    props,
    label: component.find('label'),
    input: component.find('input')
  }
}

describe('CheckBox component', () => {
  it('should render a checkbox', () => {
    const { input } = setup()

    expect(input.type()).toBe('input')
    expect(input.props().type).toBe('checkbox')
  })

  it('should render the correct label', () => {
    const { label, props } = setup()

    expect(label.text()).toBe(props.feature)
  })
})