import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import Banner from "./../../components/layout/Banner";
import Categories from "./../../components/layout/Categories";
import Products from "./../../components/layout/Products";
import Container from "./../../components/common/Container";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />

			<Container>
				<Categories />
				<Products />
			</Container>

			<Footer />
		</div>
	);
};

export default Home;
