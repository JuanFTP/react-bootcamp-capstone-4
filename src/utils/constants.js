export const APP_NAME = "Store";
export const API_BASE_URL = "https://wizeline-academy.cdn.prismic.io/api/v2";
export const URI_SEARCH = `${API_BASE_URL}/documents/search`;

export const PATHS = {
	default: "/",
	home: "/home",
	product: "/product",
	productFilterByProductId: "/product/:productId",
	products: "/products",
	productsFilterByCategory: "/products/:categoryKey",
	search: "/search",
	searchByTerm: "/search/:searchTerm",
	cart: "/cart",
	checkout: "/checkout",
};

export const actions = {
	SET_THEME: "SET_THEME",
	SET_CATEGORIES: "SET_CATEGORIES",
};
