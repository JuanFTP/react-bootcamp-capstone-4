import axios from "axios";
import { useEffect, useState } from "react";
import { URI_SEARCH } from "./../utils/constants";
import getCategories from "./../utils/transform/getCategories";
import { getErrorMessage } from "./../utils/utils";
import { useLatestAPI } from "./useLatestAPI";

export function useCategories() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${URI_SEARCH}?ref=${apiRef}&q=${encodeURIComponent(
					'[[at(document.type, "category")]]'
				)}&lang=en-us&pageSize=10`;

				const response = await axios.get(URI, { signal: controller.signal });
				const allCategories = await getCategories(response.data.results);

				setCategories(allCategories);
			} catch (error) {
				setError(getErrorMessage(error));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return { categories, error };
}
