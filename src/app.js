import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less';
import AppRouter from './routers/AppRouter';

$(document).ready(function() {
  $('#loader').remove();
  ReactDOM.render(<AppRouter />, document.getElementById('root'));
});
