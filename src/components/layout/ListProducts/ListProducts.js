import { MdAddShoppingCart } from "react-icons/md";
import Title, { titleLevels } from "./../../common/Title";
import imgDefault from "./../../../media/product.jfif";
import Card, { cardVariants } from "../../common/Card";
import Chip from "./../../common/Chip";
import { chipVariants } from "../../common/Chip/Chip";
import IconArea from "./../../common/IconArea/IconArea";
import ImageBackground from "./../../common/ImageBackground/ImageBackground";
import Grid from "./../../common/Grid/Grid";

const getCapitalize = (input) =>
	input.charAt(0).toUpperCase() + input.substring(1, input.length);

const getFormattedPrice = (price) =>
	new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
		price
	);

const getListProducts = (products) => {
	return products.map((product) => {
		return (
			<Card key={product.id} variant={cardVariants.product}>
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
							<Title Level={titleLevels.H4}>{product.name}</Title>
							<Chip variant={chipVariants.sm}>
								{product.category.slug &&
									getCapitalize(product.category.slug)}
							</Chip>
						</div>
						<span className="sku">{product.sku}</span>
					</div>
					<div className="row">
						<div className="flex ai-center jc-space-between">
							<Title Level={titleLevels.H3}>
								{`$ ${getFormattedPrice(product.price)}`}
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

const ListProducts = ({ products, def, xl, md, sm, xsm, minmax }) => {
	return (
		products && (
			<Grid
				default={def}
				xl={xl}
				md={md}
				sm={sm}
				xsm={xsm}
				minmax={minmax}
			>
				{getListProducts(products)}
			</Grid>
		)
	);
};

export default ListProducts;
