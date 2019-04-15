const defaultStateUIelements = {
  dropdown: {
    menuMobile: {
      open: false,
      color: 'defaultColor'
    }
  },
  scrollpointHomeSectionActive: '',
  scrollpointHomeMenuSticky: []
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
    case 'SCROLLPOINT_HOME_SECTION_ACTIVE':
      return {
        ...state,
        scrollpointHomeSectionActive: action.scrollpointHomeSectionActive ? action.scrollpointHomeSectionActive : state.scrollpointHomeSectionActive
      };
    case 'SCROLLPOINT_HOME_MENU_STICKY':
      return {
        ...state,
        scrollpointHomeMenuSticky: action.scrollpointHomeMenuSticky ? action.scrollpointHomeMenuSticky : state.scrollpointHomeMenuSticky
      };
    default:
      return state;
  }
};

export default uiReducer;
