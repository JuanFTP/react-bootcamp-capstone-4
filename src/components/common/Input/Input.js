import "./Input.css";
import PropTypes from "prop-types";

export const inputTypes = {
	text: "text",
	number: "number",
};

const Input = ({ value, type, onChangeInput, read }) => {
	return (
		<div className="input">
			<input
				value={value}
				type={type && inputTypes[type]}
				placeholder="Type for search"
				onChange={onChangeInput}
				readOnly={true}
			/>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.oneOf(Object.keys(inputTypes)),
	onChangeInput: PropTypes.func,
	value: PropTypes.any.isRequired,
	read: PropTypes.bool,
};

export default Input;
