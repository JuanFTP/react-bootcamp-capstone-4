export const getCapitalize = (input) =>
	input.charAt(0).toUpperCase() + input.substring(1, input.length);

export const getFormattedPrice = (price) =>
	new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
		price
	);

export const getFormattedSlug = (slug) =>
	slug.toUpperCase().replace(/[-]+/g, " ");
