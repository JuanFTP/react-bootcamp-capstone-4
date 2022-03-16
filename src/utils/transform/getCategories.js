const getCategories = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				name: item.data.name,
				image: {
					url: item.data.main_image.url,
					alt: item.data.main_image.alt,
					dimensions: item.data.main_image.dimensions,
				},
				active: false,
			};
		})
	);
};

export default getCategories;
