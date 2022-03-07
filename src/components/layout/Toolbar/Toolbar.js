import "./Toolbar.css";
import Title, { titleLevels } from "./../../common/Title";
import FormControl from "./../FormControl";
import Select from "../../common/Select/Select";

const Toolbar = () => {
	const categories = [
		{
			id: 0,
			value: "Category 1",
		},
		{
			id: 1,
			value: "Category 2",
		},
		{
			id: 2,
			value: "Category 3",
		},
		{
			id: 3,
			value: "Category 4",
		},
		{
			id: 4,
			value: "Category 5",
		},
	];

	return (
		<div className="toolbar">
			<div className="flex ai-center jc-space-between">
				<div className="instruction">
					<Title Level={titleLevels.H4}>Filter by</Title>
				</div>
				<div className="filters">
					<FormControl>
						<Select options={categories} instruction="Category" />
					</FormControl>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
