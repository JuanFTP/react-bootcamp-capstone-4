import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductsPage.css";
import PropTypes from "prop-types";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";
import ListProducts from "./../../components/layout/ListProducts";
import Title, { titleLevels } from "./../../components/common/Title";
import Chip, { chipVariants } from "./../../components/common/Chip";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListPages from "../../components/layout/ListPages/ListPages";
import Grid from "../../components/common/Grid/Grid";
import Button, { buttonVariants } from "./../../components/common/Button";
import { useProductsCategories } from "./../../hooks/useProductsCategories";
import { useFeaturedProducts } from "./../../hooks/useFeaturedProducts";
import getCategories from "../../utils/transform/getCategories";
import getProducts from "../../utils/transform/getProducts";
import { useMemo } from "react";

const getCategoriesChips = (categories, categoriesList, onCategorySelected) =>
	categories &&
	categories.map((category) => (
		<Chip
			key={category.id}
			variant={chipVariants.xl}
			onClickItem={onCategorySelected}
			value={category.id}
			isActive={
				categoriesList.length > 0
					? categoriesList.includes(category.id)
					: false
			}
		>
			{category.name}
		</Chip>
	));

const getProductsFiltered = (categoriesList, products) => {
	return categoriesList.length > 0
		? products &&
				products.filter((product) =>
					categoriesList.includes(product.category.id)
				)
		: products;
};

//TODO Refinar código para generar el Skeleton
const getSkeleton = () => {
	const nItems = ["SK1", "SK2", "SK3", "SK4", "SK5", "SK6", "SK7", "SK8"];
	const nPages = ["SKP1", "SKP2", "SKP3", "SKP4", "SKP5"];
	return (
		<>
			<Grid default={4} xl={4} md={3} sm={2} xsm={1}>
				{nItems.map((id) => {
					return <Skeleton key={id} height={320} />;
				})}
			</Grid>
			<div
				className="flex ai-center jc-center"
				style={{ marginTop: "32px" }}
			>
				{nPages.map((id) => {
					return (
						<Skeleton
							key={id}
							height={48}
							width={48}
							style={{ margin: "0px 8px" }}
						/>
					);
				})}
			</div>
		</>
	);
};

const ProductsPage = () => {
	const [productsFil, setproductsFil] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);

	const responseCategories = useProductsCategories();
	const categories = getCategories(responseCategories.data.results);
	const responseProducts = useFeaturedProducts();
	const products = useMemo(
		() => getProducts(responseProducts.data.results),
		[responseProducts]
	);

	const onCategorySelected = (id) => {
		let newList = [];
		if (categoriesList.includes(id)) {
			newList = categoriesList.filter((categoryId) => categoryId !== id);
			setCategoriesList(newList);
		} else {
			newList =
				categoriesList.length > 0 ? [...categoriesList, id] : [id];
			setCategoriesList(newList);
		}
	};

	useEffect(() => {
		const productsFiltered = getProductsFiltered(categoriesList, products);
		setproductsFil(productsFiltered);
	}, [categoriesList, products]);

	const pages = [
		{
			id: 1,
			number: 1,
			active: true,
		},
		{
			id: 2,
			number: 2,
			active: false,
		},
		{
			id: 3,
			number: 3,
			active: false,
		},
		{
			id: 4,
			number: 4,
			active: false,
		},
		{
			id: 5,
			number: 5,
			active: false,
		},
	];

	return (
		<>
			<Header />
			<Container inner={true}>
				<div className="products-view flex ai-top jc-space-between">
					<div className="sidebar row">
						<Title Level={titleLevels.h3}>CATEGORIES</Title>
						<div className="categories">
							{categories &&
								getCategoriesChips(
									categories,
									categoriesList,
									onCategorySelected
								)}
						</div>
					</div>
					<div className="results">
						<div className="row">
							<div className="row">
								<div className="flex ai-top jc-space-between">
									<Title Level={titleLevels.h3}>
										PRODUCTS
									</Title>
									<Link to="/home">
										<Button
											variant={buttonVariants.outline}
										>
											GO TO HOME
										</Button>
									</Link>
								</div>
							</div>
							<br />
							{productsFil && productsFil.length > 0 ? (
								<>
									<ListProducts
										def={4}
										xl={3}
										md={2}
										sm={2}
										xsm={1}
										minmax={320}
										products={productsFil}
									/>
									<ListPages pages={pages} />
								</>
							) : (
								getSkeleton()
							)}
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	);
};

ProductsPage.propTypes = {
	products: PropTypes.array,
	categories: PropTypes.array,
	onChangeLocation: PropTypes.func,
};

export default ProductsPage;
