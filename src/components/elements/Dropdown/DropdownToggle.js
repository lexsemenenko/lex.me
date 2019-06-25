import React, { useContext } from 'react';
import { contextDropdown } from './Dropdown';

const DropdownToggle = ({ children, classes }) => {
  const [state, dispatch] = useContext(contextDropdown);

  return (
    <button
      className={classes}
      type="button"
      onClick={() => {
        dispatch({
          type: 'TOGGLE',
          newState: state.isActive ? { isActive: false } : { isActive: true }
        });
      }}
    >
      {children}
    </button>
  );
};

export default DropdownToggle;
