import Header from "./../../components/layout/Header";
import Container from "./../../components/common/Container";
import Products from "./../../components/layout/Products";
import Footer from "./../../components/layout/Footer";

const ProductsPage = ({ onChangeLocation }) => {
	return (
		<div>
			<Header onChangeLocation={onChangeLocation} />

			<Container inner={true}>
				<Products title="PRODUCTS" />
			</Container>

			<Footer />
		</div>
	);
};

export default ProductsPage;
