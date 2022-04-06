import PropTypes from "prop-types";
import "./FormControl.css";

const FormControl = ({ children, width, feedback, round }) => {
	return (
		<div
			style={width && { width: `${width}` }}
			className={`form-control ${!!feedback && "feedback"} ${
				!!round && "round"
			}`}
		>
			{children}
		</div>
	);
};

FormControl.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
	feedback: PropTypes.bool,
	round: PropTypes.bool,
};

export default FormControl;
