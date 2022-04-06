import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const styles = {
	marginRight: "8px",
	marginBottom: "8px",
	borderRadius: "16px",
};

const SkListCategoriesChips = () => (
	<>
		<Skeleton height={36} width={72} style={styles} />
		<Skeleton height={36} width={120} style={styles} />
		<Skeleton height={36} width={72} style={styles} />
		<Skeleton height={36} width={72} style={styles} />
		<Skeleton height={36} width={120} style={styles} />
	</>
);

export default SkListCategoriesChips;
