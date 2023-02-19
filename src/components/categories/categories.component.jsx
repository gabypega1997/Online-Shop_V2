import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./categories.styles.jsx";

const Categories = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map((category) => {
                return <DirectoryItem category={category} key={category.id} />;
            })}
        </CategoriesContainer>
    );
};

export default Categories;
