import "./ProductsPage.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCategories } from "./../../hooks/useCategories";
import { useProducts } from "./../../hooks/useProducts";
import Header from "./../../components/layout/Header";
import Footer from "./../../components/layout/Footer";
import Container from "./../../components/common/Container";
import Title, { titleLevels } from "./../../components/common/Title";
import Chip, { chipVariants } from "./../../components/common/Chip";
import ListProducts from "./../../components/layout/ListProducts";
import ListPages from "./../../components/layout/ListPages/ListPages";
import Button, { buttonVariants } from "./../../components/common/Button";
import { MdClose } from "react-icons/md";
import SkListCategoriesChips from "./../../utils/skeletons/SkListCategoriesChips";
import IconArea from "./../../components/common/IconArea/IconArea";

const getProductsFiltered = (products, categoriesList) => {
	return categoriesList && products && categoriesList.length > 0
		? products.filter((product) =>
				categoriesList.includes(product.category.id)
		  )
		: products;
};

const ProductsPage = () => {
	const [filterPath, setFilterPath] = useState(false);
	const { categoryKey } = useParams();

	const [productsFil, setproductsFil] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);

	const { categories } = useCategories();
	const { products } = useProducts();

	if (categoryKey && !filterPath && !categoriesList.includes(categoryKey)) {
		setCategoriesList((categoriesList) =>
			categoriesList.length > 0
				? [...categoriesList, categoryKey]
				: [categoryKey]
		);
		setFilterPath(!filterPath);
	}

	const onClearAllFilters = () => {
		if (categoriesList.length > 0) {
			setCategoriesList([]);
		}
	};

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
		const productsFiltered = getProductsFiltered(products, categoriesList);
		setproductsFil(productsFiltered);
	}, [products, categoriesList]);

	return (
		<>
			<Header />
			<Container inner={true}>
				<div className="products-view flex ai-top jc-space-between">
					<div className="sidebar row">
						<div className="categories">
							<div className="flex ai-top jc-space-between">
								<Title Level={titleLevels.h3}>CATEGORIES</Title>
								{categoriesList.length > 0 && (
									<IconArea
										onClicketItem={onClearAllFilters}
										value={"all"}
									>
										<MdClose />
									</IconArea>
								)}
							</div>
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
										limit={16}
										offset={0}
									/>

									<ListPages pages={[]} />
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
};

export default ProductsPage;
