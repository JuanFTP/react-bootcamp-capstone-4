import React, { useState } from "react";
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
import { useProduct } from "./../../hooks/useProduct";
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
	const { product } = useProduct(productId);
	const [pieces, setPieces] = useState(1);

	const onChangePieces = (add) => {
		if (add) {
			setPieces((pieces) => (pieces < product.stock ? pieces + 1 : pieces));
		} else {
			setPieces((pieces) => (pieces > 1 ? pieces - 1 : pieces));
		}
	};

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
							<Title Level={titleLevels.h4}>
								Items ({product.stock} available)
							</Title>
							<div className="controls">
								<div className="flex ai-center jc-start">
									<IconArea onClicketItem={onChangePieces} value={false}>
										<MdOutlineRemove />
									</IconArea>

									<FormControl width="96px" feedback={false} round={false}>
										<Input
											variant={inputTypes.number}
											value={pieces}
											placeholder={"0"}
											isReadOnly={true}
										/>
									</FormControl>

									<IconArea onClicketItem={onChangePieces} value={true}>
										<MdAdd />
									</IconArea>

									<Button variant={buttonVariants.primary}>Add to cart</Button>
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
