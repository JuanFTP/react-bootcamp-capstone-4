import Title, { titleLevels } from "./../../common/Title";
import ListProducts from "./../ListProducts";

const Products = ({ products, title, children }) => {
	return (
		<div className="row">
			<div className="row">
				<div className="flex ai-top jc-space-between">
					{title && <Title Level={titleLevels.H3}>{title}</Title>}
					{children}
				</div>
			</div>
			<br />
			{products && products.length > 0 ? (
				<ListProducts products={products} limit={12} />
			) : (
				<Title Level={titleLevels.H4}>No products</Title>
			)}
		</div>
	);
};

export default Products;
