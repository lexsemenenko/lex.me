import React, {createContext, useReducer} from 'react'

export const contextProjects = createContext({})

const initialState = {test: 'test'}

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_PROJECT':
      return {projectOpen: true}
    default:
      return state
  }
}

const StoreProjects = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <contextProjects.Provider value={[state, dispatch]}>
      {children}
    </contextProjects.Provider>
  )
}

export default StoreProjects
