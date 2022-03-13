import "./ProductsPage.css";
import Container from "./../../components/common/Container";
import ListProducts from "./../../components/layout/ListProducts";
import Title, { titleLevels } from "./../../components/common/Title";
import Chip, { chipVariants } from "./../../components/common/Chip";
import { useEffect, useState } from "react";
import ListPages from "../../components/layout/ListPages/ListPages";

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

const ProductsPage = ({ products, categories }) => {
	const [productsFil, setproductsFil] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);

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

	useEffect(() => {
		const productsFiltered = getProductsFiltered(categoriesList, products);
		setproductsFil(productsFiltered);
	}, [categoriesList, products]);

	return (
		<Container inner={true}>
			<div className="products-view flex ai-top jc-space-between">
				<div className="sidebar row">
					<Title Level={titleLevels.H3}>CATEGORIES</Title>
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
								<Title Level={titleLevels.H3}>PRODUCTS</Title>
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
							<Title Level={titleLevels.H4}>No products</Title>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ProductsPage;
