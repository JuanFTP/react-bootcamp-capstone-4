import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card, { cardVariants } from "../../common/Card";
import imgDefault from "./../../../media/category.jpg";
import Title, { titleLevels } from "./../../common/Title";
import ImageBackgrund from "./../../common/ImageBackground";
import Grid from "./../../common/Grid/Grid";
import SkListCategoriesCards from "./../../../utils/skeletons/SkListCategoriesCards";

const getListCategories = (categories) => {
	return categories.map((category) => {
		return (
			<Link key={category.id} to={`/products/${category.id}`}>
				<Card variant={cardVariants.category}>
					<ImageBackgrund
						media={
							category.image.url && category.image.url !== ""
								? category.image.url
								: imgDefault
						}
						h={"160px"}
					/>
					<div className="data">
						<div className="flex ai-center jc-center">
							<Title Level={titleLevels.h4}>{category.name}</Title>
						</div>
					</div>
				</Card>
			</Link>
		);
	});
};

const ListCategories = ({ categories }) => {
	return (
		categories && (
			<Grid default={5} xl={4} md={3} sm={2} xsm={1} minmax={200}>
				{categories && categories.length > 0 ? (
					getListCategories(categories)
				) : (
					<SkListCategoriesCards />
				)}
			</Grid>
		)
	);
};

ListCategories.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default ListCategories;
