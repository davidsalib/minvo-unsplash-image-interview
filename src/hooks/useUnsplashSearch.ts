import { useEffect, useState } from "react";
import unsplashSearchApi from "../services/unsplashSearchApi";
import { useDebounce } from "use-debounce";

export const useUnsplashSearch = (query: string) => {
	// TODO: Implement state management for images, loading, and error states
	const [images, setImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	/* implement debouncing */
	const [debouncedQuery] = useDebounce(query, 1000);

	useEffect(() => {
		// TODO: Implement search functionality

		if (!debouncedQuery) {
			setImages([]);
			return;
		}

		const getImages = async () => {
			setLoading(true);

			try {
				const data = await unsplashSearchApi(debouncedQuery);
				setImages(data.results);
			} catch (error: any) {
				setError(error);
			}

			setLoading(false);
		};

		getImages();
	}, [debouncedQuery]);

	// TODO: Return the necessary states and functions
	return {
		images,
		loading,
		error,
	};
};
