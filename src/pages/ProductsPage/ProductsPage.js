import "./ProductsPage.css";
import Header from "./../../components/layout/Header";
import Container from "./../../components/common/Container";
import Products from "./../../components/layout/Products";
import Footer from "./../../components/layout/Footer";
import Title, { titleLevels } from "./../../components/common/Title";
import Chip, { chipVariants } from "./../../components/common/Chip";
import { useEffect, useState } from "react";

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

const ProductsPage = ({ products, categories, onChangeLocation }) => {
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

	useEffect(() => {
		const productsFiltered = getProductsFiltered(categoriesList, products);
		setproductsFil(productsFiltered);
	}, [categoriesList, products]);

	return (
		<div>
			<Header onChangeLocation={onChangeLocation} />

			<Container inner={true}>
				<div className="flex ai-top jc-space-between">
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
						<Products products={productsFil} title="PRODUCTS" />
					</div>
				</div>
			</Container>

			<Footer />
		</div>
	);
};

export default ProductsPage;
