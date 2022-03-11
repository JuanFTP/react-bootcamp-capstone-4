import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Banner from "../../components/layout/Banner";
import Categories from "../../components/layout/Categories";
import Products from "../../components/layout/Products";
import Container from "../../components/common/Container";
import Button, { buttonVariants } from "./../../components/common/Button";

const Main = ({ banners, categories, products, onChangeLocation }) => {
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
				>
					<Button
						variant={buttonVariants.outline}
						value={"products"}
						onClickItem={onChangeLocation}
					>
						VIEW ALL PRODUCTS
					</Button>
				</Products>
			</Container>

			<Footer />
		</div>
	);
};

export default Main;
