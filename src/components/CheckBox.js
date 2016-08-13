import React, { PropTypes } from 'react'

const CheckBox = ({ feature, onClick }) => (
  <div>
    <label>{feature}</label>
    <input
      type="checkbox"
      onClick={ e => {
        onClick(feature, e.target.checked)
      } } />
  </div>
)


CheckBox.propTypes = {
  feature: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CheckBox