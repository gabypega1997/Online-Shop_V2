import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    showDropdown: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_SHOW_DROPDOWN:
            return {
                ...state,
                showDropdown: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            console.log(payload);
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
