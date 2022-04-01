import Container from "../../components/common/Container";
import Title, { titleLevels } from "../../components/common/Title";
import "./CartPage.css";

const CartPage = () => {
	return (
		<Container inner={true}>
			<Title Level={titleLevels.h2}>Cart</Title>
		</Container>
	);
};

export default CartPage;
