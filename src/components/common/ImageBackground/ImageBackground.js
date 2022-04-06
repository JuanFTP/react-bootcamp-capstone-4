import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ImageBackground = styled.div`
	background-image: url(${(props) => `${props.media}`});
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	background-color: white;
	height: ${(props) => `${props.h}`};
	width: 100%;
`;

ImageBackground.propTypes = {
	media: PropTypes.string.isRequired,
	h: PropTypes.string,
};

export default React.memo(ImageBackground);
