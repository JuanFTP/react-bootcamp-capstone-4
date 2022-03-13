import Banner from "../../components/layout/Banner";
import Container from "../../components/common/Container";
import Title, { titleLevels } from "./../../components/common/Title";
import ListCategories from "./../../components/layout/ListCategories";
import ListProducts from "./../../components/layout/ListProducts";
import Button, { buttonVariants } from "./../../components/common/Button";

const Main = ({ banners, categories, products, onChangeLocation }) => {
	return (
		<div>
			<Banner banners={banners} />

			<Container>
				<div className="row">
					<div className="row">
						<div className="flex ai-top jc-space-between">
							<Title Level={titleLevels.H3}>CATEGORIES</Title>
							<Button variant={buttonVariants.outline}>
								VIEW ALL CATEGORIES X
							</Button>
						</div>
					</div>
					<br />
					{categories && <ListCategories categories={categories} />}
				</div>
				<div className="row">
					<div className="row">
						<div className="flex ai-top jc-space-between">
							<Title Level={titleLevels.H3}>
								RECOMMENDED PRODUCTS
							</Title>
							<Button
								variant={buttonVariants.outline}
								value={"products"}
								onClickItem={onChangeLocation}
							>
								VIEW ALL PRODUCTS
							</Button>
						</div>
					</div>
					<br />
					{products && products.length > 0 ? (
						<ListProducts
							def={4}
							xl={4}
							md={3}
							sm={2}
							xsm={1}
							minmax={320}
							products={products}
						/>
					) : (
						<Title Level={titleLevels.H4}>No products</Title>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Main;
