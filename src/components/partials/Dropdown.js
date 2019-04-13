import React from 'react';
import { connect } from 'react-redux';
import { toggleOpen } from '../../actions/ui';

const Collapsible = ({ ui, dispatch }) => {
  const { open } = ui;
  return (
    <div className="dropdown" data-collapsible={`open: ${open}`}>
      <button
        type="button"
        className="dropdown__toggle"
        onClick={() => {
          dispatch(toggleOpen({ color: 'plum' }));
        }}
        data-collapsible={`open: ${open}`}
      >
        Toggle
      </button>
      <div className="dropdown__content" data-collapsible={`open: ${open}`}>
        Dropdown Content
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ui: state.ui.dropdown.menuMobile
  };
};

export default connect(mapStateToProps)(Collapsible);
