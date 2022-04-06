import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const styles = {
	height: "240px",
	display: "block",
};

const SkListCategoriesCards = () => (
	<>
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
		<Skeleton style={styles} />
	</>
);

export default SkListCategoriesCards;
