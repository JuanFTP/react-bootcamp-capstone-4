import styled from "styled-components";

const Image = styled.img(`
	src: props.src;
	alt: props.description;
	height: 100%;
	width: 100%;
`);

export default Image;
