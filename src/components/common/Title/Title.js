import "./Title.css";

export const titleLevels = {
	H1: "h1",
	H2: "h2",
	H3: "h3",
	H4: "h4",
};

const Title = ({ children, Level }) => {
	return <Level>{children}</Level>;
};

export default Title;
