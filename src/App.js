import "./App.css";
import logo from "./media/image/avatar.jpg";

const App = () => {
	return (
		<div className="app">
			<div className="header shadow">
				<div className="flex align-items-center justify-content-space-between">
					<div className="brand">
						<div className="image round">
							<img src={logo} alt="" />
						</div>
						<h2>Store</h2>
					</div>

					<div className="form-control round feedback">
						<div className="icon-area">Icon</div>
						<div className="input">
							<input
								value=""
								type="text"
								placeholder="Type any and press enter for search"
								onChange={() => {
									console.log("On change");
								}}
							/>
						</div>
					</div>

					<div className="actions">
						<div className="stats">
							<div className="icon-area">Icon</div>
							<div className="chip">0</div>
						</div>
					</div>
				</div>
			</div>

			<div className="banner">
				<div className="carousel">
					<div className="slide">
						<p>Slide 1</p>
					</div>
					<div className="slide">
						<p>Slide 2</p>
					</div>
					<div className="slide">
						<p>Slide 3</p>
					</div>
				</div>
				<div className="controls">
					<div className="flex align-items-center justify-content-center">
						<div className="actions">
							<div className="icon-area">Icon</div>
							<div className="icon-area">Icon</div>
							<div className="icon-area">Icon</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3>CATEGORIES</h3>
					<div className="slider">
						<div className="card category">Category 1</div>
						<div className="card category">Category 2</div>
						<div className="card category">Category 3</div>
						<div className="card category">Category 4</div>
						<div className="card category">Category 5</div>
					</div>
				</div>

				<div className="row">
					<h3>PRODUCTS</h3>
					<div className="tools">
						<div className="flex align-items-center justify-content-space-between">
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
					<div className="products">
						<div className="card product">Product 1</div>
						<div className="card product">Product 2</div>
						<div className="card product">Product 3</div>
						<div className="card product">Product 4</div>
						<div className="card product">Product 5</div>
						<div className="card product">Product 6</div>
						<div className="card product">Product 7</div>
						<div className="card product">Product 8</div>
						<div className="card product">Product 9</div>
						<div className="card product">Product 10</div>
						<div className="card product">Product 11</div>
						<div className="card product">Product 12</div>
					</div>
					<div className="pagination">
						<div className="flex align-items-center justify-content-space-between">
							<div className="icon-area">Icon</div>
							<div className="pages">
								<div className="page">
									<div className="icon-area">1</div>
								</div>
								<div className="page active">
									<div className="icon-area">2</div>
								</div>
								<div className="page">
									<div className="icon-area">3</div>
								</div>
							</div>
							<div className="icon-area">Icon</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="footer">
				<div className="flex align-items-center justify-content-center">
					<p>
						Ecommerce created during Wizeline’s Academy React
						Bootcamp
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
