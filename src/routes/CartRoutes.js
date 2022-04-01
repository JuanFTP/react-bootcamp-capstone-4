import { Route } from "react-router-dom";
import CartPage from "./../pages/CartPage";
import CheckoutPage from "./../pages/CheckoutPage";
import { PATHS } from "./../utils/constants";
const General = () => {
	return (
		<Route
			exact
			path={`${PATHS.cart}${PATHS.checkout}`}
			component={CheckoutPage}
		>
			<Route exact path={PATHS.cart} component={CartPage} />
		</Route>
	);
};

export default General;
