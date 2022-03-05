import Title, { titleLevels } from "./../../common/Title";
import Toolbar from "./../Toolbar/Toolbar";
import ListProducts from "../ListProducts/ListProducts";
import Pagination from "../Pagination/Pagination";

const Products = () => {
	const products = [
		{
			id: 1,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 2,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 3,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 4,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 5,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 6,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 7,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 8,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 9,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 10,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 11,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
		{
			id: 12,
			image: "",
			name: "Product name",
			category: "Category",
			sku: "12345678926",
			price: 5643.22,
		},
	];

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

	return products.length > 0 ? (
		<div className="row">
			<Title Level={titleLevels.H3}>PRODUCTS</Title>
			<Toolbar />
			<ListProducts products={products} />
			<Pagination pages={pages} />
		</div>
	) : (
		<Title Level={titleLevels.H3}>No products</Title>
	);
};

export default Products;
