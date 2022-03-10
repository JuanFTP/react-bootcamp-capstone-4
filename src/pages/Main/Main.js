import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Banner from "../../components/layout/Banner";
import Categories from "../../components/layout/Categories";
import Products from "../../components/layout/Products";
import Container from "../../components/common/Container";
import featuredBanners from "../../mocks/en-us/featured-banners.json";
import productsCategories from "../../mocks/en-us/product-categories.json";
import featuredProducts from "../../mocks/en-us/featured-products.json";

const getBanners = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				image: {
					url: item.data.main_image.url,
					dimensions: item.data.main_image.dimensions,
				},
			};
		})
	);
};

const getCategories = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				name: item.data.name,
				image: {
					url: item.data.main_image.url,
					alt: item.data.main_image.alt,
					dimensions: item.data.main_image.dimensions,
				},
			};
		})
	);
};

const getProducts = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				tags: item.tags,
				name: item.data.name,
				sku: item.data.sku,
				category: {
					id: item.data.category.id,
					slug: item.data.category.slug,
				},
				image: item.data.mainimage,
				price: item.data.price,
			};
		})
	);
};

const Main = ({ onChangeLocation }) => {
	const banners = getBanners(featuredBanners.results);
	const categories = getCategories(productsCategories.results);
	const products = getProducts(featuredProducts.results);

	return (
		<div>
			<Header onChangeLocation={onChangeLocation} />
			<Banner banners={banners} />

			<Container>
				<Categories categories={categories} />
				<Products
					products={products}
					title="RECOMMENDED PRODUCTS"
					onChangeLocation={onChangeLocation}
				/>
			</Container>

			<Footer />
		</div>
	);
};

export default Main;
