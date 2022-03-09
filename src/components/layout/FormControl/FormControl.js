import "./FormControl.css";

const FormControl = ({ children, minWidth, feedback, round }) => {
	return (
		<div
			style={minWidth && { minWidth: `${minWidth}` }}
			className={`form-control ${!!feedback && "feedback"} ${
				!!round && "round"
			}`}
		>
			{children}
		</div>
	);
};

export default FormControl;
