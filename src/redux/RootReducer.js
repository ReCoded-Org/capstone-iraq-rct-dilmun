import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer/ProductsReducer'
import UserReducer from './UserReducer/UserReducer'
import AuthenticationReducer from './Authentication/AuthenticationReducer'

const RootReducer = combineReducers({
  authentication: AuthenticationReducer,
  user: UserReducer,
  products: ProductsReducer,
})

export default RootReducer
