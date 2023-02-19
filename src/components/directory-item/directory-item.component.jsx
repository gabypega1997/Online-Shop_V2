import { useNavigate } from "react-router-dom";

import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigator = useNavigate();

    const goToCategoryHandler = () => {
        navigator(`/shop/${title.toLowerCase()}`);
    };

    return (
        <DirectoryItemContainer onClick={goToCategoryHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
