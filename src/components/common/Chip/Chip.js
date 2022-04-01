import PropTypes from "prop-types";
import React from "react";
import "./Chip.css";

export const chipVariants = {
	sm: "sm",
	xl: "xl",
};

const Chip = ({ children, variant, onClickItem, value, isActive }) => {
	return (
		<div
			className={`chip ${variant && chipVariants[variant]} ${
				isActive && "active"
			}`}
			onClick={() => onClickItem && value && onClickItem(value)}
		>
			{children}
		</div>
	);
};

Chip.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(Object.keys(chipVariants)),
	onClickItem: PropTypes.func,
	value: PropTypes.string,
	isActive: PropTypes.bool,
};

export default React.memo(Chip);
