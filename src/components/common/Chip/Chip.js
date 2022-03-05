import "./Chip.css";

export const chipVariants = {
	sm: "sm",
};

const Chip = ({ children, variant }) => {
	console.log(variant);
	return (
		<div className={`chip ${variant && chipVariants[variant]}`}>
			{children}
		</div>
	);
};

export default Chip;
