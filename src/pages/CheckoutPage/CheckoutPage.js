import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button, { buttonVariants } from "../../components/common/Button";
import Table from "../../components/common/Table";
import { tableVariants } from "../../components/common/Table/Table";
import Title, { titleLevels } from "../../components/common/Title";
import { useRemoveAllFromCart } from "../../hooks/useRemoveAllFromCart";
import { GlobalContext } from "../../reducers/Global";
import { forms, PATHS } from "../../utils/constants";
import Container from "./../../components/common/Container";
import "./CheckoutPage.css";

const renderFormControls = (controls, handleChangeEvent) => {
	const arrayControls = Object.values(controls);

	return arrayControls.map((item) => (
		<div
			key={item.name}
			className={`form-control${!item.type ? " textarea" : ""}`}
		>
			<label>
				{item.label}
				{item.variant === "input" ? (
					<input {...item} onChange={handleChangeEvent} />
				) : (
					<textarea {...item} onChange={handleChangeEvent} />
				)}
			</label>
			<p>{item.error}</p>
		</div>
	));
};

const isAZipCode = (value) => {
	return value.match(/\d{5}/g);
};

const isATextOutNumbers = (value) => {
	return !value.match(/\d+/g);
};

const isEmail = (value) => {
	return value.match(/[a-zA-Z._0-9]+@[a-zA-Z]+\.[a-zA-Z]+/g);
};

const CheckoutPage = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(GlobalContext);
	const { cart } = useMemo(() => state, [state]);
	const [formData, setFormData] = useState(forms.checkout);
	const [hasError, setHasError] = useState(false);
	const [hasTouched, setHasTouched] = useState(false);
	const { setDataAction, statusRemoveCart } = useRemoveAllFromCart();

	const handleOnChange = useCallback(
		(event) => {
			const {
				target: { value },
				target: { name },
			} = event;
			let errorData = "";

			switch (formData[name].type) {
				case "number":
					errorData = isAZipCode(value) ? "" : "It is not a valid zip code.";
					break;
				case "text":
					errorData = isATextOutNumbers(value)
						? ""
						: "The input contains characters not valid.";
					break;
				case "email":
					errorData = isEmail(value) ? "" : "The email is not valid.";
					break;
				default:
					errorData = "";
					break;
			}

			if (formData[name].required && value === "") {
				errorData = "The field is required";
			}

			if (errorData !== "") {
				setHasError(true);
			} else {
				setHasError(false);
			}

			setHasTouched(true);

			setFormData({
				...formData,
				[name]: { ...formData[name], value, error: errorData },
			});
		},
		[formData]
	);

	const onBackToCart = useCallback(
		(e) => {
			e.preventDefault();
			if (hasTouched) {
				if (
					window.confirm("You have unsaved changes, do you want to continue?")
				) {
					history.push(PATHS.cart);
				}
			} else {
				history.push(PATHS.cart);
			}
			/* if (
				hasTouched &&
				window.confirm("You have unsaved changes, do you want to continue?")
			) {
				history.push(PATHS.cart);
			} */
		},
		[history, hasTouched]
	);

	const handleOnSubmit = useCallback(
		(e) => {
			e.preventDefault();

			if (!hasError) {
				setDataAction({ dispatch });
			} else {
				window.alert(
					"You have errors in the form, please complete the form correctly"
				);
			}
		},
		[hasError, setDataAction, dispatch]
	);

	useEffect(() => {
		if (cart.length < 1) {
			history.push(PATHS.default);
		}
	}, [cart, history]);

	useEffect(() => {
		if (statusRemoveCart.removed && statusRemoveCart.value) {
			toast.success("The order has been realized, thanks!");
			history.push(PATHS.default);
		}
	}, [statusRemoveCart, history]);

	return (
		<Container inner={true}>
			<Title Level={titleLevels.h1}>Checkout</Title>

			<div className="row">
				<form action="#" className="form" onSubmit={handleOnSubmit}>
					<div className="data">
						<Title Level={titleLevels.h3}>Personal data</Title>

						{renderFormControls(formData, handleOnChange)}
					</div>

					<div className="resume">
						<Title Level={titleLevels.h3}>Resume</Title>

						{cart && cart.length > 0 && (
							<Table
								variant={tableVariants.resume}
								data={{
									cols: ["Product name", "Unit price", "Cuantity", "Subtotal"],
									rows: cart,
								}}
							/>
						)}
					</div>

					<div className="actions">
						<div className="flex ai-center jc-space-between">
							<button className="btn btn-outline" onClick={onBackToCart}>
								BACK TO CART
							</button>
							<Button variant={buttonVariants.primary}>MAKE AN ORDER</Button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default CheckoutPage;
