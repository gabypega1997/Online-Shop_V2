import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector.js";

import CartItem from "../cart-item/cart-item.component"

import {
    CartButton,
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const cartItems  = useSelector(selectCartItems)

    
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
