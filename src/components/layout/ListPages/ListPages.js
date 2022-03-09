import "./ListPages.css";
import Page from "./../../common/Page";

const getListPages = (pages) => {
	return pages.map((page) => {
		return (
			<Page key={page.id} number={page.number} isActive={page.isActive} />
		);
	});
};

const ListPages = ({ pages }) => {
	return pages && <div className="pages">{getListPages(pages)}</div>;
};

export default ListPages;
