import PropTypes from "prop-types";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Banner from "./../../components/layout/Banner";
import Container from "./../../components/common/Container";
import Title, { titleLevels } from "./../../components/common/Title";
import Button, { buttonVariants } from "./../../components/common/Button";
import ListCategories from "./../../components/layout/ListCategories";
import ListProducts from "./../../components/layout/ListProducts";
import { Link } from "react-router-dom";
import { useBanners } from "./../../hooks/useBanners";
import { useCategories } from "./../../hooks/useCategories";
import { useProducts } from "./../../hooks/useProducts";

const Home = () => {
	const { banners } = useBanners();
	const { categories } = useCategories();
	const { products } = useProducts();

	return (
		<>
			<Header />

			<Banner banners={banners} />

			<Container>
				<div className="row">
					<div className="row">
						<Title Level={titleLevels.h3}>CATEGORIES</Title>
					</div>
					<br />
					{categories && <ListCategories categories={categories} />}
				</div>
				<div className="row">
					<div className="row">
						<div className="flex ai-top jc-space-between">
							<Title Level={titleLevels.h3}>
								RECOMMENDED PRODUCTS
							</Title>
							<Link to="/products">
								<Button variant={buttonVariants.outline}>
									VIEW ALL PRODUCTS
								</Button>
							</Link>
						</div>
					</div>
					<br />
					{products && products.length > 0 ? (
						<ListProducts
							def={4}
							xl={4}
							md={3}
							sm={2}
							xsm={1}
							minmax={320}
							products={products}
							limit={16}
							offset={0}
						/>
					) : (
						<Title Level={titleLevels.h4}>No products</Title>
					)}
				</div>
			</Container>

			<Footer />
		</>
	);
};

Home.propTypes = {
	banners: PropTypes.array,
	categories: PropTypes.array,
	products: PropTypes.array,
	onChangeLocation: PropTypes.func,
};

export default Home;
