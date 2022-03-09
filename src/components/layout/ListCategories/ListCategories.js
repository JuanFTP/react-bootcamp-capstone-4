import Card, { cardVariants } from "../../common/Card";
import imgDefault from "./../../../media/category.jpg";
import Title, { titleLevels } from "./../../common/Title";
import ImageBackgrund from "./../../common/ImageBackground";

const getListCategories = (categories) => {
	return categories.map((category) => {
		return (
			<Card key={category.id} variant={cardVariants.category}>
				<ImageBackgrund
					media={
						category.image.url && category.image.url !== ""
							? category.image.url
							: imgDefault
					}
					h={"195px"}
				/>
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
