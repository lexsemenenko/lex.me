import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projectsReducer';

// Create store create store arguments:
//   createStore(reducer, [preloadedState], [enhancer])
//   returns Store An object that holds the complete state of your app
export default () => {
  const toggleOpen = ({ setColor } = {}) => ({
    type: 'TOGGLE_OPEN',
    setColor: setColor || 'red'
  });

  const store = createStore((state = { open: false, color: 'transparent' }, action) => {
    switch (action.type) {
      case 'TOGGLE_OPEN':
        // Return New State
        return {
          open: (state.open = true),
          color: action.setColor
        };
      case 'CLOSE_ALL':
        return {
          open: (state.open = false),
          color: 'back to default red'
        };
      // If no action, return as is
      default:
        return state;
    }
    return state;
  });

  store.subscribe(() => {
    console.log(store.getState());
  });

  // store.dispatch({
  //   type: 'TOGGLE_OPEN'
  // });

  store.dispatch(toggleOpen());
  store.dispatch(toggleOpen({ setColor: 'green' }));
  store.dispatch(toggleOpen({ setColor: 'plum' }));

  store.dispatch({
    type: 'CLOSE_ALL'
  });

  return store;
};
