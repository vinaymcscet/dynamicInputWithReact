import useInput from '../hooks/use-input'

const BasicForm = props => {
  const isNotEmpty = value => value.trim() !== '';
  const isEmail = value => value.includes('@');
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail);

  let formIsValid = false
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
    // if (
    //   !enteredFirstNameIsValid &&
    //   !enteredLastNameIsValid & !enteredEmailIsValid
    // ) {
      return
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail)
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClass = firstnameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const lastNameInputClass = lastnameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClass = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstnameInputHasError && (
            <p className='error-text'>First Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            id='lastName'
          />
          {lastnameInputHasError && (
            <p className='error-text'>Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Enter valid Email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
