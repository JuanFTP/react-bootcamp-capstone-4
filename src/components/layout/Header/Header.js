import "./Header.css";
import PropTypes from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";
import Brand from "../../common/Brand/Brand";
import IconArea from "./../../common/IconArea/IconArea";
import FormControl from "./../FormControl/FormControl";
import Chip from "./../../common/Chip";
import { MdSearch } from "react-icons/md";
import Input, { inputTypes } from "./../../common/Input";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PATHS } from "./../../../utils/constants";

const Header = ({ itemsOnCart }) => {
	const history = useHistory();
	const [search, setSearch] = useState("");
	const onChangeInput = (e) => {
		if (e.target.value !== search) {
			setSearch(e.target.value);
		}
	};

	const onClickBrand = () => {
		history.push(PATHS.home);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (search !== "") {
				history.push(`${PATHS.search}/${search}`);
			}
		}, 2000);
		return () => clearInterval(interval);
	}, [search, history]);

	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand handleOnClick={onClickBrand} />

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

Header.propTypes = {
	itemsOnCart: PropTypes.number,
};

export default Header;
