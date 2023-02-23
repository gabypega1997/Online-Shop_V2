import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
    removeItemFromCart,
    clearItemFromCart,
    addItemToCart,
} from "../../store/cart/cart.action";

import {
    CheckoutItemContainer,
    ImageContainer,
    Image,
    Span,
    Quantity,
    Value,
    RemoveButton,
    Arrow,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ product }) => {
    const { name, imageUrl, price, quantity } = product;

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, product));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, product));
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Span>{name}</Span>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Span>{price} $</Span>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
