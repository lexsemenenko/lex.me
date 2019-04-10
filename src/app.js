/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/main.less';

// Pages
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
