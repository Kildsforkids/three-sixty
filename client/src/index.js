import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CameraStore from './store/CameraStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    camera: new CameraStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
