import "./Card.css";

export const cardVariants = {
	category: "category",
	product: "product",
};

const Card = ({ children, variant }) => {
	return <div className={`card ${cardVariants[variant]}`}>{children}</div>;
};

export default Card;
