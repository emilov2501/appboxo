import React from 'react'
import { Provider } from 'react-redux';
import store from '../../store';
import { App } from './App'

import './App.scss'

export const AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)