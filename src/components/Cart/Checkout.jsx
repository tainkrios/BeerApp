import { useInput } from '../../hooks/use-input'
import './Checkout.css'

const isEmpty = (value) => {
  value.trim() === ''
}

const isNotFiveChars = (value) => {
  value.trim().length !== 5
}

export const Checkout = ({ onCancel, onSubmit }) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: postalInputHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostalInput,
  } = useInput((value) => value.trim().length === 5)

  let formIsValid = false

  if (
    enteredNameIsValid &&
    enteredCityIsValid &&
    enteredPostalIsValid &&
    enteredStreetIsValid
  ) {
    formIsValid = true
  }

  const confirmHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    resetCityInput()
    resetNameInput()
    resetPostalInput()
    resetStreetInput()

    onSubmit({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity
    })
  }

  const nameInputClasses = nameInputHasError ? 'control invalid' : 'control'
  const cityInputClasses = cityInputHasError ? 'control invalid' : 'control'
  const streetInputClasses = streetInputHasError ? 'control invalid' : 'control'
  const postalInputClasses = postalInputHasError ? 'control invalid' : 'control'

  return (
    <form
      className='form'
      onSubmit={confirmHandler}
    >
      <div className={nameInputClasses}>
        <label htmlFor='name'>You Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputHasError && (
          <p className='error-text'>Street must not be empty</p>
        )}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          value={enteredPostal}
        />
        {postalInputHasError && (
          <p className='error-text'>Postal code must not be empty</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputHasError && (
          <p className='error-text'>City code must not be empty</p>
        )}
      </div>
      <div className='actions'>
        <button
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className='submit'
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  )
}
