import "./Container.css";
import PropTypes from "prop-types";

const Container = ({ children, inner }) => {
	return <div className={`container ${inner && "inner"}`}>{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
	inner: PropTypes.bool,
};

export default Container;
