import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkActions from "./SkActions";

const styles = {
	height: "100%",
	width: "100%",
};

const SkSlides = () => (
	<div className="carousel">
		<div className="slides">
			<Skeleton style={styles} />
		</div>

		<div className="controls">
			<div className="flex ai-center jc-center">
				<SkActions />
			</div>
		</div>
	</div>
);

export default SkSlides;
