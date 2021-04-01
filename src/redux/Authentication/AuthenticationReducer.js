import { lOGOUT, LOGIN } from './ActionTypes'

const initialState = {
  isLoggedIn: false,
  user: {},
}

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    case lOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      }

    default:
      return state
  }
}

export default AuthenticationReducer
