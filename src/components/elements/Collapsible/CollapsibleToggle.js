import React from 'react';

const CollapsibleToggle = ({children, id, toggle}) => {
  return (
    <button
      className="collapsible__toggle"
      type="button"
      onClick={e => {
        toggle(id);
      }}
    >
      {children}
    </button>
  );
};

export default CollapsibleToggle;
