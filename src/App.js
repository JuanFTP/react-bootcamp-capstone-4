import { ThemeProvider } from "styled-components";
import General from "./routes/General";
import { darkTheme, GlobalStyles } from "./theme";

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<General />
		</ThemeProvider>
	);
};

export default App;
