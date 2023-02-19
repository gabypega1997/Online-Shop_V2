import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

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
    const { addItemToCart, removeItemFromCart, clearItemFromCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
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
