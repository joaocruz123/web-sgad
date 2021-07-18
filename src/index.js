import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoadingComponent from './components/Loading/LoadingComponent';

ReactDOM.render(
    // <LoadingComponent></LoadingComponent>
    <App></App>
,
  document.getElementById('root')
);
