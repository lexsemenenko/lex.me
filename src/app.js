import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less';
import AppRouter from './routers/AppRouter';

const Wrapper = () => {
  return <AppRouter />;
};

$(document).ready(function() {
  $('#loader').remove();
  ReactDOM.render(<Wrapper />, document.getElementById('root'));
});
