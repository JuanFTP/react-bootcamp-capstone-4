import { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalContext, initialState, reducer } from "./reducers/Global";
import General from "./routes/General";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			<ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
				<GlobalStyles />
				<General />
			</ThemeProvider>
		</GlobalContext.Provider>
	);
};

export default App;
