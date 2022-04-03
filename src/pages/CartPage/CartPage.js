import Container from "../../components/common/Container";
import Title, { titleLevels } from "../../components/common/Title";
import ListProductItems from "../../components/layout/ListProductItems/ListProductItems";
import Button, { buttonVariants } from "./../../components/common/Button";
import "./CartPage.css";

const CartPage = () => {
	const products = [
		{
			id: "A1",
			image: "",
			name: "Product A1",
			stock: 0,
			selected: 0,
			price: 222211.0,
		},
		{
			id: "A2",
			image: "",
			name: "Product A2",
			stock: 0,
			selected: 0,
			price: 22222.0,
		},
	];

	const onChangeItemsSelected = (productId) => {
		console.log(`onChangeItemsSelected ${productId}`);
	};

	const onRemoveItem = (productId) => {
		console.log(`onRemoveItem ${productId}`);
	};

	return (
		<Container inner={true}>
			<Title Level={titleLevels.h1}>Cart</Title>

			<div className="row cart">
				<div className="resume">
					<div className="flex ai-center jc-space-between">
						<Title Level={titleLevels.h2}>0 Items</Title>

						<Title Level={titleLevels.h2}>$ 0,000.00</Title>
					</div>
				</div>

				<ListProductItems
					listProductItems={products}
					onChangeItemsSelected={onChangeItemsSelected}
					onRemoveItem={onRemoveItem}
				/>

				<div className="actions">
					<div className="flex ai-center jc-end">
						<Button variant={buttonVariants.primary}>
							PROCEED TO CHECKOUT
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default CartPage;
