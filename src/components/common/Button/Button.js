import "./Button.css";

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

export default Button;
