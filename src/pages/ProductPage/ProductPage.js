import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";

const ProductPage = () => (
	<>
		<Header />
		<Container inner={true}>
			<p>This is the product page</p>
		</Container>
		<Footer />
	</>
);

export default ProductPage;
