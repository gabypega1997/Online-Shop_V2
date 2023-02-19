import { useContext, useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCart from "../../components/product-card/product-card.component";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>

            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCart
                            key={product.id}
                            product={product}
                        ></ProductCart>
                    ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;