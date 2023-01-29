import { ACTIONS_TYPE } from './ActionTypes'

export const INITIAL_STATE = {
  value: '',
  isTouched: false,
}

export const inputStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.INPUT:
      return {
        ...state,
        value: action.value,
      }
    case ACTIONS_TYPE.BLUR:
      return {
        ...state,
        isTouched: true,
      }
    case ACTIONS_TYPE.RESET:
      return {
        value: '',
        isTouched: false,
      }

    default:
      return INITIAL_STATE
  }
}
