import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import Banner from "./../../components/layout/Banner";
import Categories from "./../../components/layout/Categories";
import Products from "./../../components/layout/Products";
import Container from "./../../components/common/Container";
import { useFeaturedBanners } from "./../../utils/hooks/useFeaturedBanners";
import { useFeaturedCategories } from "./../../utils/hooks/useFeaturedCategories";
import { useFeaturedProducts } from "./../../utils/hooks/useFeaturedProducts";

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

const Home = () => {
	const resultBanners = useFeaturedBanners();
	const banners = getBanners(resultBanners.data.results);
	const resultCategories = useFeaturedCategories();
	const categories = getCategories(resultCategories.data.results);
	const resultProducts = useFeaturedProducts();
	const products = getProducts(resultProducts.data.results);
	console.log(products);

	return (
		<div>
			<Header />
			<Banner banners={banners} />

			<Container>
				<Categories categories={categories} />
				<Products products={products} categories={categories} />
			</Container>

			<Footer />
		</div>
	);
};

export default Home;
