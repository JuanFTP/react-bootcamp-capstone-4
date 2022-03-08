import "./IconArea.css";

const IconArea = ({ children, value, onClicketItem }) => {
	return (
		<div
			className="icon-area"
			onClick={() => onClicketItem && value && onClicketItem(value)}
		>
			{children}
		</div>
	);
};

export default IconArea;
