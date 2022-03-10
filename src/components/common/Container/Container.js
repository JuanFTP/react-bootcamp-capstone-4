import "./Container.css";

const Container = ({ children, inner }) => {
	return <div className={`container ${inner && "inner"}`}>{children}</div>;
};

export default Container;
