import Button, { buttonVariants } from "../../common/Button";
import ListCategories from "../ListCategories/ListCategories";
import Title, { titleLevels } from "./../../common/Title";

const Categories = ({ categories }) => {
	return (
		<div className="row">
			<div className="row">
				<div className="flex ai-top jc-space-between">
					<Title Level={titleLevels.H3}>CATEGORIES</Title>
					<Button variant={buttonVariants.outline}>
						VIEW ALL CATEGORIES
					</Button>
				</div>
			</div>
			{categories && <ListCategories categories={categories} />}
		</div>
	);
};

export default Categories;
