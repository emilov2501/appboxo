import React, { memo } from 'react';
import { Field } from 'redux-form';

import './Checkbox.scss'

export const Checkbox = memo(({ checked, name, label, handleCheckboxChange}) => {
  return (
    <>
      <label htmlFor="checkbox" className="checkbox">
        <Field
          className="apple-switch"
          id="checkbox"
          type="checkbox"
          component="input"
          checked={checked}
          name={name}
          onChange={handleCheckboxChange}
        />
        <span className="label">{label}</span>
      </label>
    </>
  )
});