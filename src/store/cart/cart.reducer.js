import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    showDropdown: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_SHOW_DROPDOWN:
            return {
                ...state,
                showDropdown: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        default:
            return state;
    }
};
