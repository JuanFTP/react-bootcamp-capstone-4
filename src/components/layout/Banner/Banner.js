import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";
import IconArea from "./../../common/IconArea/IconArea";

const Banner = () => {
	return (
		<div className="banner">
			<div className="carousel">
				<div className="slide">
					<p>Slide 1</p>
				</div>
				<div className="slide">
					<p>Slide 2</p>
				</div>
				<div className="slide">
					<p>Slide 3</p>
				</div>
			</div>
			<div className="controls">
				<div className="flex ai-center jc-center">
					<div className="actions">
						<IconArea>
							<IoRadioButtonOff />
						</IconArea>
						<IconArea>
							<IoRadioButtonOn />
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
