import PropTypes from "prop-types";
import React from "react";
import "./Title.css";

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

export default React.memo(Title);
