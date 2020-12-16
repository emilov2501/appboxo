import React from 'react';
import { Field } from 'redux-form';

import './Input.scss';

export const Input = ({ type = 'text', readonly, name, leftIcon, rightIcon, handleInputChange }) => {
  return (
    <div className="input">
      {
        leftIcon && (
          <div onClick={leftIcon.handleClick} className="input__icon input__icon--left">
            {leftIcon.icon}
          </div>
        )
      }
      <Field
        readOnly={readonly}
        name={name}
        component="input"
        type={type}
        className="input__field"
        onChange={handleInputChange}
        />
      {
        rightIcon && (
          <div onClick={rightIcon.handleClick} className="input__icon input__icon--right">
            {rightIcon.icon}
          </div>
        )
      }
    </div>
  )
}