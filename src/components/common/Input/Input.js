import PropTypes from "prop-types";
import "./Input.css";

export const inputTypes = {
	text: "text",
	number: "number",
};

const Input = ({ type, value, placeholder, onChangeInput, read = false }) => {
	return (
		<div className="input">
			<input
				value={value}
				type={type && inputTypes[type]}
				placeholder={placeholder}
				onChange={onChangeInput}
				readOnly={read}
			/>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.oneOf(Object.keys(inputTypes)),
	value: PropTypes.any.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChangeInput: PropTypes.func,
	read: PropTypes.bool,
};

export default Input;
