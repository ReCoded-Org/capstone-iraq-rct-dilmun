import {combineReducers} from "redux";
import ProductsReducer from './ProductsReducer/ProductsReducer'
import UserReducer from './UserReducer/UserReducer'

const RootReducer = combineReducers({
    user: UserReducer,
    products: ProductsReducer
});

export default RootReducer