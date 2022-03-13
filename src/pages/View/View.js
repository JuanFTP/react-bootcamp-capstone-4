import featuredBanners from "../../mocks/en-us/featured-banners.json";
import productsCategories from "../../mocks/en-us/product-categories.json";
import featuredProducts from "../../mocks/en-us/featured-products.json";
import getBanners from "./../../utils/transform/getBanners";
import getCategories from "./../../utils/transform/getCategories";
import getProducts from "./../../utils/transform/getProducts";
import ProductsPage from "./../ProductsPage";
import Main from "./../Main";

const getViewOfPage = (location, onChangeLocation) => {
	const banners = getBanners(featuredBanners.results);
	const categories = getCategories(productsCategories.results);
	const products = getProducts(featuredProducts.results);

	switch (location) {
		case "products":
			return (
				<ProductsPage
					categories={categories}
					products={products}
					onChangeLocation={onChangeLocation}
				/>
			);
		default:
			return (
				<Main
					banners={banners}
					categories={categories}
					products={products}
					onChangeLocation={onChangeLocation}
				/>
			);
	}
};

const View = ({ location, onChangeLocation }) => {
	return location && getViewOfPage(location, onChangeLocation);
};

export default View;
