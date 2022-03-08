import Carousel from "../Carousel";

const Banner = ({ banners }) => {
	return (
		<div className="banner">
			{banners && (
				<Carousel
					slides={banners}
					mH={banners[0].image.dimensions.height}
					slideActive={banners[0].id}
				/>
			)}
		</div>
	);
};

export default Banner;
