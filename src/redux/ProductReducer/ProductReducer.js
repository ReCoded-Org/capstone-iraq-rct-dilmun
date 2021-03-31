import { FETCH_PRODUCT, FETCH_SECCESS, FETCH_FAILURE, FETCH_EXISTS } from './ActionTypes';

const initialState = {
    loading: false,
    exist: false,
    error: '',
    product: {}
}

const ProductReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                loading: true,
                exist: false
            }
        case FETCH_SECCESS:
            return {
                ...state,
                loading: false,
                exist: true,
                product: action.payload
            }
        case FETCH_EXISTS:
            return {
                ...state,
                loading: false,
                exist: false,
                product: {}
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                exist:false,
                error: action.payload
            }
        default: return state
    }
}

export default ProductReducer