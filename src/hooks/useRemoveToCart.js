import { useEffect, useState } from "react";
import { actions } from "../utils/constants";

export function useRemoveToCart() {
	const [dataToRemove, setDataToRemove] = useState({
		cart: [],
		productId: "",
		dispatch: {},
	});

	const [hasRemoved, setHasRemoved] = useState(false);
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

				setHasRemoved(true);
			} else {
				setHasRemoved(false);
			}
		}
	}, [cart, dispatch, productId]);

	return { setDataToRemove, hasRemoved };
}
