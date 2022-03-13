import "./Input.css";

export const inputTypes = {
	text: "text",
	number: "number",
};

const Input = ({ value, type, onChangeInput }) => {
	return (
		<div className="input">
			<input
				value={value}
				type={type && inputTypes[type]}
				placeholder="Type for search"
				onChange={onChangeInput}
			/>
		</div>
	);
};

export default Input;
