import axios from "axios";
import { useEffect, useState } from "react";
import { URI_SEARCH } from "./../utils/constants";
import getProduct from "./../utils/transform/getProduct";
import { getErrorMessage } from "./../utils/utils";
import { useLatestAPI } from "./useLatestAPI";

export function useProduct(productId) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${URI_SEARCH}?ref=${apiRef}&q=${encodeURIComponent(
					`[[at(document.id,"${productId}")]]`
				)}`;

				const response = await axios.get(URI, { signal: controller.signal });
				const productData = getProduct(response.data.results[0]);

				setProduct(productData);
			} catch (error) {
				setError(getErrorMessage(error));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, productId]);

	return { product, error };
}
