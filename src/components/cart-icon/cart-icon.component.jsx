import { useDispatch, useSelector } from "react-redux";

import {
    selectCartCount,
    selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setShowDropdown } from "../../store/cart/cart.action";

import {
    ItemCount,
    ShoppingIconContainer,
    CartIconContainer,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const dispatch = useDispatch();

    const showDropdown = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toogleDropdown = () => {
        dispatch(setShowDropdown(!showDropdown));
    };

    return (
        <CartIconContainer onClick={toogleDropdown}>
            <ShoppingIconContainer />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
