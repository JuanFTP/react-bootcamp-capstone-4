import { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Title, { titleLevels } from "../../components/common/Title";
import ListProductItems from "../../components/layout/ListProductItems/ListProductItems";
import { useAddToCart } from "../../hooks/useAddToCart";
import { PATHS } from "../../utils/constants";
import { arraySumator, getFormattedPrice } from "../../utils/utils";
import Button, { buttonVariants } from "./../../components/common/Button";
import { useRemoveToCart } from "./../../hooks/useRemoveToCart";
import { GlobalContext } from "./../../reducers/Global";
import "./CartPage.css";

const CartPage = () => {
	const { setDataToAdd, statusAdd } = useAddToCart();
	const { setDataToRemove, statusRemove } = useRemoveToCart();
	const { state, dispatch } = useContext(GlobalContext);
	const { cart } = state;
	const nProducts = useMemo(() => (cart.length ? cart.length : 0), [cart]);
	const nItems = useMemo(
		() =>
			cart.length > 0
				? cart.map((item) => item.selected).reduce(arraySumator)
				: 0,
		[cart]
	);
	const total = useMemo(
		() =>
			nItems > 0
				? cart.map((item) => item.price * item.selected).reduce(arraySumator)
				: 0,
		[cart, nItems]
	);

	useEffect(() => {
		if (statusAdd.added) {
			console.log(`The product: ${statusAdd.id} has been update`);
			toast.success("The product has been updated.");
		} else {
			if (statusAdd.id !== "") {
				toast.warning("You have already selected all the available items.");
			}
		}
	}, [statusAdd]);

	useEffect(() => {
		if (statusRemove.removed) {
			toast.success("The product has been removed.");
		} else {
			if (statusRemove.id !== "") {
				toast.error("Sorry, has been a problem occurred.");
			}
		}
	}, [statusRemove]);

	const onChangeItemsSelected = (data) => {
		const product = cart.filter((item) => item.id === data.id)[0];
		if (!data.type) {
			if (product.selected - 1 > 0) {
				setDataToAdd({ cart, product, cuantity: -1, dispatch });
			}
		} else {
			setDataToAdd({ cart, product, cuantity: 1, dispatch });
		}
	};

	const onRemoveItem = (productId) => {
		setDataToRemove({ cart, dispatch, productId });
	};

	return (
		<Container inner={true}>
			<div className="cart">
				<div>
					<div className="flex ai-top jc-space-between">
						<Title Level={titleLevels.h1}>Cart</Title>

						<Link to={PATHS.home}>
							<Button variant={buttonVariants.outline}>GO TO HOME</Button>
						</Link>
					</div>
				</div>

				<div className="resume">
					<div className="flex ai-center jc-space-between">
						<Title Level={titleLevels.h2}>{`${nProducts} Product${
							nProducts > 1 ? "s" : ""
						} - ${nItems} Item${nItems > 1 ? "s" : ""}`}</Title>

						<Title Level={titleLevels.h2}>{`$ ${getFormattedPrice(
							total
						)}`}</Title>
					</div>
				</div>

				<ListProductItems
					listProductItems={cart}
					onChangeItemsSelected={onChangeItemsSelected}
					onRemoveItem={onRemoveItem}
				/>

				{nItems > 0 && (
					<div className="actions">
						<div className="flex ai-center jc-end">
							<Link to={PATHS.checkout}>
								<Button variant={buttonVariants.primary}>
									PROCEED TO CHECKOUT
								</Button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</Container>
	);
};

export default CartPage;
