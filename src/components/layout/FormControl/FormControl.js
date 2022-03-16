import "./FormControl.css";
import PropTypes from "prop-types";

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

FormControl.propTypes = {
	children: PropTypes.node.isRequired,
	minWidth: PropTypes.string,
	feedback: PropTypes.bool,
	round: PropTypes.bool,
};

export default FormControl;
