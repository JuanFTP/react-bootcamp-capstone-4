import "./App.css";
import { PATHS } from "./utils/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={PATHS.home} component={Home} />
				<Route exact path={PATHS.default} component={Home} />
				<Route path={PATHS.product} component={ProductPage} />
				<Route path={PATHS.categoryFilter} component={ProductsPage} />
				<Route path={PATHS.products} component={ProductsPage} />
				<Route path={PATHS.search} component={SearchPage} />
				<Route component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
