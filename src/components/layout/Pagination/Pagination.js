import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListPages from "../ListPages/ListPages";
import IconArea from "./../../common/IconArea/IconArea";
import "./Pagination.css";

const Pagination = ({ pages }) => {
	return (
		pages && (
			<div className="pagination">
				<div className="flex ai-center jc-space-between">
					<IconArea>
						<FaChevronLeft />
					</IconArea>
					<ListPages pages={pages} />
					<IconArea>
						<FaChevronRight />
					</IconArea>
				</div>
			</div>
		)
	);
};

Pagination.propTypes = {
	pages: PropTypes.array.isRequired,
};

export default Pagination;
