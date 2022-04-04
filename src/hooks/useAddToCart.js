import { useEffect, useState } from "react";
import { actions } from "../utils/constants";

export function useAddToCart() {
	const [dataToAdd, setDataToAdd] = useState({
		cart: [],
		product: {},
		cuantity: 0,
		dispatch: {},
	});

	const [statusAdd, setStatusAdd] = useState({ added: false, id: "" });
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

				setStatusAdd({ added: true, id: product.id });
			} else {
				setStatusAdd({ added: false, id: product.id });
			}
		}
	}, [cart, cuantity, dispatch, product]);

	return { setDataToAdd, statusAdd };
}
