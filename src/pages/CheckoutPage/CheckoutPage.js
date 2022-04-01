import Title, { titleLevels } from "../../components/common/Title";
import Container from "./../../components/common/Container";
import "./CheckoutPage.css";

const CheckoutPage = () => {
	return (
		<Container inner={true}>
			<Title Level={titleLevels.h2}>Checkout</Title>
		</Container>
	);
};

export default CheckoutPage;
