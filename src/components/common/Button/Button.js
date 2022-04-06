import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export const buttonVariants = {
	outline: "outline",
	primary: "primary",
	default: "default",
};

const Button = ({ children, variant, onClickItem, value }) => {
	return (
		<button
			className={`btn btn-${buttonVariants[variant]}`}
			onClick={() => onClickItem && onClickItem(value)}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(Object.keys(buttonVariants)),
	value: PropTypes.string,
	onClickItem: PropTypes.func,
};

export default React.memo(Button);
