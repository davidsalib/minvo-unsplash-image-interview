import { useState, useEffect } from "react";

// TODO: choose anAPI Framework
// import axios from "axios";
// import { QueryClient } from "@tanstack/react-query";

interface UnsplashImage {
  // TODO: Define the UnsplashImage interface
}

// Unplash Docs: https://unsplash.com/documentation
const UNSPLASH_ACCESS_KEY = "6FfROqtHfJTUW5xwupX5ghiE_M4x1xDOPJyvJ1S_41I";

export const useUnsplashSearch = (query: string) => {
  // TODO: Implement state management for images, loading, and error states

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
    // images,
    // loading,
    // error
  };
};
