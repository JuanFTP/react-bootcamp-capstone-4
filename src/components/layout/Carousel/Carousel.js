import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import styled from "styled-components";
import IconArea from "./../../common/IconArea";
import Title, { titleLevels } from "./../../common/Title";
import "./Carousel.css";

const Slide = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${(props) => `${props.img}`});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: none;

	&.active {
		display: block;
		animation: slideBanner 1.5s;
	}

	@keyframes slideBanner {
		0% {
			opacity: 50%;
		}

		100% {
			opacity: 100%;
		}
	}

	.data {
		width: 50%;
		text-align: center;
		padding: 48px 32px;
		border: solid 4px var(--white);
		color: var(--white);
		background-color: var(--default-72);
	}

	.data h2 {
		color: var(--white);
		margin-bottom: 16px;
	}

	.data p {
		color: var(--white);
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
				>
					<div className="flex ai-center jc-center">
						<div className="data">
							<Title Level={titleLevels.h2}>{slide.title}</Title>
							<p>{slide.description}</p>
						</div>
					</div>
				</Slide>
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
		}, 15000);
		return () => clearInterval(interval);
	}, [slides, slideAct, onClickedCheck]);

	return (
		<div className="carousel">
			<div className="slides">{getSlides(slides, slideAct)}</div>

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

Slide.propTypes = {
	img: PropTypes.string.isRequired,
};

Carousel.propTypes = {
	slides: PropTypes.array.isRequired,
	slideActive: PropTypes.string.isRequired,
};

export default Carousel;
