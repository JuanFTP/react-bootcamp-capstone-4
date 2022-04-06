const getBanners = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				image: {
					url: item.data.main_image.url,
					dimensions: item.data.main_image.dimensions,
				},
				title: item.data.title,
				description: item.data.description[0].text,
			};
		})
	);
};

export default getBanners;
