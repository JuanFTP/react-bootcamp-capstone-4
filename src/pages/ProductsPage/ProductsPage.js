import "./ProductsPage.css";
import PropTypes from "prop-types";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProductsCategories } from "./../../hooks/useProductsCategories";
import { useFeaturedProducts } from "./../../hooks/useFeaturedProducts";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";
import Title, { titleLevels } from "./../../components/common/Title";
import Chip, { chipVariants } from "./../../components/common/Chip";
import ListProducts from "./../../components/layout/ListProducts";
import ListPages from "./../../components/layout/ListPages/ListPages";
import Button, { buttonVariants } from "./../../components/common/Button";
import getCategories from "./../../utils/transform/getCategories";
import getProducts from "./../../utils/transform/getProducts";
import SkListCategoriesChips from "./../../utils/skeletons/SkListCategoriesChips";

const getProductsFiltered = (categoriesList, products) => {
	return categoriesList.length > 0
		? products.filter((product) =>
				categoriesList.includes(product.category.id)
		  )
		: products;
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
							{categories && categories.length > 0 ? (
								categories.map((category) => (
									<Chip
										key={category.id}
										variant={chipVariants.xl}
										onClickItem={onCategorySelected}
										value={category.id}
										isActive={
											categoriesList.length > 0
												? categoriesList.includes(
														category.id
												  )
												: false
										}
									>
										{category.name}
									</Chip>
								))
							) : (
								<SkListCategoriesChips />
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
							{
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
							}
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
