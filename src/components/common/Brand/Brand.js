import "./Brand.css";
import PropTypes from "prop-types";
import logo from "./../../../media/logo.svg";
import { APP_NAME } from "./../../../utils/constants";
import Title, { titleLevels } from "./../../common/Title";

const Brand = ({ handleOnClick }) => {
	return (
		<div className="brand" onClick={handleOnClick}>
			<div className="image round">
				<img src={logo} alt="" />
			</div>
			<Title Level={titleLevels.h2}>{APP_NAME}</Title>
		</div>
	);
};

Brand.propTypes = {
	handleOnClick: PropTypes.func,
};

export default Brand;
