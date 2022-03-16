const getProducts = (data) => {
	return (
		data &&
		data.map((item) => {
			return {
				id: item.id,
				tags: item.tags,
				name: item.data.name,
				sku: item.data.sku,
				category: {
					id: item.data.category.id,
					slug: item.data.category.slug,
				},
				image: item.data.mainimage,
				price: item.data.price,
			};
		})
	);
};

export default getProducts;
