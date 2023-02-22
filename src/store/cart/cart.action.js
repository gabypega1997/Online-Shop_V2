import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import {
    addCartItem,
    clearCartItem,
    removeCartItem,
} from "../../utils/cart/cart.utils";

const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setShowDropdown = (bool) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, bool);

export const setCartItems = (cartItem) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItem);
