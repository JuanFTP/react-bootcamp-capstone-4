import "./Brand.css";
import logo from "./../../../media/logo.svg";
import { APP_NAME } from "./../../../utils/constants";
import Title, { titleLevels } from "./../../common/Title";

const Brand = ({ value, onClickItem }) => {
	return (
		<div
			className="brand"
			onClick={() => onClickItem && value && onClickItem(value)}
		>
			<div className="image round">
				<img src={logo} alt="" />
			</div>
			<Title Level={titleLevels.H2}>{APP_NAME}</Title>
		</div>
	);
};

export default Brand;
