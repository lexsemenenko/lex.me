const defaultStateUIelements = {
  dropdown: {
    menuMobile: {
      open: false,
      color: 'defaultColor'
    }
  },
  scrollpoint: {
    homepageSectionActive: ''
  }
};

const uiReducer = (state = defaultStateUIelements, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN':
      // Return New State
      return {
        ...state,
        dropdown: {
          menuMobile: {
            open: !state.dropdown.menuMobile.open,
            color: action.dropdown.menuMobile.color ? action.dropdown.menuMobile.color : state.dropdown.menuMobile.color
          }
        }
      };
    case 'SET_ACTIVE_SP_HOME':
      return {
        ...state,
        scrollpoint: {
          homepageSectionActive: action.scrollpoint.homepageSectionActive
        }
      };
    default:
      return state;
  }
};

export default uiReducer;
