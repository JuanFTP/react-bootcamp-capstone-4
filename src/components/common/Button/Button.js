import "./Button.css";

export const buttonVariants = {
	outline: "outline",
	primary: "primary",
	default: "default",
};

const Button = ({ children, variant }) => {
	return (
		<button className={`btn btn-${buttonVariants[variant]}`}>
			{children}
		</button>
	);
};

export default Button;
