import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UsersState from "./store/users/UsersState"

ReactDOM.render(
  <UsersState>
  <App /></UsersState>
  ,
  document.getElementById('root')
);

