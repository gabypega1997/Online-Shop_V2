import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.Items
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((cartTotal, cartItem) => cartTotal + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
    )
);

export const cartSelector = (state) => state.cart.cartItems;
