import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const updateCartItemsReducer = (newCartItems) => {
    console.log(newCartItems);
    const newCartCount = newCartItems.reduce(
        (cartTotal, cartItem) => cartTotal + cartItem.quantity,
        0
    );

    const newcartTotal = newCartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
    );

    return {
        cartItems: newCartItems,
        cartTotal: newcartTotal,
        cartCount: newCartCount,
    };
};

export const setShowDropdown = (bool) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, bool);

export const setCartItems = (cartItem) =>
    createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        updateCartItemsReducer(cartItem)
    );
