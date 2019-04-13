import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { toggleOpen } from './actions/ui';

const store = configureStore();

// store.dispatch(toggleOpen({ color: 'white' }));
// console.log(store.getState().ui);
// store.subscribe(() => {
//   console.log(store.getState().ui);
// });

const jsx = (
  // Provide strore component to any nested components
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

$(document).ready(function() {
  $('#loader').remove();
  ReactDOM.render(jsx, document.getElementById('root'));
});
