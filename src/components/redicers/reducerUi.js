const reducerUi = (state, action) => {
  switch (action.type) {
    case 'GET_SCROLLPOINTS_SECTIONS':
      return action.getScrollPontsSections;
    default:
      return state;
  }
};

export { reducerUi as default };
