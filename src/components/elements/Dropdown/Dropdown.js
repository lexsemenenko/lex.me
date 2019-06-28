import React, {createContext, useReducer} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DropdownToggle from './DropdownToggle';
import DropdownContent from './DropdownContent';

// Create Context
export const contextDropdown = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return action.newState;
    default:
      return state;
  }
}

const Dropdown = ({children, blockClass}) => {
  const initialState = {
    isActive: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleClass = state.isActive ? 'open' : 'closed';

  return (
    <contextDropdown.Provider value={[state, dispatch]}>
      <div className={classNames(blockClass, toggleClass)}>
        {children.map((item, i) => {
          const uniqueKey = `key${i}`;
          if (i === 0) {
            return (
              <DropdownToggle
                classes={classNames(`${blockClass}__toggle`, toggleClass)}
                key={uniqueKey}
              >
                {item.props.children}
              </DropdownToggle>
            );
          }
          if (i === 1) {
            return (
              <DropdownContent
                key={uniqueKey}
                classes={classNames(`${blockClass}__content`, toggleClass)}
              >
                {item.props.children}
              </DropdownContent>
            );
          }
        })}
      </div>
    </contextDropdown.Provider>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  blockClass: PropTypes.string
};

Dropdown.defaultProps = {
  children: null,
  blockClass: 'collapsible'
};

export default Dropdown;
