import styled from "styled-components";
import PropTypes from "prop-types";

const ImageBackground = styled.div`
	background-image: url(${(props) => `${props.media}`});
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	height: ${(props) => `${props.h}`};
	width: 100%;
`;

ImageBackground.propTypes = {
	media: PropTypes.string.isRequired,
	h: PropTypes.string,
};

export default ImageBackground;
