import {actionType} from "../contents/actionType";


const initialState = {
    product:[]
};

export const productReducer = (state = initialState, {type, payload }) =>{
    switch (type) {
        case actionType.SET_PRODUCT:
            return {...state, product: payload};
        default:
            return state
    }
};

 export const selectedProductReducer = (state = initialState, {type, payload }) =>{
     switch (type) {
         case actionType.SELECTED_PRODUCT:
             return {...state, ...payload};
         case actionType.REMOVE_SELECTED_PRODUCT:
             return {}
         default:
             return state
     }
 };