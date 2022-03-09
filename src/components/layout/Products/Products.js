import Title, { titleLevels } from "./../../common/Title";
import Toolbar from "./../Toolbar/Toolbar";
import ListProducts from "./../ListProducts/ListProducts";
import Pagination from "./../Pagination/Pagination";

const Products = ({ products, categories }) => {
	const filters = {
		instruction: "Category",
		options: categories,
	};

	const pages = [
		{
			id: 1,
			number: 1,
			isActive: true,
		},
		{
			id: 2,
			number: 2,
			isActive: false,
		},
		{
			id: 3,
			number: 3,
			isActive: false,
		},
		{
			id: 4,
			number: 4,
			isActive: false,
		},
		{
			id: 5,
			number: 5,
			isActive: false,
		},
	];

	return products && products.length > 0 ? (
		<div className="row">
			<Title Level={titleLevels.H3}>PRODUCTS</Title>
			<Toolbar filters={filters} />
			<ListProducts products={products} />
			<Pagination pages={pages} />
		</div>
	) : (
		<Title Level={titleLevels.H4}>No products</Title>
	);
};

export default Products;
