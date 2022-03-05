import { MdAddShoppingCart } from "react-icons/md";
import Title, { titleLevels } from "./../../common/Title";
import imgDefault from "./../../../media/image/product_001.jfif";
import Card, { cardVariants } from "../../common/Card";
import Chip from "../../common/Chip";
import { chipVariants } from "../../common/Chip/Chip";
import IconArea from "../../common/IconArea/IconArea";

const getListProducts = (products) => {
	return products.map((product) => {
		return (
			<Card key={product.id} variant={cardVariants.product}>
				<div className="image">
					<img
						src={product.image !== "" ? product.image : imgDefault}
						alt=""
					/>
				</div>

				<div className="data">
					<div className="row">
						<div className="flex ai-center jc-start">
							<Title Level={titleLevels.H4}>{product.name}</Title>
							<Chip variant={chipVariants.sm}>
								{product.category}
							</Chip>
						</div>
						<span className="sku">{product.sku}</span>
					</div>
					<div className="row">
						<div className="flex ai-center jc-space-between">
							<Title Level={titleLevels.H3}>
								{`$ ${product.price}`}
							</Title>
							<IconArea>
								<MdAddShoppingCart />
							</IconArea>
						</div>
					</div>
				</div>
			</Card>
		);
	});
};

const ListProducts = ({ products }) => {
	return products && <div className="grid">{getListProducts(products)}</div>;
};

export default ListProducts;
