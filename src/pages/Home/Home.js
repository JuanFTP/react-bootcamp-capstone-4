import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import Banner from "./../../components/layout/Banner";
import Categories from "./../../components/layout/Categories";
import Products from "./../../components/layout/Products";
import Container from "./../../components/common/Container";
import { useFeaturedBanners } from "./../../utils/hooks/useFeaturedBanners";

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

const Home = () => {
	const { data } = useFeaturedBanners();
	const banners = getBanners(data.results);

	return (
		<div>
			<Header />
			<Banner banners={banners} />

			<Container>
				<Categories />
				<Products />
			</Container>

			<Footer />
		</div>
	);
};

export default Home;
