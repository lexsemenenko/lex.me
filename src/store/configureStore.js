import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projectsReducer';

export default () => {
  // 5. Create Action Dynamic Action Generators. They simply return action objects
  // const toggleOpen = ({ setColor } = {}) => ({
  //   type: 'TOGGLE_OPEN',
  //   setColor: setColor || 'red'
  // });
  // const closeAll = () => ({
  //   type: 'CLOSE_ALL'
  // });

  const defaultStateUIelements = { open: false, color: 'transparent' };
  const defaultProjects = {};

  // 3. Create Reducer by making function with two params that is called in createStore
  // 4. Pass default store, and action (dispatch would use action)
  const uiReducer = (state = defaultStateUIelements, action) => {
    switch (action.type) {
      case 'TOGGLE_OPEN':
        // Return New State
        return {
          open: !state.open,
          color: action.color ? action.color : state.color
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
  };

  const projectsReducer = (state = defaultProjects, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  // 1. Create Store and return it. Not needed as we use comnine reducers later
  // 2. Pass your reducer fucntion
  // const store = createStore(uiReducer);
  // const store = createStore(projectsReducer);

  // 7. Comnine Reducers
  const store = createStore(
    combineReducers({
      ui: uiReducer,
      projects: projectsReducer
    })
  );

  // console.log(store.getState());
  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  // 6. Send action Generators to dispatch to update store
  // store.dispatch(toggleOpen());
  // store.dispatch(toggleOpen({ setColor: 'green' }));
  // store.dispatch(toggleOpen({ setColor: 'plum' }));
  // store.dispatch(closeAll());

  return store;
};
