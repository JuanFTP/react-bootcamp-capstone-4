import Card, { cardVariants } from "../../common/Card";
import imgDefault from "./../../../media/image/category_001.jpg";
import Title, { titleLevels } from "./../../common/Title";

const getListCategories = (categories) => {
	return categories.map((category) => {
		return (
			<Card key={category.id} variant={cardVariants.category}>
				<div className="image">
					<img
						src={
							category.image !== "" ? category.image : imgDefault
						}
						alt=""
					/>
				</div>
				<div className="data">
					<div className="flex ai-center jc-center">
						<Title Level={titleLevels.H4}>{category.name}</Title>
					</div>
				</div>
			</Card>
		);
	});
};

const ListCategories = ({ categories }) => {
	return (
		categories && (
			<div className="grid max">{getListCategories(categories)}</div>
		)
	);
};

export default ListCategories;
