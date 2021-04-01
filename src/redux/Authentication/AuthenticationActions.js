import { LOGIN, lOGOUT } from './ActionTypes'

export const LogIn = user => {
  return {
    type: LOGIN,
    payload: user,
  }
}
export const LogOut = () => {
  return {
    type: lOGOUT,
  }
}
