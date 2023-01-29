import React from 'react'
import './inputField.css'

function InputField({...rest}) {
  return (
    <React.Fragment>
        <input   {...rest} className='input-field-style' />    
    </React.Fragment>
  )
}

export default InputField