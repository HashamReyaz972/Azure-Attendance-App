import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './styles/base/_base.scss'
import {loginTeacher} from './actions/login'
import configurestore from './store/store'
const store = configurestore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
