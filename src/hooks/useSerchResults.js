import axios from "axios";
import { useEffect, useState } from "react";
import { URI_SEARCH } from "./../utils/constants";
import getPagination from "./../utils/transform/getPagination";
import getProducts from "./../utils/transform/getProducts";
import { getErrorMessage } from "./../utils/utils";
import { useLatestAPI } from "./useLatestAPI";

export function useSearchResults(searchTerm, page, pageSize) {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [products, setProducts] = useState([]);
	const [pagination, setPagination] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${URI_SEARCH}?ref=${apiRef}&q=${encodeURIComponent(
					`[[at(document.type, "product")]]`
				)}&q=${encodeURIComponent(
					`[[fulltext(document, "${searchTerm}")]]`
				)}&lang=en-us&pageSize=${
					pageSize && pageSize > 0 ? pageSize : 20
				}&page=${page && page > 0 ? page : 1}`;

				const response = await axios.get(URI, { signal: controller.signal });
				const allProducts = await getProducts(response.data.results);
				const pages = getPagination(response.data);

				setProducts(allProducts);
				setPagination(pages);
			} catch (error) {
				setError(getErrorMessage(error));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading, searchTerm, page, pageSize]);

	return { products, pagination, error };
}
