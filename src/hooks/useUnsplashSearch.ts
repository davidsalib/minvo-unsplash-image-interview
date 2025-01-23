import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import axios from "axios";

interface UnsplashImage {
  // TODO: Define the UnsplashImage interface
  alt_description: string;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

// Unplash Docs: https://unsplash.com/documentation
const UNSPLASH_ACCESS_KEY = "6FfROqtHfJTUW5xwupX5ghiE_M4x1xDOPJyvJ1S_41I";

export const useUnsplashSearch = (query: string) => {
  // TODO: Implement state management for images, loading, and error states
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 500); // 500ms delay

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: debouncedQuery,
              client_id: UNSPLASH_ACCESS_KEY,
            },
          }
        );

        if (data) {
          setImages(data.results);
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to fetch images");
      }

      setIsLoading(false);
    };
    if (debouncedQuery.length > 0) {
      fetchImages();
    }
  }, [debouncedQuery]);

  // TODO: Return the necessary states and functions
  return {
    images,
    isLoading,
    error,
  };
};
