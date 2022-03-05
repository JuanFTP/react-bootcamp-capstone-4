import category from "./../../../media/image/category_001.jpg";

const Categories = () => {
	return (
		<div className="row">
			<div className="row">
				<div className="flex ai-top jc-space-between">
					<h3>CATEGORIES</h3>
					<button className="btn btn-outline">
						VIEW ALL CATEGORIES{" "}
					</button>
				</div>
			</div>
			<div className="grid max">
				<div className="card category">
					<div className="image">
						<img src={category} alt="" />
					</div>
					<div className="data">
						<div className="flex ai-center jc-center">
							<h4>CATEGORY</h4>
						</div>
					</div>
				</div>
				<div className="card category">
					<div className="image">
						<img src={category} alt="" />
					</div>
					<div className="data">
						<div className="flex ai-center jc-center">
							<h4>CATEGORY</h4>
						</div>
					</div>
				</div>
				<div className="card category">
					<div className="image">
						<img src={category} alt="" />
					</div>
					<div className="data">
						<div className="flex ai-center jc-center">
							<h4>CATEGORY</h4>
						</div>
					</div>
				</div>
				<div className="card category">
					<div className="image">
						<img src={category} alt="" />
					</div>
					<div className="data">
						<div className="flex ai-center jc-center">
							<h4>CATEGORY</h4>
						</div>
					</div>
				</div>
				<div className="card category">
					<div className="image">
						<img src={category} alt="" />
					</div>
					<div className="data">
						<div className="flex ai-center jc-center">
							<h4>CATEGORY</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
