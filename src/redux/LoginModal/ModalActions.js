import { OPEN, CLOSE } from './ActionTypes'

export const OpenModal = () => {
  return {
    type: OPEN,
  }
}
export const CloseModal = () => {
  return {
    type: CLOSE,
  }
}
