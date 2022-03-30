import PropTypes from "prop-types";
import "./IconArea.css";

const IconArea = ({ children, onClicketItem, value }) => {
	return (
		<div
			className="icon-area"
			onClick={() => onClicketItem && onClicketItem(value)}
		>
			{children}
		</div>
	);
};

IconArea.propTypes = {
	children: PropTypes.node.isRequired,
	onClicketItem: PropTypes.func,
	value: PropTypes.any,
};

export default IconArea;
