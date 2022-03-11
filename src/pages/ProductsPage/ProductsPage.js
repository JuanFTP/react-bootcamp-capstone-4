import "./ProductsPage.css";
import styled from "styled-components";
import Header from "./../../components/layout/Header";
import Container from "./../../components/common/Container";
import Products from "./../../components/layout/Products";
import Footer from "./../../components/layout/Footer";
import Title, { titleLevels } from "./../../components/common/Title";
import { useState } from "react";

const Chip = styled.span`
	display: inline-block;
	background-color: var(--light);
	padding: 8px 16px;
	font-size: 0.9rem;
	margin: 8px 8px 8px 0px;
	font-weight: 600;
	border-radius: 16px;
	color: var(--default);
	cursor: pointer;

	:hover {
		transition: var(--transition);
		box-shadow: var(--shadow);
	}

	&.active {
		background-color: var(--dark);
		color: var(--white);
	}
`;

const getCategoriesChips = (categories) =>
	categories &&
	categories.map((category) => (
		<Chip key={category.id}>{category.name}</Chip>
	));

const ProductsPage = ({ products, categories, onChangeLocation }) => {
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const [productsFilter, setProductsFilters] = useState([]);

	return (
		<div>
			<Header onChangeLocation={onChangeLocation} />

			<Container inner={true}>
				<div className="flex ai-top jc-space-between">
					<div className="sidebar row">
						<Title Level={titleLevels.H3}>CATEGORIES</Title>
						<div className="categories">
							{categories && getCategoriesChips(categories)}
						</div>
					</div>
					<div className="results">
						<Products products={products} title="PRODUCTS" />
					</div>
				</div>
			</Container>

			<Footer />
		</div>
	);
};

export default ProductsPage;
