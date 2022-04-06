import axios from "axios";
import { useEffect, useState } from "react";
import { URI_SEARCH } from "./../utils/constants";
import getPagination from "./../utils/transform/getPagination";
import getProducts from "./../utils/transform/getProducts";
import { getErrorMessage } from "./../utils/utils";
import { useLatestAPI } from "./useLatestAPI";

export function useProducts(page, pageSize) {
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
				let URI = `${URI_SEARCH}?ref=${apiRef}&q=`;
				if (page && pageSize) {
					URI += `${encodeURIComponent(
						'[[at(document.type, "product")]]'
					)}&lang=en-us&pageSize=${
						pageSize && pageSize > 0 ? pageSize : 12
					}&page=${page && page > 0 ? page : 1}`;
				} else {
					URI += `${encodeURIComponent(
						'[[at(document.type, "product")]]&q=[[at(document.tags,["Featured"])]]'
					)}&lang=en-us&pageSize=16`;
				}

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
	}, [apiRef, isApiMetadataLoading, page, pageSize]);

	return { products, pagination, error };
}
