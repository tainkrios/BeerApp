import { useReducer } from 'react'
import { INITIAL_STATE, inputStateReducer } from './../store/inputReducer'


export const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(inputStateReducer, INITIAL_STATE)

  const valueIsValid = validateValue(state.value)
  const hasError = !valueIsValid && state.isTouched

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value})
  }

  const inputBlurHandler = () => {
    dispatch({type: 'BLUR'})
  }

  const reset = () => { 
    dispatch({type: 'RESET'})
   }

  return {
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}
