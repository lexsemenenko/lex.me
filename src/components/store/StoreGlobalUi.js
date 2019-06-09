import React, {createContext, useReducer} from 'react'

// Adding toggle properies to the object

export const contextGlobalUi = createContext({})

const initialState = {
  modalOpen: false,
  breakpoint: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.newState
    default:
      return state
  }
}

const StoreGlobalUi = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <contextGlobalUi.Provider value={[state, dispatch]}>
      {children}
    </contextGlobalUi.Provider>
  )
}

export default StoreGlobalUi
