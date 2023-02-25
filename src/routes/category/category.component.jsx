import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCart from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
    selectCategories,
} from "../../store/categories/category.selector";

const Category = () => {
    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCart
                                key={product.id}
                                product={product}
                            ></ProductCart>
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;
