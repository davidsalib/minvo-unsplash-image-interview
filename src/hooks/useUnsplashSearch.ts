import { useState, useEffect } from "react";
import { searchForUnsplachImage } from "../api";

// TODO: choose anAPI Framework
// import axios from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";

export interface UnsplashImageResponeInterface {
  results: UnsplashImageInterface[];
}

export interface UnsplashImageInterface {
  id: string;
  urls: {
    full: string;
    regular: string;
  };
}

// Unplash Docs: https://unsplash.com/documentation

export const useUnsplashSearch = (query: string) => {
  // TODO: Implement state management for images, loading, and error states
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery<UnsplashImageResponeInterface, boolean>({
    queryKey: ["searchImg", query],
    queryFn: () => {
      return searchForUnsplachImage(query);
    },
    retry: false,
  });

  useEffect(() => {
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
    loading,
    error,
  };
};
