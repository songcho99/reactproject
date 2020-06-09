import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Ex01_Counter';
import Ex02_Info from './Ex02_Info';
import Ex03_ArrayFunc from './Ex03_ArrayFunc';
import Ex04_Material from './Ex04_Material';
import Ex05_SimpleMenu from './Ex05_SimpleMenu';
import Example from './Example';

ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
