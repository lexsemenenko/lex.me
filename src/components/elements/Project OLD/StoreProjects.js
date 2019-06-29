import React, {createContext, useReducer} from 'react';
import projectsData from './projectsData.json';

export const contextProjects = createContext({});

// Add active properties to each project
const initialState = projectsData.map(item => {
  const newObj = Object.assign({}, item);
  newObj.isActive = false;
  return newObj;
});

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'OPEN_PROJECT':
      return action.newState;
    case 'CLOSE_ALL_PROJECTS':
      return action.newState;
    default:
      return state;
  }
}

const StoreProjects = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contextProjects.Provider value={[state, dispatch]}>
      {children}
    </contextProjects.Provider>
  );
};

export default StoreProjects;
