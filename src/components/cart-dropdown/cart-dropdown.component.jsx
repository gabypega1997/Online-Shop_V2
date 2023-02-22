import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
    CartButton,
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        ></CartItem>
                    ))
                ) : (
                    <EmptyMessage>No items </EmptyMessage>
                )}
            </CartItems>
            <CartButton onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </CartButton>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
