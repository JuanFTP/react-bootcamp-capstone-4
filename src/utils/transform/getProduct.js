const getProduct = (item) => {
	return {
		id: item.id,
		name: item.data.name,
		price: item.data.price,
		sku: item.data.sku,
		stock: item.data.stock,
		category: {
			id: item.data.category.id,
			slug: item.data.category.slug.replace("--", " & "),
		},
		image: item.data.mainimage,
		images: item.data.images.map((img) => img.image),
		description: item.data.short_description,
		specs: item.data.specs.map((spec) => ({
			name: spec.spec_name,
			value: spec.spec_value,
		})),
		tags: item.tags,
		slugs: item.slugs,
	};
};

export default getProduct;
