import React from 'react'
import expect from 'expect'
import CheckBox from '../../src/components/CheckBox'
import { mount } from 'enzyme'

function setup() {
  const actions = {
    onClick: expect.createSpy()
  }

  const feature = 'IMAX'

  const component = mount(
    <CheckBox
      onClick={actions.onClick}
      feature={feature} />
    )

  return {
    component,
    feature,
    actions,
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
    const { label, feature } = setup()

    expect(label.text()).toBe(feature)
  })

  it('should call onClick', () => {
    const { input, actions } = setup()

    input.simulate('click')
    expect(actions.onClick).toHaveBeenCalled()
  })
})