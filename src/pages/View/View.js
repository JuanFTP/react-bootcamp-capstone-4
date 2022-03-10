import ProductsPage from "./../ProductsPage";
import Main from "./../Main";

const getViewOfPage = (location, onChangeLocation) => {
	switch (location) {
		case "main":
			return <Main onChangeLocation={onChangeLocation} />;
		case "products":
			return <ProductsPage onChangeLocation={onChangeLocation} />;
		default:
			return <Main onChangeLocation={onChangeLocation} />;
	}
};

const View = ({ location, onChangeLocation }) => {
	return location && getViewOfPage(location, onChangeLocation);
};

export default View;
