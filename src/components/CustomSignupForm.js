import React from 'react'
import useForm from '../hooks/use-form'
import { signupForm } from '../utils/FormConfig'

import classes from './SignupForm.css';

const CustomSignupForm = () => {
  const { renderFormInputs, isFormValid } = useForm(signupForm);
  return (
    <form className={classes.signupForm}>
      <h1>Signup Form</h1>
      {renderFormInputs()}
      <button type='submit' disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  )
}

export default CustomSignupForm;
