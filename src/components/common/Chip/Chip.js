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

export default Chip;
