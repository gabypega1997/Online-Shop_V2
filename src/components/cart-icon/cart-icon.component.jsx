import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    ItemCount,
    ShoppingIconContainer,
    CartIconContainer,
} from "./cart-icon.styles.jsx";
import {
    selectCartCount,
    selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";

const CartIcon = () => {
    const showDropdown = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const toogleDropdown = () => {
        dispatch(CART_ACTION_TYPES.SET_SHOW_DROPDOWN, !showDropdown);
    };

    return (
        <CartIconContainer onClick={toogleDropdown}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
