import { useEffect, useState } from "react";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useParams } from "react-router-dom";
import Button, { buttonVariants } from "./../../components/common/Button";
import Chip, { chipVariants } from "./../../components/common/Chip";
import Container from "./../../components/common/Container";
import IconArea from "./../../components/common/IconArea/IconArea";
import Input, { inputTypes } from "./../../components/common/Input";
import Table from "./../../components/common/Table";
import Title, { titleLevels } from "./../../components/common/Title";
import Footer from "./../../components/layout/Footer";
import FormControl from "./../../components/layout/FormControl/FormControl";
import Header from "./../../components/layout/Header";
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
	const [pieces, setPieces] = useState(0);

	const modifyPieces = (mode) => {
		if (mode === "INC" && pieces < product.stock) {
			setPieces((pieces) => pieces + 1);
		} else if (mode === "DEC") {
			setPieces((pieces) =>
				pieces > 1 && product.stock > 0 ? pieces - 1 : 1
			);
		}
	};

	useEffect(() => {
		if (product.stock > 0) {
			setPieces(1);
		}
	}, [product.stock]);

	return (
		<>
			<Header />

			<Container inner={true}>
				{product && Object.keys(product).length > 0 ? (
					<div className="row">
						<div className="product-view flex ai-top jc-space-between">
							<div className="gallery">
								<Skeleton style={{ minHeight: "80%" }} />
							</div>
							<div className="details">
								<div className="information">
									<Title Level={titleLevels.h2}>
										{product.name}
									</Title>
									<Title Level={titleLevels.h2}>
										{`$ ${getFormattedPrice(
											product.price
										)}`}
									</Title>
									<span className="sku">{product.sku}</span>
								</div>

								<div className="category">
									<Title Level={titleLevels.h4}>
										Category
									</Title>
									<Link
										to={`${PATHS.products}/${product.category.id}`}
									>
										<Chip variant={chipVariants.xl}>
											{getCapitalize(
												product.category.slug
											)}
										</Chip>
									</Link>
								</div>

								<div className="slugs">
									<Title Level={titleLevels.h4}>Slugs</Title>
									<div>
										{product.slugs.map((slug) => (
											<Chip
												key={slug}
												variant={chipVariants.sm}
											>
												{getFormattedSlug(slug)}
											</Chip>
										))}
									</div>
								</div>

								<div className="description">
									<Title Level={titleLevels.h4}>
										Description
									</Title>
									<p>{product.description}</p>
								</div>

								<div className="items">
									<Title Level={titleLevels.h4}>
										Items ({product.stock} available)
									</Title>
									<div className="controls">
										<div className="flex ai-center jc-start">
											<IconArea
												onClicketItem={modifyPieces}
												value="DEC"
											>
												<MdOutlineRemove />
											</IconArea>
											<FormControl
												width="96px"
												feedback={false}
												round={false}
											>
												<Input
													variant={inputTypes.number}
													value={pieces}
													placeholder={"0"}
													read={true}
												/>
											</FormControl>
											<IconArea
												onClicketItem={modifyPieces}
												value="INC"
											>
												<MdAdd />
											</IconArea>

											<Button
												variant={buttonVariants.primary}
											>
												Add to cart
											</Button>
										</div>
									</div>
								</div>

								<div className="specs">
									<Title Level={titleLevels.h4}>Specs</Title>
									<Table data={product.specs} />
								</div>
							</div>
						</div>
					</div>
				) : (
					<SkProductDetails />
				)}
			</Container>

			<Footer />
		</>
	);
};

export default ProductPage;
