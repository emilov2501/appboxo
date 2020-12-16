import React from 'react'
import { Calculator } from '../Calculator/Calculator'

import image from '../../icons/back.svg';

export const App = () => (
  <div className="wrapper">
    <h2 className="route-title">
      <span><img src={image} /></span>
      <span className="title">Let’s plan your saving goal</span>
      <span></span>
    </h2>
    <Calculator />
  </div>
)
