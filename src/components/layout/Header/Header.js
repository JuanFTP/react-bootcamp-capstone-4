import { IoCartOutline } from "react-icons/io5";
import Brand from "../../common/Brand/Brand";
import IconArea from "./../../common/IconArea/IconArea";
import FormControl from "./../FormControl/FormControl";
import Chip from "./../../common/Chip";

const Header = () => {
	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand />

				<FormControl />

				<div className="actions">
					<div className="stats">
						<IconArea>
							<IoCartOutline />
						</IconArea>

						<Chip>0</Chip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
