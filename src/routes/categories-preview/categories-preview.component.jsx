import { useContext, Fragment } from "react";

import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
    // const categoriesMap = useSelector((state) => state.categories.categoriesMap)
    // console.log(categoriesMap)
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
