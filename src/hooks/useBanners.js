import axios from "axios";
import { useEffect, useState } from "react";
import { URI_SEARCH } from "./../utils/constants";
import getBanners from "./../utils/transform/getBanners";
import { getErrorMessage } from "./../utils/utils";
import { useLatestAPI } from "./useLatestAPI";

export function useBanners() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [error, setError] = useState();
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		if (!apiRef || isApiMetadataLoading) {
			setError("No se ha podido obtener la referencia de la API");

			return () => {};
		}

		(async () => {
			try {
				const URI = `${URI_SEARCH}?ref=${apiRef}&q=${encodeURIComponent(
					'[[at(document.type, "banner")]]'
				)}&lang=en-us&pageSize=5`;

				const response = await axios.get(URI, {
					signal: controller.signal,
				});
				const allBanners = await getBanners(response.data.results);

				setBanners(allBanners);
			} catch (error) {
				setError(getErrorMessage(error));
			}
		})();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return { banners, error };
}
