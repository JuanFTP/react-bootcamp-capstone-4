import "./Page.css";
import IconArea from "./../../common/IconArea/IconArea";

const Page = ({ number, isActive }) => {
	return (
		<div className={`page ${isActive && "active"}`}>
			<IconArea>{number}</IconArea>
		</div>
	);
};

export default Page;
