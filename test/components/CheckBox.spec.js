import React from 'react'
import expect from 'expect'
import CheckBox from '../../src/components/CheckBox'
import { mount } from 'enzyme'

function setup() {
  const actions = {
    onClick: expect.createSpy()
  }

  const filter = 'IMAX'

  const component = mount(
    <CheckBox
      onClick={actions.onClick}
      filter={filter} />
    )

  return {
    component,
    filter,
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
    const { label, filter } = setup()

    expect(label.text()).toBe(filter)
  })

  it('should call onClick', () => {
    const { input, actions } = setup()

    input.simulate('click')
    expect(actions.onClick).toHaveBeenCalled()
  })
})