import PropTypes from "prop-types";
import logo from "./../../../media/logo.svg";
import { APP_NAME } from "./../../../utils/constants";
import Title, { titleLevels } from "./../../common/Title";
import "./Brand.css";

const Brand = ({ handleOnClick }) => {
	return (
		<div className="brand" onClick={handleOnClick}>
			<img src={logo} alt="" />
			<Title Level={titleLevels.h2}>{APP_NAME}</Title>
		</div>
	);
};

Brand.propTypes = {
	handleOnClick: PropTypes.func,
};

export default Brand;
