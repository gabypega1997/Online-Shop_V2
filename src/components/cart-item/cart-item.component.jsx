import {
    CartItemContainer,
    Image,
    ImageDetails,
    Name,
    Price,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name} />
            <ImageDetails>
                <Name>{name}</Name>
                <Price>
                    {quantity} x ${price}
                </Price>
            </ImageDetails>
        </CartItemContainer>
    );
};

export default CartItem;
