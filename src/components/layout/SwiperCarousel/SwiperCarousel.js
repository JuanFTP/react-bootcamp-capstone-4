import PropTypes from "prop-types";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/thumbs/thumbs.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import ImageBackground from "./../../common/ImageBackground/ImageBackground";

const stylesMain = {
	"--swiper-navigation-color": "#666666",
	"--swiper-pagination-color": "#666666",
	height: "80%",
};

const stylesThumb = {
	height: "20%",
};

const getKeyForSwiper = (url) => {
	const regEx = /([a-zA-Z0-9]{8})-([a-zA-Z0-9]{4}-){3}([a-zA-Z0-9]{12})_[0-9]/g;
	const matchs = url.match(regEx);
	return matchs.length === 1 ? matchs[0] : "NO KEY";
};

const SwiperCarousel = ({ slides }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<Swiper
				style={stylesMain}
				spaceBetween={0}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
			>
				{slides.map((slide) => (
					<SwiperSlide key={`main-${getKeyForSwiper(slide.url)}`}>
						<ImageBackground media={slide.url} h="100%" />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				style={stylesThumb}
				onSwiper={setThumbsSwiper}
				spaceBetween={0}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
			>
				{slides.map((slide) => (
					<SwiperSlide key={`thumb-${getKeyForSwiper(slide.url)}`}>
						<ImageBackground media={slide.url} h="100%" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

SwiperCarousel.propTypes = {
	slides: PropTypes.array.isRequired,
};

export default React.memo(SwiperCarousel);
