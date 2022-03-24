import axios from "axios";
import { useEffect, useState } from "react";
import getPagination from "./../utils/transform/getPagination";
import { API_BASE_URL } from "./../utils/constants";
import getProducts from "./../utils/transform/getProducts";
import { useLatestAPI } from "./useLatestAPI";

export function useSearchResults(searchTerm, page, pageSize) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [products, setProducts] = useState([]);
	const [pagination, setPagination] = useState([]);

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
					`[[at(document.type, "product")]]`
				)}&q=${encodeURIComponent(
					`[[fulltext(document, "${searchTerm}")]]`
				)}&lang=en-us&pageSize=${
					pageSize && pageSize > 0 ? pageSize : 20
				}&page=${page && page > 0 ? page : 1}`;
				console.log(URI);

				const response = await axios.get(URI);
				const allProducts = await getProducts(response.data.results);
				const pages = getPagination(response.data);

				setProducts(allProducts);
				setPagination(pages);
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
	}, [apiRef, isApiMetadataLoading, searchTerm, page, pageSize]);

	return { products, pagination, error };
}
