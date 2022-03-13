import "./Button.css";
import PropTypes from "prop-types";

export const buttonVariants = {
	outline: "outline",
	primary: "primary",
	default: "default",
};

const Button = ({ children, variant, value, onClickItem }) => {
	return (
		<button
			className={`btn btn-${buttonVariants[variant]}`}
			onClick={() => onClickItem && value && onClickItem(value)}
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

export default Button;
