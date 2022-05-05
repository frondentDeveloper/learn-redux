import {actionType} from "../contents/actionType";

export const setProduct = (products) => {
  return {
      type:actionType.SET_PRODUCT,
      payload:products
  }
};
export const selectedProduct = (product) =>{
    return {
        type:actionType.SELECTED_PRODUCT,
        payload:product
    }
};

export const removeSelectedProduct = () =>{
    return {
        type:actionType.REMOVE_SELECTED_PRODUCT,
    }
};