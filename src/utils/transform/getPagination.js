const getPagination = ({ page, total_pages, version }) => {
	let pages = [];

	for (let index = 0; index < total_pages; index++) {
		pages.push({
			id: `${version}-pag-${index + 1}`,
			number: index + 1,
			isActive: index + 1 === page ? true : false,
		});
	}

	return pages;
};

export default getPagination;
