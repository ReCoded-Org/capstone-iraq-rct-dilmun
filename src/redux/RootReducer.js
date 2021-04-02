import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer/ProductsReducer'
import UserReducer from './UserReducer/UserReducer'
import AuthenticationReducer from './Authentication/AuthenticationReducer'
import ModalReducer from './LoginModal/ModalReducer'

const RootReducer = combineReducers({
  authentication: AuthenticationReducer,
  user: UserReducer,
  products: ProductsReducer,
  modal: ModalReducer,
})

export default RootReducer
