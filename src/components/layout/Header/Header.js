import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import {
	MdDarkMode,
	MdLightMode,
	MdOutlineShoppingCart,
	MdSearch,
} from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import { GlobalContext } from "../../../reducers/Global";
import { actions, PATHS } from "./../../../utils/constants";
import Avatar from "./../../common/Avatar/Avatar";
import Brand from "./../../common/Brand/Brand";
import Chip from "./../../common/Chip";
import IconArea from "./../../common/IconArea/IconArea";
import Input, { inputTypes } from "./../../common/Input";
import FormControl from "./../FormControl/FormControl";
import "./Header.css";

const Header = ({ itemsOnCart, userData }) => {
	const { state, dispatch } = useContext(GlobalContext);

	const history = useHistory();
	const location = useLocation();
	const [search, setSearch] = useState("");

	const onChangeSearch = (e) => {
		if (e.target.value !== search) {
			setSearch(e.target.value);
		}
	};

	const onClickBrand = () => {
		if (
			location.pathname !== PATHS.home &&
			location.pathname !== PATHS.default
		) {
			history.push(PATHS.home);
		}
	};

	const onChangeTheme = (theme) => {
		dispatch({
			type: actions.SET_THEME,
			payload: {
				theme: theme,
			},
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (search !== "") {
				history.push(`${PATHS.search}/${search}`);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [search, history]);

	return (
		<div className="header shadow">
			<div className="flex ai-center jc-space-between">
				<Brand handleOnClick={onClickBrand} mode={state.theme} />

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
						{state.theme === "light" ? (
							<IconArea onClicketItem={onChangeTheme} value="dark">
								<MdLightMode />
							</IconArea>
						) : (
							<IconArea onClicketItem={onChangeTheme} value="light">
								<MdDarkMode />
							</IconArea>
						)}

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
