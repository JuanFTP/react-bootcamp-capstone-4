import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Brand from "../../common/Brand/Brand";
import { PATHS } from "./../../../utils/constants";
import Avatar from "./../../common/Avatar/Avatar";
import Chip from "./../../common/Chip";
import IconArea from "./../../common/IconArea/IconArea";
import Input, { inputTypes } from "./../../common/Input";
import FormControl from "./../FormControl/FormControl";
import "./Header.css";

const Header = ({ itemsOnCart, userData }) => {
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

				<FormControl width="40%" feedback={true} round={true}>
					<IconArea>
						<MdSearch />
					</IconArea>

					<Input
						type={inputTypes.text}
						value={search}
						placeholder="Search"
						onChangeInput={onChangeSearch}
						read={false}
					/>
				</FormControl>

				<div className="tools">
					<div className="actions">
						<IconArea>
							<MdDarkMode />
						</IconArea>

						<div className="stats">
							<IconArea>
								<MdOutlineShoppingCart />
							</IconArea>

							{itemsOnCart && <Chip>{itemsOnCart}</Chip>}
						</div>
					</div>

					{userData && (
						<IconArea>
							<Avatar rounded={true} />
						</IconArea>
					)}
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	itemsOnCart: PropTypes.number,
};

export default Header;
