import React, { memo, useEffect } from 'react'
import { Input } from './Input'

import './withInputLabel.scss'

export const withInputLabel = memo(({ type, readonly, name, label, leftIcon, rightIcon, handleInputChange }) => {
  return (
    <div className="input-label">
      <div className="label">{label}</div>
      <Input
        readonly={readonly}
        name={name}
        type={type}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        handleInputChange={handleInputChange}
      />
    </div>
  )
})