import "./Brand.css";
import logo from "./../../../media/image/avatar.jpg";

const Brand = () => {
	return (
		<div className="brand">
			<div className="image round">
				<img src={logo} alt="" />
			</div>
			<h2>Store</h2>
		</div>
	);
};

export default Brand;
