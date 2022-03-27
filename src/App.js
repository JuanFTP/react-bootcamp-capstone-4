import "./App.css";
import { PATHS } from "./utils/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={PATHS.home} component={HomePage} />
				<Route exact path={PATHS.default} component={HomePage} />
				<Route exact path={PATHS.product} component={ProductPage} />
				<Route path={PATHS.searchFilter} component={SearchPage} />
				<Route path={PATHS.categoryFilter} component={ProductsPage} />
				<Route path={PATHS.products} component={ProductsPage} />
				<Route component={HomePage} />
			</Switch>
		</Router>
	);
};

export default App;
