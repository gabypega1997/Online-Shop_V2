import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { Footer, Image, Name, Price, ProductButton, ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addPoductToCart = () => addItemToCart(product);
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
