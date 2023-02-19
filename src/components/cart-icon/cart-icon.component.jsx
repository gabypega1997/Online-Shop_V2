import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    ItemCount,
    ShoppingIconContainer,
    CartIconContainer,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { showDropdown, setShowDropdown, cartCount } =
        useContext(CartContext);

    const toogleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <CartIconContainer onClick={toogleDropdown}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
