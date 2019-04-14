import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/main.less';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { toggleOpen } from './actions/ui';
import _events from './js/core/core--events';

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState().ui);
// });
// console.log(store.getState().ui);

// store.subscribe(() => {
//   console.log(store.getState().projects, 'subscribe');
// });
// console.log(store.getState().projects, 'default');

class Wrapper extends Component {
  componentDidMount() {
    _events.emit('on:ReactReady');
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

$(document).ready(function() {
  $('#loader').remove();
  ReactDOM.render(<Wrapper />, document.getElementById('root'));
});
