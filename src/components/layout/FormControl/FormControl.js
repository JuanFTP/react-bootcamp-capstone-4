import { IoSearch } from "react-icons/io5";
import IconArea from "../../common/IconArea/IconArea";
import "./FormControl.css";

const FormControl = () => {
	return (
		<div className="form-control round feedback">
			<IconArea>
				<IoSearch />
			</IconArea>
			
			<div className="input">
				<input
					value=""
					type="text"
					placeholder="Type any and press enter for search"
					onChange={() => {
						console.log("On change");
					}}
				/>
			</div>
		</div>
	);
};

export default FormControl;
