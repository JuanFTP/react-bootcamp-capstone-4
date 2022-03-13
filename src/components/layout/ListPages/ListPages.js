import "./ListPages.css";
import styled from "styled-components";
import IconArea from "../../common/IconArea/IconArea";

const Page = styled.div`
	color: var(--default);
	display: inline-block;
	margin: 0px 8px;
	font-weight: 600;

	&.active {
		font-weight: 900;
		background-color: var(--light);
	}

	:hover {
		transition: var(--transition);
		background-color: var(--light);
	}
`;

const getListPages = (pages) => {
	return pages.map((page) => {
		return (
			<Page key={page.id} className={page.active && "active"}>
				<IconArea>{page.number}</IconArea>
			</Page>
		);
	});
};

const ListPages = ({ pages }) => {
	return (
		pages && (
			<div className="list-pages flex ai-center jc-center">
				{getListPages(pages)}
			</div>
		)
	);
};

export default ListPages;
