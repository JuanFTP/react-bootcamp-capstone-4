import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";
import Carousel from "../Carousel";
import IconArea from "./../../common/IconArea";

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

			<div className="controls">
				<div className="flex ai-center jc-center">
					<div className="actions">
						<IconArea>
							<IoRadioButtonOn />
						</IconArea>
						<IconArea>
							<IoRadioButtonOff />
						</IconArea>
						<IconArea>
							<IoRadioButtonOff />
						</IconArea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
