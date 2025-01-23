import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { UnsplashImage } from "../models/unsplashImage";


// Unplash Docs: https://unsplash.com/documentation
const UNSPLASH_ACCESS_KEY = "Nj5tsOjwLRrXqeAxQ3cwI08nXrIu0sfs5lycNvNsL4Y";
const UNSPLASH_API_URL = `https://api.unsplash.com/search/photos`

export const useUnsplashSearch = (query: string) => {
  // TODO: Implement state management for images, loading, and error states


  const getImages = async (): Promise<UnsplashImage[]> => {
    const result = await axios.get(UNSPLASH_API_URL, {
      params: {
        'client_id' : UNSPLASH_ACCESS_KEY,
        query
      }
    })
    return result.data['results']
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['images', query],
    queryFn: () => getImages(),
    enabled: query.length > 0,

  })

  useEffect(() => {
    // if(query && query.length > 0){
    //   refetch()
    // }
    //
    // TODO: Implement search functionality
    // 1. Check if query is not empty
    // 2. Set loading to true
    // 3. Fetch images from Unsplash API
    // 4. Update images state
    // 5. Handle any errors
    // 6. Set loading to false
  }, [query]);

  // TODO: Return the necessary states and functions
  return {
    images: data,
    error,
    isLoading
  };
};
