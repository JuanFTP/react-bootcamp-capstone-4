import { useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import View from "./pages/View";

const App = () => {
	const [location, setLocation] = useState("main");

	const onChangeLocation = (newLocation) => {
		if (newLocation !== location) {
			setLocation(newLocation);
		}
	};

	return (
		<>
			<Header onChangeLocation={onChangeLocation} />
			<View location={location} onChangeLocation={onChangeLocation} />
			<Footer />
		</>
	);
};

export default App;
