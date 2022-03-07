import styled from "styled-components";

const Slide = styled.div`
	background-image: url(${(props) => `${props.img}`});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: ${(props) => `${props.h}px`};
	width: 100%;
	position: relative;
	left: 100%;
	z-index: -1000;

	&.active {
		left: 0px;
	}
`;

const getSlides = (slides, slideActive) => {
	return slides.map((slide) => {
		return (
			slideActive === slide.id && (
				<Slide
					key={slide.id}
					h={slide.image.dimensions.height}
					img={slide.image.url}
					className={slideActive === slide.id && "active"}
				/>
			)
		);
	});
};

const Carousel = ({ slides, mH, slideActive }) => {
	return (
		<div
			style={{
				maxHeight: `${mH}px`,
				backgroundColor: "rgba(0,0,0,0.25)",
				overflow: "hidden",
			}}
		>
			{getSlides(slides, slideActive)}
		</div>
	);
};

export default Carousel;
