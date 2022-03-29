import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import getProducts from "../utils/transform/getProducts";
import { useLatestAPI } from "./useLatestAPI";

export function useRecommendedProducts() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
					'[[at(document.type, "product")]]&q=[[at(document.tags,["Featured"])]]'
				)}&lang=en-us&pageSize=16`;

				const response = await axios.get(URI, { signal: controller.signal });
				const allProducts = await getProducts(response.data.results);

				setProducts(allProducts);
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
	}, [apiRef, isApiMetadataLoading]);

	return { products, error };
}
