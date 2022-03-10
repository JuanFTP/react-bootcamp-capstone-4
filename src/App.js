import { useState } from "react";
import "./App.css";
import View from "./pages/View";

const App = () => {
	const [location, setLocation] = useState("main");

	const onChangeLocation = (newLocation) => {
		if (newLocation !== location) {
			setLocation(newLocation);
		}
	};

	return <View location={location} onChangeLocation={onChangeLocation} />;
};

export default App;
