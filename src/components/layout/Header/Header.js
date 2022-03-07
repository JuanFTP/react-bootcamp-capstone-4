import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import Brand from "../../common/Brand/Brand";
import IconArea from "./../../common/IconArea/IconArea";
import FormControl from "./../FormControl/FormControl";
import Chip from "./../../common/Chip";
import { MdSearch } from "react-icons/md";
import Input, { inputTypes } from "./../../common/Input";

const Header = ({ itemsOnCart }) => {
	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand />

				<FormControl minWidth="45%" feedback={true} round={true}>
					<IconArea>
						<MdSearch />
					</IconArea>

					<Input type={inputTypes.text} />
				</FormControl>

				<div className="actions">
					<div className="stats">
						<IconArea>
							<MdOutlineShoppingCart />
						</IconArea>

						{itemsOnCart && <Chip>{itemsOnCart}</Chip>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
