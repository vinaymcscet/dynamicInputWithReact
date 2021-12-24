import React from 'react'

import classes from './Input.css'

const InputField = props => {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value
  } = props

  return (
    <div className={classes.inputContainer}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className='error'>{errorMessage}</span>
      )}
    </div>
  );
};

// React.memo() is a great tool to memoize functional components. 
// When applied correctly, it prevents useless re-renderings when the next props equal to previous ones.
// Take precautions when memoizing components that use props as callbacks. 
// Make sure to provide the same callback function instance between renderings.

export default React.memo(InputField);