import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button, { buttonVariants } from "../../components/common/Button";
import Table from "../../components/common/Table";
import { tableVariants } from "../../components/common/Table/Table";
import Title, { titleLevels } from "../../components/common/Title";
import { GlobalContext } from "../../reducers/Global";
import { PATHS } from "../../utils/constants";
import Container from "./../../components/common/Container";
import "./CheckoutPage.css";

const CheckoutPage = () => {
	const history = useHistory();
	const {
		state: { cart },
	} = useContext(GlobalContext);

	useEffect(() => {
		if (cart.length < 1) {
			history.push(PATHS.default);
		}
	}, [cart, history]);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("Reteniendo");
	};

	const onBackToCart = () => {
		history.push(PATHS.cart);
	};

	return (
		<Container inner={true}>
			<Title Level={titleLevels.h1}>Checkout</Title>

			<div className="row">
				<form action="#" className="form" onSubmit={handleOnSubmit}>
					<div className="data">
						<Title Level={titleLevels.h3}>Personal data</Title>

						<div className="form-control">
							<label>
								First name
								<input
									type="text"
									value={""}
									placeholder="First name"
									onChange={() => console.log("Estoy cambiando")}
								/>
							</label>
							<span>No error</span>
						</div>

						<div className="form-control">
							<label>
								Last name
								<input
									type="text"
									value={""}
									placeholder="Last name"
									onChange={() => console.log("Estoy cambiando")}
								/>
							</label>
							<span>Error type</span>
						</div>

						<div className="form-control">
							<label>
								Email
								<input
									type="email"
									value={""}
									placeholder="email@domain.com"
									onChange={() => console.log("Estoy cambiando")}
								/>
							</label>
							<span>Error type</span>
						</div>

						<div className="form-control">
							<label>
								Zipcode
								<input
									type="text"
									value={""}
									placeholder="00000"
									onChange={() => console.log("Estoy cambiando")}
								/>
							</label>
							<span>Error type</span>
						</div>

						<div className="form-control">
							<label>
								Instructions
								<textarea
									value={""}
									placeholder="Instructions"
									onChange={() => console.log("Estoy cambiando")}
								/>
							</label>
							<span>Error type</span>
						</div>
					</div>

					<div className="resume">
						<Title Level={titleLevels.h3}>Resume</Title>

						<Table
							variant={tableVariants.resume}
							data={{
								cols: ["Product name", "Unit price", "Cuantity", "Subtotal"],
								rows: cart,
							}}
						/>
					</div>

					<div className="actions">
						<div className="flex ai-center jc-space-between">
							<Button
								variant={buttonVariants.outline}
								onClickItem={onBackToCart}
							>
								BACK TO CART
							</Button>
							<Button variant={buttonVariants.primary}>MAKE AN ORDER</Button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default CheckoutPage;
