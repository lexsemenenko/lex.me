import React, {useContext} from 'react'
import {contextDropdown} from './Dropdown'

const DropdownToggle = props => {
  const {children, classes} = props

  const [state, dispatch] = useContext(contextDropdown)

  const toggle = () => {
    if (!state.isActive) {
      dispatch({
        type: 'TOGGLE',
        newState: {isActive: true},
      })
    } else {
      dispatch({
        type: 'TOGGLE',
        newState: {isActive: false},
      })
    }
  }

  return (
    <button
      className={classes}
      type="button"
      onClick={e => {
        toggle()
      }}
    >
      {children}
    </button>
  )
}

export default DropdownToggle
