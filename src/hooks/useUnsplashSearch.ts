import { useEffect, useState } from "react";

// TODO: choose anAPI Framework
// import axios from "axios";

type UnsplashImage = {
	id: string;
	slug: string;
	alternative_slugs: {
		en: string;
		es: string;
		ja: string;
		fr: string;
		it: string;
		ko: string;
		de: string;
		pt: string;
	};
	created_at: string;
	updated_at: string;
	promoted_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string;
	alt_description: string;
	breadcrumbs: [];
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	links: {
		self: string;
		html: string;
		download: string;
		download_location: string;
	};
	likes: number;
	liked_by_user: boolean;
	current_user_collections: [];
	sponsorship: null;
	topic_submissions: {
		"business-work": {
			status: string;
			approved_on: string;
		};
	};
	asset_type: string;
	user: {
		id: string;
		updated_at: string;
		username: string;
		name: string;
		first_name: string;
		last_name: string;
		twitter_username: null;
		portfolio_url: string;
		bio: string;
		location: string;
		links: {
			self: string;
			html: string;
			photos: string;
			likes: string;
			portfolio: string;
			following: string;
			followers: string;
		};
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
		instagram_username: string;
		total_collections: number;
		total_likes: number;
		total_photos: number;
		total_promoted_photos: number;
		total_illustrations: number;
		total_promoted_illustrations: number;
		accepted_tos: boolean;
		for_hire: boolean;
		social: {
			instagram_username: string;
			portfolio_url: string;
			twitter_username: null;
			paypal_email: null;
		};
	}[];
};

const BASE_URL = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = "6FfROqtHfJTUW5xwupX5ghiE_M4x1xDOPJyvJ1S_41I";

export const useUnsplashSearch = (query: string) => {
	// TODO: Implement state management for images, loading, and error states
	const [images, setImages] = useState<UnsplashImage[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// TODO: Implement search functionality

		if (!query) {
			return;
		}

		const getImages = async () => {
			setLoading(true);

			const res = await fetch(`${BASE_URL}/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}`);

			console.log("res ->", res);

			if (res.ok) {
				const data = await res.json();
				console.log("data ->", data);
				setImages(data.results);
			}

			setLoading(false);
		};
		getImages();
		// 1. Check if query is not empty
		// 2. Set loading to true
		// 3. Fetch images from Unsplash API
		// 4. Update images state
		// 5. Handle any errors
		// 6. Set loading to false
	}, [query]);

	// TODO: Return the necessary states and functions
	return {
		images,
		loading,
		error,
	};
};
