import "./Card.css";
import PropTypes from "prop-types";

export const cardVariants = {
	category: "category",
	product: "product",
};

const Card = ({ children, variant }) => {
	return <div className={`card ${cardVariants[variant]}`}>{children}</div>;
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(Object.keys(cardVariants)),
};

export default Card;
