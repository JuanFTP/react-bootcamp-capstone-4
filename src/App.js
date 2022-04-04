import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
				<ToastContainer
					position="bottom-left"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</ThemeProvider>
		</GlobalContext.Provider>
	);
};

export default App;
