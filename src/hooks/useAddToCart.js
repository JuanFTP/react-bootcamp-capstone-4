import { useEffect, useState } from "react";
import { actions } from "../utils/constants";

export function useAddToCart() {
	const [dataToAdd, setDataToAdd] = useState({
		cart: [],
		product: {},
		cuantity: 0,
		dispatch: {},
	});

	const [hasAdded, setHasAdded] = useState(false);
	const { cart, product, cuantity, dispatch } = dataToAdd;

	useEffect(() => {
		if (product && cuantity) {
			let index = -1;
			let selected = cuantity;
			let isReadyToAdd = false;

			const listKeys = cart.map((prd) => prd.id);
			index = listKeys.indexOf(product.id);
			selected = index >= 0 ? cart[index].selected + selected : selected;
			isReadyToAdd = index >= 0 ? cart[index].stock >= selected : true;

			if (isReadyToAdd) {
				dispatch({
					type: actions.SET_PRODUCT_AT_CART,
					payload: {
						index,
						product: {
							id: product.id,
							image: product.image.url || product.image,
							name: product.name,
							stock: product.stock,
							price: product.price,
							selected,
						},
					},
				});

				setHasAdded(true);
			} else {
				setHasAdded(false);
			}
		}
	}, [cart, cuantity, dispatch, product]);

	return { setDataToAdd, hasAdded };
}
