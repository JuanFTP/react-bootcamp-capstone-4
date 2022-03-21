import { useEffect, useState } from "react";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import IconArea from "../../components/common/IconArea/IconArea";
import Input, { inputTypes } from "../../components/common/Input";
import FormControl from "../../components/layout/FormControl/FormControl";
import Button, { buttonVariants } from "./../../components/common/Button";
import Chip, { chipVariants } from "./../../components/common/Chip";
import Container from "./../../components/common/Container";
import Title, { titleLevels } from "./../../components/common/Title";
import Footer from "./../../components/layout/Footer";
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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const getTable = (specs) => {
	return (
		<div className="table">
			<table>
				<tbody>
					{specs.map((spec) => {
						return (
							<tr key={spec.name.replace(" ", "-")}>
								<td>
									<strong>{spec.name}</strong>
								</td>
								<td>{spec.value}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

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
							<div
								className="gallery"
								style={{ minHeight: "520px" }}
							>
								<Skeleton height={"100%"} width={"100%"} />
							</div>
							<div className="data">
								<Title Level={titleLevels.h2}>
									{product.name}
								</Title>

								<Title Level={titleLevels.h2}>
									{`$ ${getFormattedPrice(product.price)}`}
								</Title>
								<span className="sku">{product.sku}</span>
								<br />
								<Link
									to={`${PATHS.products}/${product.category.id}`}
								>
									<Chip
										variant={chipVariants.xl}
										isActive={true}
									>
										{getCapitalize(product.category.slug)}
									</Chip>
								</Link>
								<br />
								<br />
								<Title Level={titleLevels.h4}>Tags</Title>
								{product.slugs && product.slugs.length > 0 && (
									<div className="slugs">
										{product.slugs.map((slug) => (
											<Chip
												key={slug}
												variant={chipVariants.sm}
											>
												{getFormattedSlug(slug)}
											</Chip>
										))}
									</div>
								)}
								<br />
								<p>{product.description}</p>
								<br />
								<Title Level={titleLevels.h4}>Items</Title>
								<div className="controls">
									<div className="flex ai-center jc-start">
										<IconArea
											onClicketItem={modifyPieces}
											value="DEC"
										>
											<MdOutlineRemove />
										</IconArea>
										<FormControl
											minWidth="96px"
											feedback={false}
											round={false}
										>
											<Input
												variant={inputTypes.number}
												value={pieces}
												onChangeInput={(e) =>
													console.log(e.target.value)
												}
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
						</div>
						<br />
						<br />
						<div className="row">
							<Title Level={titleLevels.h4}>Specs</Title>
							<br />
							{getTable(product.specs)}
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
