import {  ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCTS, DECREMENT_PRODUCTS  } from "./type";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;
  
    cartItems.forEach((cp) => {
      if (cp._id === product._id ) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });
  
    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
        type: ADD_TO_CART,
        payload: cartItems,
      });
  };
  
  export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a._id !== product._id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
        type: REMOVE_FROM_CART,
        payload: cartItems,
      });
  };
  
  export const incrementProducts = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;
  
    cartItems.forEach((cp) => {
      if (cp._id === product._id) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
        type: INCREMENT_PRODUCTS,
        payload: cartItems,
      });
  };
  
  export const decrementProducts = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;
  
    cartItems.forEach((cp) => {
      if (cp._id === product._id) {
        cp.count -= 1;
        productAlreadyInCart = true;
      }
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    return dispatch({
      type: DECREMENT_PRODUCTS,
      payload: cartItems,
    });
  };