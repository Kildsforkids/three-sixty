import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogStore from './store/LogStore'
import CameraStore from './store/CameraStore';
import UserStore from './store/UserStore';
import ScheduleStore from './store/ScheduleStore'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    camera: new CameraStore(),
    logger: new LogStore(),
    schedule: new ScheduleStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
