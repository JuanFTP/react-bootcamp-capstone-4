import "./Input.css";

export const inputTypes = {
	text: "text",
	number: "number",
};

const Input = ({ type }) => {
	return (
		<div className="input">
			<input
				value=""
				type={type && inputTypes[type]}
				placeholder="Type for search"
				onChange={() => {
					console.log("On change");
				}}
			/>
		</div>
	);
};

export default Input;
