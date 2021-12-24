import { useEffect, useState } from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))
  // Another way of form Event hadling and validation - useRef();
  // On submit form validation Ref is better to use
  // const nameInputref = useRef();
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredNameIsValid, setEnterednameisValid] = useState(false);
  // const [enterednameTouched, setEnterednameTouched] = useState(false);
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name Input is valid!')
  //   }
  // }, [enteredNameIsValid])

  // const enteredNameIsValid = enteredName.trim() !== ''
  // const nameInputIsInValid = !enteredNameIsValid && enterednameTouched

  // const enteredEmailIsValid = enteredEmail.includes('@')
  // const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched

  useEffect(() => {
    if (enteredName && enteredEmail) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid])

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value)
  //   // if (event.target.value.trim() !== '') {
  //   //   setEnterednameisValid(true)
  //   // }
  // }

  // const nameInputBlurHandler = event => {
  //   setEnterednameTouched(true)
  //   // if (enteredName.trim() === '') {
  //   //     setEnterednameisValid(true)
  //   //   }
  // }

  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value)
  // }

  // const emailInputBlurHandler = event => {
  //   setEnteredEmailTouched(true)
  // }

  const formSubmitHandler = event => {
    event.preventDefault();

    // setEnterednameTouched(true)
    // setEnteredEmailTouched(true)

    // if (enteredName.trim() === '') {
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      // setEnterednameisValid(false)
      return
    }
    // setEnterednameisValid(true)
    console.log(enteredName, enteredEmail)

    // const enteredValue = nameInputref.current.value
    // console.log(enteredValue)
    // nameInputref.current.value = ''; // => Not Ideal, don't manipulate the DOM
    // setEnteredName('')
    // setEnterednameTouched(false);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('')
    // setEnteredEmailTouched(false)
  }

  // const nameInputClasses = nameInputIsInValid
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* <input type='text' id='name' onChange={nameInputChangeHandler} /> */}
        <input
          type='text'
          id='name'
          // ref={nameInputref}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        {/* <input type='text' id='name' onChange={nameInputChangeHandler} /> */}
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
