import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./../utils/constants";
import getProduct from "./../utils/transform/getProduct";
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
				const URI = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
					`[[at(document.id,"${productId}")]]`
				)}`;

				const response = await axios.get(URI, { signal: controller.signal });
				const productData = getProduct(response.data.results[0]);

				setProduct(productData);
			} catch (error) {
				if (error.response) {
					setError("Ha ocurrido un error en el servidor");
				} else if (error.request) {
					setError("Verifica tu conexión a internet");
				} else {
					setError("Error al cargar los datos");
				}
			}
		})();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, productId]);

	return { product, error };
}
