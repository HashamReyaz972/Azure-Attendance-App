 import React from 'react';
 import ReactDOM from 'react-dom';
 import AppRouter from './routers/AppRouter';
 import {Provider} from 'react-redux'
 import 'normalize.css/normalize.css';
 import './styles/styles.scss';
 import './styles/base/_base.scss'




const jsx = (
  <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
