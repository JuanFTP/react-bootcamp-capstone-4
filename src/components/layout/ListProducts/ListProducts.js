import PropTypes from "prop-types";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Card, { cardVariants } from "../../common/Card";
import Chip, { chipVariants } from "../../common/Chip";
import imgDefault from "./../../../media/product.jfif";
import SkListProducts from "./../../../utils/skeletons/SkListProducts";
import { getFormattedPrice, getFormattedSlug } from "./../../../utils/utils";
import Grid from "./../../common/Grid/Grid";
import IconArea from "./../../common/IconArea/IconArea";
import ImageBackground from "./../../common/ImageBackground/ImageBackground";
import Title, { titleLevels } from "./../../common/Title";

const getListProducts = (products) => {
	return products.map((product) => {
		return (
			<Link key={product.id} to={`/product/${product.id}`}>
				<Card variant={cardVariants.product}>
					<ImageBackground
						media={
							product.image.url && product.image.url !== ""
								? product.image.url
								: imgDefault
						}
						h={"320px"}
					/>

					<div className="data">
						<div className="row">
							<div className="flex ai-center jc-start">
								<Title Level={titleLevels.h4}>
									{product.name}
								</Title>
								<Chip variant={chipVariants.sm}>
									{product.category.slug &&
										getFormattedSlug(product.category.slug)}
								</Chip>
							</div>
							<span className="sku">{product.sku}</span>
						</div>
						<div className="row">
							<div className="flex ai-center jc-space-between">
								<Title Level={titleLevels.h3}>
									{`$ ${getFormattedPrice(product.price)}`}
								</Title>
								<IconArea>
									<MdAddShoppingCart />
								</IconArea>
							</div>
						</div>
					</div>
				</Card>
			</Link>
		);
	});
};

const ListProducts = ({ products, def, xl, md, sm, xsm, minmax }) => {
	return (
		<Grid default={def} xl={xl} md={md} sm={sm} xsm={xsm} minmax={minmax}>
			{products && products.length > 0 ? (
				getListProducts(products)
			) : (
				<SkListProducts />
			)}
		</Grid>
	);
};

ListProducts.propTypes = {
	products: PropTypes.array,
	def: PropTypes.number.isRequired,
	xl: PropTypes.number.isRequired,
	md: PropTypes.number.isRequired,
	sm: PropTypes.number.isRequired,
	xsm: PropTypes.number.isRequired,
	minmax: PropTypes.number.isRequired,
};

export default ListProducts;
