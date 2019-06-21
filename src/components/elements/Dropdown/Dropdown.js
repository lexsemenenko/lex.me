import React, {createContext, useReducer, useEffect} from 'react'
import classNames from 'classnames'
import DropdownToggle from './DropdownToggle'
import DropdownContent from './DropdownContent'

// Create Context
export const contextDropdown = createContext({})

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return action.newState
    default:
      return state
  }
}

const StoreDropdown = props => {
  const {children, blockClass} = props

  const initialState = {
    isActive: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleClass = state.isActive ? 'open' : 'closed'
  const classesToggle = classNames('dropdown__toggle', toggleClass)
  const classesContnet = classNames('dropdown__content', toggleClass)

  return (
    <contextDropdown.Provider value={[state, dispatch]}>
      <div className="dropdown">
        {children.map((item, i) => {
          if (i === 0) {
            return (
              <DropdownToggle classes={classesToggle}>
                {item.props.children}
              </DropdownToggle>
            )
          }
          if (i === 1) {
            return (
              <DropdownContent classes={classesContnet}>
                {item.props.children}
              </DropdownContent>
            )
          }
        })}
      </div>
    </contextDropdown.Provider>
  )
}

export default StoreDropdown
