import Title, { titleLevels } from "./../../common/Title";
import ListProducts from "./../ListProducts/ListProducts";

const Products = ({ products }) => {
	return products && products.length > 0 ? (
		<div className="row">
			<Title Level={titleLevels.H3}>RECOMMENDED PRODUCTS</Title>
			<ListProducts products={products} limit={12} />
		</div>
	) : (
		<Title Level={titleLevels.H4}>No products</Title>
	);
};

export default Products;
