import Carousel from "./../Carousel";
import PropTypes from "prop-types";

const Banner = ({ banners }) => {
	return (
		<div className="banner">
			{banners && banners.length > 0 && (
				<Carousel
					slides={banners}
					mH={banners[0].image.dimensions.height}
					slideActive={banners[0].id}
				/>
			)}
		</div>
	);
};

Banner.propTypes = {
	banners: PropTypes.array,
};

export default Banner;
