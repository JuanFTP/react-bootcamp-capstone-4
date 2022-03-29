import { createContext } from "react";

const GlobalContext = createContext();

const initialState = {
	theme: localStorage.getItem("theme") || "light",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_THEME":
			localStorage.setItem("theme", action.payload.theme);
			return { ...state, theme: action.payload.theme };
		default:
			return state;
	}
};

export { GlobalContext, initialState, reducer };
