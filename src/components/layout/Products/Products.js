import Title, { titleLevels } from "./../../common/Title";
import ListProducts from "./../ListProducts/ListProducts";
import Button, { buttonVariants } from "./../../common/Button";

const Products = ({ products, title, onChangeLocation }) => {
	return (
		<div className="row">
			<div className="row">
				<div className="flex ai-top jc-space-between">
					{title && <Title Level={titleLevels.H3}>{title}</Title>}
					<Button
						variant={buttonVariants.outline}
						value={"products"}
						onClickItem={onChangeLocation}
					>
						VIEW ALL PRODUCTS
					</Button>
				</div>
			</div>
			<br />
			{products ? (
				<ListProducts products={products} limit={12} />
			) : (
				<Title Level={titleLevels.H4}>No products</Title>
			)}
		</div>
	);
};

export default Products;
