import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/" component={Home} />
				<Route path="/products/:categoryKey" component={ProductsPage} />
				<Route path="/products" component={ProductsPage} />
				<Route component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
