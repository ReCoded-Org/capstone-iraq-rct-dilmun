import { OPEN, CLOSE } from './ActionTypes'

const initialState = {
  state: false,
}

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        state: true,
      }
    case CLOSE:
      return {
        ...state,
        state: false,
      }

    default:
      return state
  }
}

export default ModalReducer
