import { BASE_URL, UNSPLASH_ACCESS_KEY } from "../lib/constants/api.constants";

const unsplashSearchApi = function (query: string): Promise<ApiResponse<UnsplashImage[]>> {
	return fetch(`${BASE_URL}/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}`).then((res) => {
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}
		return res.json();
	});
};

export default unsplashSearchApi;
