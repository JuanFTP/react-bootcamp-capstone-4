export const getCapitalize = (input) =>
	input.charAt(0).toUpperCase() + input.substring(1, input.length);

export const getFormattedPrice = (price) =>
	new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(price);

export const getFormattedSlug = (slug) =>
	slug.toUpperCase().replace(/[-]+/g, " ");

export const arraySumator = (accmulator, current) => accmulator + current;

export const getErrorMessage = (error) => {
	if (error.response) {
		return "Ha ocurrido un error en el servidor";
	} else if (error.request) {
		return "Verifica tu conexión a internet";
	} else {
		return "Error al cargar los datos";
	}
};
