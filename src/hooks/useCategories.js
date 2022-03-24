import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./../utils/constants";
import getCategories from "./../utils/transform/getCategories";
import { useLatestAPI } from "./useLatestAPI";

export function useCategories() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
					'[[at(document.type, "category")]]'
				)}&lang=en-us&pageSize=10`;

				const response = await axios.get(URI);
				const allCategories = await getCategories(
					response.data.results
				);

				setCategories(allCategories);
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
	}, [apiRef, isApiMetadataLoading]);

	return { categories, error };
}
