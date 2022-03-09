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
				placeholder="Type any and press enter for search"
				onChange={() => {
					console.log("On change");
				}}
			/>
		</div>
	);
};

export default Input;
