export const toggleOpen = ({ color } = {}) => {
  return {
    type: 'TOGGLE_OPEN',
    color: color || 'pink'
  };
};
