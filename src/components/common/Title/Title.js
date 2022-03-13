import "./Title.css";
import PropTypes from "prop-types";

export const titleLevels = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
};

const Title = ({ children, Level }) => {
	return <Level>{children}</Level>;
};

Title.propTypes = {
	children: PropTypes.node.isRequired,
	Level: PropTypes.oneOf(Object.keys(titleLevels)),
};

export default Title;
