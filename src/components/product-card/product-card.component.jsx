import { useSelector, useDispatch } from "react-redux";

import { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
    Footer,
    Image,
    Name,
    Price,
    ProductButton,
    ProductCardContainer,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;

    const cartItems = useSelector(selectCartItems);

    const addPoductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
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
