import React, { PropTypes } from 'react'

const CheckBox = ({ filter, onClick }) => (
  <div>
    <label>{filter}</label>
    <input
      type="checkbox"
      onClick={ e => {
        onClick(filter, e.target.checked)
      } } />
  </div>
)


CheckBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CheckBox