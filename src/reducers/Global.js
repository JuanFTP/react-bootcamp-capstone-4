import { createContext } from "react";

const GlobalContext = createContext();

const initialState = {
	theme: localStorage.getItem("theme") || "light",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_THEME":
			const newTheme = action.payload.theme;
			localStorage.setItem("theme", newTheme);
			return { ...state, theme: newTheme };
		default:
			return state;
	}
};

export { GlobalContext, initialState, reducer };
