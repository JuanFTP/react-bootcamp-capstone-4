import { useEffect, useState } from "react";
import { actions } from "../utils/constants";

export function useRemoveAllFromCart() {
	const [dataAction, setDataAction] = useState({ dispatch: undefined });
	const [statusRemoveCart, setStatusRemoveCart] = useState({
		removed: false,
	});
	const { dispatch } = dataAction;
	useEffect(() => {
		if (dispatch) {
			dispatch({
				type: actions.SET_REMOVE_ALL_CART,
			});
			setStatusRemoveCart({ removed: true, value: [] });
		} else {
			setStatusRemoveCart({ removed: false });
		}
	}, [dispatch]);

	return { setDataAction, statusRemoveCart };
}
