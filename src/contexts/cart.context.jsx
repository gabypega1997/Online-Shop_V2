import { createContext, useEffect, useReducer } from "react";

const CART_ACTION_TYPES = {
    SET_SHOW_DROPDOWN: "SET_SHOW_DROPDOWN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_TOTAL: "SET_CART_TOTAL",
    SET_CART_COUNT: "SET_CART_COUNT",
};
const INITIAL_STATE = {
    showDropdown: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_SHOW_DROPDOWN:
            return {
                ...state,
                showDropdown: !state.showDropdown,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: [...payload],
            };
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload,
            };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    setcartTotal: () => {},
});

export const CartProvider = ({ children }) => {
    const [{ showDropdown, cartItems, cartCount, cartTotal }, dispach] =
        useReducer(cartReducer, INITIAL_STATE);

    const setShowDropdown = () => {
        dispach({ type: CART_ACTION_TYPES.SET_SHOW_DROPDOWN });
    };

    const setCartItems = (items) => {
        dispach({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: items });
    };

    const setCartCount = (count) => {
        dispach({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: count });
    };

    const setcartTotal = (total) => {
        dispach({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: total });
    };

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (cartTotal, cartItem) => cartTotal + cartItem.quantity,
            0
        );

        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newcartTotal = cartItems.reduce(
            (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
            0
        );
        setcartTotal(newcartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const value = {
        showDropdown,
        setShowDropdown,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
