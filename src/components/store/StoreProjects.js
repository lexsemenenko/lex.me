import React, {createContext, useReducer} from 'react'
import projectsData from '../../data/projectsData.json'

// Adding toggle properies to the object

export const contextProjects = createContext({})

// Add active properties to each project
const projectsDataWithActive = projectsData.map(item => {
  const newObj = Object.assign({}, item)
  newObj.isActive = false
  return newObj
})

const initialState = projectsDataWithActive

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
