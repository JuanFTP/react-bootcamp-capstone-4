import Button, { buttonVariants } from "../../common/Button";
import ListCategories from "../ListCategories/ListCategories";
import Title, { titleLevels } from "./../../common/Title";

const Categories = () => {
	const categories = [
		{
			id: 1,
			image: "",
			name: "Category 1",
		},
		{
			id: 2,
			image: "",
			name: "Category 2",
		},
		{
			id: 3,
			image: "",
			name: "Category 3",
		},
		{
			id: 4,
			image: "",
			name: "Category 4",
		},
		{
			id: 5,
			image: "",
			name: "Category 5",
		},
	];

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
