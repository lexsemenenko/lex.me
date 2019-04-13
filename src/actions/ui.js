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
