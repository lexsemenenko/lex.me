import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projectsReducer';
import uiReducer from '../reducers/uiReducer';

export default () => {
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

  return store;
};
