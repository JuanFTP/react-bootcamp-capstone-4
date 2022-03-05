import "./Toolbar.css";

const Toolbar = () => {
	return (
		<div className="toolbar">
			<div className="flex ai-center jc-space-between">
				<div className="instruction">
					<h4>Filter by</h4>
				</div>
				<div className="filters">
					<div className="form-control">
						<select name="category" id="category">
							<option value="">Category</option>
							<option value="0">Category 1</option>
							<option value="1">Category 2</option>
							<option value="2">Category 3</option>
							<option value="3">Category 4</option>
							<option value="4">Category 5</option>
						</select>
					</div>

					<div className="form-control">
						<select name="category" id="category">
							<option value="">Price</option>
							<option value="0">Price 1</option>
							<option value="1">Price 2</option>
							<option value="2">Price 3</option>
							<option value="3">Price 4</option>
							<option value="4">Price 5</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
