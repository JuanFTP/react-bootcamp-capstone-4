import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "./../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import ProductsPage from "./../pages/ProductsPage";
import SearchPage from "./../pages/SearchPage";
import { PATHS } from "./../utils/constants";

const General = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path={PATHS.default} component={HomePage} />
				<Route exact path={PATHS.home} component={HomePage} />
				<Route exact path={PATHS.cart} component={CartPage} />
				<Route
					exact
					path={PATHS.checkout}
					component={CheckoutPage}
				/>
				<Route
					exact
					path={PATHS.productFilterByProductId}
					component={ProductPage}
				/>
				<Route path={PATHS.searchByTerm} component={SearchPage} />
				<Route path={PATHS.productsFilterByCategory} component={ProductsPage} />
				<Route path={PATHS.products} component={ProductsPage} />
				<Redirect to={PATHS.default} />
			</Switch>

			<Footer />
		</Router>
	);
};

export default General;
