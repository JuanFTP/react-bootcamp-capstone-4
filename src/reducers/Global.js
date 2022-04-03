import { createContext } from "react";
import { actions } from "./../utils/constants";

const GlobalContext = createContext();

const initialState = {
	theme: localStorage.getItem("theme") || "light",
	cart: [],
	categories: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_THEME:
			localStorage.setItem("theme", action.payload.theme);
			return { ...state, theme: action.payload.theme };
		case actions.SET_PRODUCT_AT_CART:
			console.log("Agregar producto al carrito");
			return state;
		default:
			return state;
	}
};

export { GlobalContext, initialState, reducer };
