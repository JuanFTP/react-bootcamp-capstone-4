import PropTypes from "prop-types";
import logo_dark from "./../../../media/logo_dark.svg";
import logo_light from "./../../../media/logo_light.svg";
import { APP_NAME } from "./../../../utils/constants";
import Title, { titleLevels } from "./../../common/Title";
import "./Brand.css";

const Brand = ({ handleOnClick, value, mode }) => {
	return (
		<div
			className="brand"
			onClick={() => handleOnClick && handleOnClick(value)}
		>
			<img src={mode === "light" ? logo_light : logo_dark} alt="Brand" />
			<Title Level={titleLevels.h2}>{APP_NAME}</Title>
		</div>
	);
};

Brand.propTypes = {
	handleOnClick: PropTypes.func,
	value: PropTypes.any.isRequired,
	mode: PropTypes.string.isRequired,
};

export default Brand;
