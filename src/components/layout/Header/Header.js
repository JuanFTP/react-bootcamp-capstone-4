import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import Brand from "../../common/Brand/Brand";
import IconArea from "./../../common/IconArea/IconArea";
import FormControl from "./../FormControl/FormControl";
import Chip from "./../../common/Chip";
import { MdSearch } from "react-icons/md";
import Input, { inputTypes } from "./../../common/Input";
import { useState } from "react";

const Header = ({ itemsOnCart, onChangeLocation }) => {
	const [search, setSearch] = useState("");
	const onChangeInput = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand value={"main"} onClickItem={onChangeLocation} />

				<FormControl minWidth="45%" feedback={true} round={true}>
					<IconArea>
						<MdSearch />
					</IconArea>

					<Input
						value={search}
						type={inputTypes.text}
						onChangeInput={onChangeInput}
					/>
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
