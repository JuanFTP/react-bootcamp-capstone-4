import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useLatestAPI } from "./useLatestAPI";

export function useFeaturedProducts() {
	const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
	const [featuredProducts, setFeaturesProducts] = useState(() => ({
		data: {},
		isLoading: true,
	}));

	useEffect(() => {
		if (!apiRef || isApiMetadataLoading) {
			return () => {};
		}

		const controller = new AbortController();

		async function getFeaturedProducts() {
			try {
				setFeaturesProducts({ data: {}, isLoading: true });

				const response = await fetch(
					`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
						'[[at(document.type, "product")]]'
					)}&lang=en-us&pageSize=120`,
					{
						signal: controller.signal,
					}
				);
				const data = await response.json();

				setFeaturesProducts({ data, isLoading: false });
			} catch (err) {
				setFeaturesProducts({ data: {}, isLoading: false });
				console.error(err);
			}
		}

		getFeaturedProducts();

		return () => {
			controller.abort();
		};
	}, [apiRef, isApiMetadataLoading]);

	return featuredProducts;
}
