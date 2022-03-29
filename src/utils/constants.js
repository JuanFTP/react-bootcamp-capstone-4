export const APP_NAME = "Store";
export const API_BASE_URL = "https://wizeline-academy.cdn.prismic.io/api/v2";

export const PATHS = {
	default: "/",
	home: "/home",
	products: "/products",
	categoryFilter: "/products/:categoryKey",
	product: "/product/:productId",
	search: "/search",
	searchFilter: "/search/:searchTerm",
};

export const actions = {
	SET_THEME: "SET_THEME",
};
