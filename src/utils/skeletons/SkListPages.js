import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const styles = {
	height: "48px",
	width: "48px",
	marginLeft: "8px",
	marginRight: "8px",
};

const SkListPages = () => (
	<>
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
	</>
);

export default SkListPages;
