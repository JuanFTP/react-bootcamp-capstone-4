import { useCallback, useContext, useEffect, useState } from "react";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Button, { buttonVariants } from "./../../components/common/Button";
import Chip, { chipVariants } from "./../../components/common/Chip";
import Container from "./../../components/common/Container";
import IconArea from "./../../components/common/IconArea/IconArea";
import Input, { inputTypes } from "./../../components/common/Input";
import Table from "./../../components/common/Table";
import Title, { titleLevels } from "./../../components/common/Title";
import FormControl from "./../../components/layout/FormControl/FormControl";
import SwiperCarousel from "./../../components/layout/SwiperCarousel";
import { useAddToCart } from "./../../hooks/useAddToCart";
import { useProduct } from "./../../hooks/useProduct";
import { useRemoveToCart } from "./../../hooks/useRemoveToCart";
import { GlobalContext } from "./../../reducers/Global";
import { PATHS } from "./../../utils/constants";
import SkProductDetails from "./../../utils/skeletons/SkProductDetails";
import {
	getCapitalize,
	getFormattedPrice,
	getFormattedSlug,
} from "./../../utils/utils";
import "./ProductPage.css";

const ProductPage = () => {
	const { productId } = useParams();
	const { setDataToAdd, statusAdd } = useAddToCart();
	const { setDataToRemove, statusRemove } = useRemoveToCart();
	const { state, dispatch } = useContext(GlobalContext);
	const [index, setIndex] = useState(-1);
	const [legend, setLegend] = useState("ADD TO CART");
	const { cart } = state;
	const {
		product,
		product: { stock },
	} = useProduct(productId);
	const [pieces, setPieces] = useState(0);

	const onChangePieces = useCallback(
		(add) => {
			if (add) {
				setPieces(pieces < stock ? pieces + 1 : pieces);
			} else {
				setPieces(pieces > 0 ? pieces - 1 : pieces);
			}
		},
		[stock, pieces]
	);

	const onAddToCart = () => {
		if (index >= 0) {
			if (pieces === 0) {
				setDataToRemove({ cart, dispatch, productId: product.id });
			} else {
				let diff = pieces - cart[index].selected;
				setDataToAdd({ cart, product, cuantity: diff, dispatch });
			}
		} else {
			if (pieces > 0) {
				setDataToAdd({ cart, product, cuantity: pieces, dispatch });
			}
		}
	};

	useEffect(() => {
		if (statusAdd.added) {
			console.log(`The product: ${statusAdd.id} has been update`);
		} else {
			console.log(`The product: ${statusAdd.id} has not been update`);
		}
	}, [statusAdd]);

	useEffect(() => {
		if (statusRemove.removed) {
			console.log(`The product: ${statusRemove.id} has been removed`);
		} else {
			console.log(`The product: ${statusRemove.id} has not been removed`);
		}
	}, [statusRemove]);

	useEffect(() => {
		if (product.id) {
			setIndex(cart.map((item) => item.id).indexOf(product.id));
			if (index >= 0) {
				setPieces(cart[index] && cart[index].selected);
				setLegend("UPDATE CART");
			} else {
				setLegend("ADD TO CART");
			}
		}
	}, [product, cart, index]);

	return (
		<Container inner={true}>
			{product && Object.keys(product).length > 0 ? (
				<div className="product-view flex ai-top jc-space-between">
					<div className="gallery">
						<SwiperCarousel slides={product.images} />
					</div>
					<div className="details">
						<div className="information">
							<Title Level={titleLevels.h2}>{product.name}</Title>
							<Title Level={titleLevels.h2}>
								{`$ ${getFormattedPrice(product.price)}`}
							</Title>
							<span className="sku">{product.sku}</span>
						</div>

						<div className="category">
							<Title Level={titleLevels.h4}>Category</Title>
							<Link to={`${PATHS.products}/${product.category.id}`}>
								<Chip variant={chipVariants.xl}>
									{getCapitalize(product.category.slug)}
								</Chip>
							</Link>
						</div>

						<div className="slugs">
							<Title Level={titleLevels.h4}>Slugs</Title>
							<div>
								{product.slugs.map((slug) => (
									<Chip key={slug} variant={chipVariants.sm}>
										{getFormattedSlug(slug)}
									</Chip>
								))}
							</div>
						</div>

						<div className="description">
							<Title Level={titleLevels.h4}>Description</Title>
							<p>{product.description}</p>
						</div>

						<div className="items">
							<Title
								Level={titleLevels.h4}
							>{`Items (${stock} available)`}</Title>
							<div className="controls">
								<div className="flex ai-center jc-start">
									<IconArea onClicketItem={onChangePieces} value={false}>
										<MdOutlineRemove />
									</IconArea>

									<FormControl width="96px" feedback={false} round={false}>
										<Input
											variant={inputTypes.number}
											value={pieces ? pieces : 0}
											placeholder={"0"}
											isReadOnly={true}
										/>
									</FormControl>

									<IconArea onClicketItem={onChangePieces} value={true}>
										<MdAdd />
									</IconArea>

									{stock > 0 && (
										<Button
											variant={buttonVariants.primary}
											onClickItem={onAddToCart}
										>
											{legend}
										</Button>
									)}
								</div>
							</div>
						</div>

						<div className="specs">
							<Title Level={titleLevels.h4}>Specs</Title>
							<Table data={product.specs} />
						</div>
					</div>
				</div>
			) : (
				<SkProductDetails />
			)}
		</Container>
	);
};

export default ProductPage;
