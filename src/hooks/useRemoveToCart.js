import { useEffect, useState } from "react";
import { actions } from "../utils/constants";

export function useRemoveToCart() {
	const [dataToRemove, setDataToRemove] = useState({
		cart: [],
		productId: "",
		dispatch: {},
	});

	const [statusRemove, setStatusRemove] = useState({ removed: false, id: "" });
	const { cart, productId, dispatch } = dataToRemove;

	useEffect(() => {
		if (productId) {
			let index = -1;

			const listKeys = cart.map((prd) => prd.id);
			index = listKeys.indexOf(productId);

			if (index >= 0) {
				dispatch({
					type: actions.SET_REMOVE_AT_CART,
					payload: {
						productId,
					},
				});

				setStatusRemove({ removed: true, id: productId });
			} else {
				setStatusRemove({ removed: false, id: productId });
			}
		}
	}, [cart, dispatch, productId]);

	return { setDataToRemove, statusRemove };
}
