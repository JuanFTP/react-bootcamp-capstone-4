import "./Toolbar.css";
import Title, { titleLevels } from "./../../common/Title";
import FormControl from "./../FormControl";
import Select from "../../common/Select/Select";

const Toolbar = ({ filters }) => {
	return (
		<div className="toolbar">
			<div className="flex ai-center jc-space-between">
				<div className="instruction">
					<Title Level={titleLevels.H4}>Filter by</Title>
				</div>
				<div className="filters">
					<FormControl>
						<Select
							options={filters.options}
							instruction={filters.instruction}
						/>
					</FormControl>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
