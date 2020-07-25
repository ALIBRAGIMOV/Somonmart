import {  ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCTS, DECREMENT_PRODUCTS } from "./type";

const initialState = {
    cart: []
  };


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload };
      case INCREMENT_PRODUCTS:
        return { ...state, cart: action.payload };
      case DECREMENT_PRODUCTS:
        return { ...state, cart: action.payload };
    default:
      return state;
  }
}