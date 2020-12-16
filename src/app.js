import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from './components/App/AppContainer'

export const mount = (element) => {
  ReactDOM.render(<AppContainer/>, element)
}