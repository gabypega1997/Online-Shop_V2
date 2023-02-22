import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { useSelector, useDispatch } from "react-redux";

import { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { Footer, Image, Name, Price, ProductButton, ProductCardContainer } from "./product-card.styles.jsx";
import { setCartItems } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addPoductToCart = () => {
        dispatch(setCartItems(product));
        addItemToCart(product)
    };
    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price} $</Price>
            </Footer>
            <ProductButton
                buttonType={BUTTON_TYPES_CLASSES.inverted}
                onClick={addPoductToCart}
            >
                Add to card
            </ProductButton>
        </ProductCardContainer>
    );
};

export default ProductCard;
