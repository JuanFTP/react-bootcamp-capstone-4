import styled from "styled-components";

const ImageBackground = styled.div`
	background-image: url(${(props) => `${props.media}`});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: ${props => `${props.h}`};
	width: 100%;
`;

export default ImageBackground;
