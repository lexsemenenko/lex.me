import React, { createContext, useReducer, useEffect } from 'react';
import Collapsible from './Collapsible';

// Create Context
export const contextCollapsibles = createContext({});

function reducerCollapsibles(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return action.newState;
    default:
      return state;
  }
}

const StoreCollapsibles = props => {
  const { children, blockClass } = props;

  const initialState = children.map(({ props }, index) => {
    const { id } = props;
    return {
      id,
      isActive: false
    };
  });

  const [stateCollapsibles, dispatchCollapsibles] = useReducer(
    reducerCollapsibles,
    initialState
  );

  return (
    <contextCollapsibles.Provider
      value={[stateCollapsibles, dispatchCollapsibles]}
    >
      <Collapsible>{children}</Collapsible>
    </contextCollapsibles.Provider>
  );
};

export default StoreCollapsibles;
