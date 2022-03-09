import "./Carousel.css";
import styled from "styled-components";
import IconArea from "./../../common/IconArea";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";

const Slide = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${(props) => `${props.img}`});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: none;

	&.active {
		transition: all ease 750ms;
		display: block;
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

const getControls = (slides, slideActive, onClickedCheck) => {
	return (
		slides &&
		slides.map((slide) => {
			return (
				<IconArea
					key={slide.id}
					value={slide.id}
					onClicketItem={onClickedCheck}
				>
					{slide.id === slideActive ? (
						<MdRadioButtonChecked />
					) : (
						<MdRadioButtonUnchecked />
					)}
				</IconArea>
			);
		})
	);
};

const getNextIndex = (data, idAct) => {
	let index = -1;
	data.forEach((item, idx) => {
		if (idAct === data[idx].id) {
			index = idx;
			return false;
		}
	});

	return index + 1 < data.length ? index + 1 : 0;
};

const Carousel = ({ slides, slideActive }) => {
	const [slideAct, setSlideAct] = useState(slideActive);
	const onClickedCheck = useCallback(
		(id) => {
			if (slideAct !== id) {
				setSlideAct(id);
			}
		},
		[slideAct]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			let index = getNextIndex(slides, slideAct);
			onClickedCheck(slides[index].id);
		}, 5000);
		return () => clearInterval(interval);
	}, [slides, slideAct, onClickedCheck]);

	return (
		<div className="carousel">
			<div
				className="slides"
				style={{
					height: " 100%",
					backgroundColor: "rgba(0,0,0,0.25)",
					overflow: "hidden",
				}}
			>
				{getSlides(slides, slideAct)}
			</div>

			<div className="controls">
				<div className="flex ai-center jc-center">
					<div className="actions">
						{getControls(slides, slideAct, onClickedCheck)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
