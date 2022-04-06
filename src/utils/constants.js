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
	checkout: "/cart/checkout",
};

export const actions = {
	SET_THEME: "SET_THEME",
	SET_CATEGORIES: "SET_CATEGORIES",
	SET_PRODUCT_AT_CART: "SET_PRODUCT_AT_CART",
	SET_REMOVE_AT_CART: "SET_REMOVE_AT_CART",
	SET_REMOVE_ALL_CART: "SET_REMOVE_ALL_CART",
};

export const forms = {
	checkout: {
		firstName: {
			value: "",
			label: "First name",
			name: "firstName",
			placeholder: "First name",
			required: true,
			error: "",
			variant: "input",
			type: "text",
		},
		lastName: {
			value: "",
			label: "Last name",
			name: "lastName",
			placeholder: "Last name",
			required: true,
			error: "",
			variant: "input",
			type: "text",
		},
		email: {
			value: "",
			label: "Email",
			name: "email",
			placeholder: "email@domain.com",
			required: true,
			error: "",
			variant: "input",
			type: "email",
		},
		zipCode: {
			value: "",
			label: "Zipcode",
			name: "zipCode",
			placeholder: "00000",
			required: true,
			error: "",
			variant: "input",
			type: "number",
		},
		orderInstructions: {
			value: "",
			label: "Order instructions",
			name: "orderInstructions",
			placeholder:
				"Instructions to follow for you receipt your order correctly.",
			required: true,
			error: "",
			variant: "textarea",
		},
	},
};
