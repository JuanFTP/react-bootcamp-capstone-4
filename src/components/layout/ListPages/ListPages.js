import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import SkListPages from "./../../../utils/skeletons/SkListPages";
import IconArea from "./../../common/IconArea/IconArea";
import "./ListPages.css";

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

const getListPages = (pagination, onClickPage) => {
	return pagination.map((page) => {
		return (
			<Page
				key={page.id}
				className={page.isActive && "active"}
				onClick={() => onClickPage(page.number)}
			>
				<IconArea>{page.number}</IconArea>
			</Page>
		);
	});
};

const ListPages = ({ pagination, onClickPage }) => {
	return (
		<div className="list-pages flex ai-center jc-center">
			{pagination && pagination.length > 0 ? (
				getListPages(pagination, onClickPage)
			) : (
				<SkListPages />
			)}
		</div>
	);
};

ListPages.propTypes = {
	pagination: PropTypes.array.isRequired,
};

export default ListPages;
