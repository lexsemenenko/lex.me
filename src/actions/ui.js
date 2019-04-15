export const toggleOpen = ({ color } = {}) => {
  return {
    type: 'TOGGLE_OPEN',
    dropdown: {
      menuMobile: {
        color: color || 'pink'
      }
    }
  };
};

export const scrollpointHomeSectionActive = data => {
  return {
    type: 'SCROLLPOINT_HOME_SECTION_ACTIVE',
    scrollpointHomeSectionActive: data
  };
};

export const homeMenuSticky = bool => {
  return {
    type: 'SCROLLPOINT_HOME_MENU_STICKY',
    scrollpointHomeMenuSticky: bool
  };
};
