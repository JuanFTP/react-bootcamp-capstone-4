import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./../utils/constants";
import { useLatestAPI } from "./useLatestAPI";
import getBanners from "./../utils/transform/getBanners";

export function useBanners() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
					'[[at(document.type, "banner")]]'
				)}&lang=en-us&pageSize=5`;

				const response = await axios.get(URI);
				const allBanners = await getBanners(response.data.results);

				setBanners(allBanners);
			} catch (error) {
				if (error.response) {
					setError("Ha ocurrido un error en el servidor del clima");
				} else if (error.request) {
					setError("Verifica tu conexión a internet");
				} else {
					setError("Error al cargar los datos");
				}
			}
		})();
	}, [apiRef, isApiMetadataLoading]);

	return { banners, error };
}
