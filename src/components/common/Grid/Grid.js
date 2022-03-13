import styled from "styled-components";

const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-gap: 32px;
	grid-template-columns: repeat(${(props) => props.default}, 1fr);
	grid-auto-rows: minmax(${(props) => `${props.minmax}px`}, auto);

	@media (max-width: 1400px) {
		grid-template-columns: repeat(${(props) => props.xl}, 1fr);
	}

	@media (max-width: 992px) {
		grid-gap: 24px;
		grid-template-columns: repeat(${(props) => props.md}, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(${(props) => props.sm}, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(${(props) => props.xsm}, 1fr);
	}
`;

export default Grid;
