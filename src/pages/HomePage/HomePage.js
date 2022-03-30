import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button, { buttonVariants } from "../../components/common/Button";
import Container from "../../components/common/Container";
import Title, { titleLevels } from "../../components/common/Title";
import Banner from "../../components/layout/Banner";
import ListCategories from "../../components/layout/ListCategories";
import ListProducts from "../../components/layout/ListProducts";
import { useBanners } from "../../hooks/useBanners";
import { useCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProducts";

const HomePage = () => {
	const { banners } = useBanners();
	const { categories } = useCategories();
	const { products } = useProducts();

	return (
		<>
			<Banner banners={banners} />

			<Container>
				<div className="row">
					<Title Level={titleLevels.h3}>CATEGORIES</Title>
					<ListCategories categories={categories} />
				</div>
				<div className="row">
					<div className="flex ai-top jc-space-between">
						<Title Level={titleLevels.h3}>RECOMMENDED PRODUCTS</Title>
						<Link to="/products">
							<Button variant={buttonVariants.outline}>
								VIEW ALL PRODUCTS
							</Button>
						</Link>
					</div>
					<br />
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
				</div>
			</Container>
		</>
	);
};

HomePage.propTypes = {
	banners: PropTypes.array,
	categories: PropTypes.array,
	products: PropTypes.array,
};

export default HomePage;
