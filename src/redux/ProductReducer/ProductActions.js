import { FETCH_PRODUCT, FETCH_SECCESS, FETCH_FAILURE, FETCH_EXISTS } from './ActionTypes';
import firebase from '../../firebase';

export const FetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT
    }
}

export const FetchProductSeccess = data => {
    return {
        type: FETCH_SECCESS,
        payload: data
    }
}

export const FetchProductExist = () => {
    return {
        type: FETCH_EXISTS,
    }
}

export const FetchProductFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const FetchOneProduct = item => {
    return (dispatch) => {
        dispatch(FetchProductRequest())
        firebase
            .firestore()
            .collection('products')
            .doc(item)
            .get()
            .then( doc => {
                if(doc.exists) {
                    dispatch(FetchProductSeccess(doc.data))
                    } else { 
                    dispatch(FetchProductExist())
                    }
                })
            .catch(error => {
                dispatch(FetchProductFailure(error))
            })
                
    }
}