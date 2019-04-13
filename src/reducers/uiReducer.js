const defaultStateUIelements = {
  dropdown: {
    menuMobile: {
      open: false,
      color: 'defaultColor'
    }
  }
};

const uiReducer = (state = defaultStateUIelements, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN':
      // Return New State
      return {
        dropdown: {
          menuMobile: {
            open: !state.open,
            color: action.dropdown.menuMobile.color ? action.dropdown.menuMobile.color : state.dropdown.menuMobile.color
          }
        }
      };
    default:
      return state;
  }
};

export default uiReducer;
