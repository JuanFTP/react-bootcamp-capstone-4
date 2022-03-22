import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Brand from "../../common/Brand/Brand";
import { PATHS } from "./../../../utils/constants";
import Chip from "./../../common/Chip";
import IconArea from "./../../common/IconArea/IconArea";
import Input, { inputTypes } from "./../../common/Input";
import FormControl from "./../FormControl/FormControl";
import "./Header.css";

const Header = ({ itemsOnCart }) => {
	const history = useHistory();
	const [search, setSearch] = useState("");
	const onChangeSearch = (e) => {
		if (e.target.value !== search) {
			setSearch(e.target.value);
		}
	};

	const onClickBrand = () => {
		history.push(PATHS.home);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setSearch("");

			if (search !== "") {
				history.push(`${PATHS.search}/${search}`);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [search, history]);

	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand handleOnClick={onClickBrand} />

				<FormControl width="45%" feedback={true} round={true}>
					<IconArea>
						<MdSearch />
					</IconArea>

					<Input
						type={inputTypes.text}
						value={search}
						placeholder="Type any for search"
						onChangeInput={onChangeSearch}
						read={false}
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
