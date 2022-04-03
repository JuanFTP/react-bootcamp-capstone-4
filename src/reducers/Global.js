import { createContext } from "react";
import { actions } from "./../utils/constants";

const GlobalContext = createContext();

const initialState = {
	theme: localStorage.getItem("theme") || "light",
	cart: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	categories: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_THEME:
			localStorage.setItem("theme", action.payload.theme);
			return { ...state, theme: action.payload.theme };
		case actions.SET_PRODUCT_AT_CART:
			let newCart = [];
			if (action.payload.index < 0) {
				newCart =
					state.cart.length > 0
						? [...state.cart, action.payload.product]
						: [action.payload.product];
			} else {
				newCart = [
					...state.cart.slice(0, action.payload.index),
					action.payload.product,
					...state.cart.slice(action.payload.index + 1, state.cart.length),
				];
			}
			localStorage.setItem("cart", JSON.stringify(newCart));
			return { ...state, cart: newCart };
		case actions.SET_REMOVE_AT_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.productId),
			};
		default:
			return state;
	}
};

export { GlobalContext, initialState, reducer };
