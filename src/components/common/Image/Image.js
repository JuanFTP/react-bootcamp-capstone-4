import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img(`
	src: ${(props) => props.src};
	alt: ${(props) => props.description};
	height: 100%;
	width: 100%;
`);

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.description,
};

export default Image;
