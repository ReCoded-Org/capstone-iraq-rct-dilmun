import {combineReducers} from "redux";
import ProductReducer from './ProductReducer/ProductReducer'
import ProductsReducer from './ProductsReducer/ProductsReducer'
import UserReducer from './UserReducer/UserReducer'

const RootReducer = combineReducers({
    user: UserReducer,
    products: ProductsReducer,
    product: ProductReducer
});

export default RootReducer