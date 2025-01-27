import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { GlobalContext } from "../../../reducers/Global";
import Card, { cardVariants } from "../../common/Card";
import Chip, { chipVariants } from "../../common/Chip";
import imgDefault from "./../../../media/product.jfif";
import { PATHS } from "./../../../utils/constants";
import SkListProducts from "./../../../utils/skeletons/SkListProducts";
import { getFormattedPrice, getFormattedSlug } from "./../../../utils/utils";
import Grid from "./../../common/Grid";
import IconArea from "./../../common/IconArea";
import ImageBackground from "./../../common/ImageBackground";
import Title, { titleLevels } from "./../../common/Title";

const getListProducts = (products, onAddToCart) => {
	return products.map((product) => {
		const productLink = `${PATHS.product}/${product.id}`;

		return (
			<Card key={product.id} variant={cardVariants.product}>
				<Link to={productLink}>
					<ImageBackground
						media={
							product.image.url && product.image.url !== ""
								? product.image.url
								: imgDefault
						}
						h={"320px"}
					/>
				</Link>

				<div className="data">
					<div className="row">
						<div className="flex ai-center jc-start">
							<Link to={productLink}>
								<Title Level={titleLevels.h4}>{product.name}</Title>
							</Link>
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
							<IconArea onClicketItem={onAddToCart} value={product}>
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
	const { state, dispatch } = useContext(GlobalContext);
	const { setDataToAdd, statusAdd } = useAddToCart();

	useEffect(() => {
		if (statusAdd.added) {
			toast.success("The product has been added to the cart.");
		} else {
			if (statusAdd.id !== "") {
				toast.warning(
					"Sorry, the product has not been added as it has reached the stock limit."
				);
			}
		}
	}, [statusAdd]);

	const onAddToCart = (product) => {
		setDataToAdd({ cart: state.cart, product, cuantity: 1, dispatch });
	};

	return (
		<Grid default={def} xl={xl} md={md} sm={sm} xsm={xsm} minmax={minmax}>
			{products && products.length > 0 ? (
				getListProducts(products, onAddToCart)
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

export default React.memo(ListProducts);
