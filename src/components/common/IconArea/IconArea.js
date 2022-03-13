import "./IconArea.css";
import PropTypes from "prop-types";

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

IconArea.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.string,
	onClicketItem: PropTypes.func,
};

export default IconArea;
