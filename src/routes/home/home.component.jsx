import Categories from "../../components/categories/categories.component";

const categories = require("../../data/categories.json");

const Home = () => {
    return <Categories categories={categories} />;
};

export default Home;
