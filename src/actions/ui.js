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

export const setActiveSpHome = id => {
  return {
    type: 'SET_ACTIVE_SP_HOME',
    scrollpoint: {
      homepageSectionActive: id
    }
  };
};
