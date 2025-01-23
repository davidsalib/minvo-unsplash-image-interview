import axios from "axios";
import { UnsplashImageResponeInterface } from "../hooks/useUnsplashSearch";

const UNSPLASH_ACCESS_KEY = "6FfROqtHfJTUW5xwupX5ghiE_M4x1xDOPJyvJ1S_41I";

export const searchForUnsplachImage = async (
  query: string
): Promise<UnsplashImageResponeInterface> => {
  try {
    const { data } = await axios.get("https://api.unsplash.com/search/photos/", {
      params: {
        client_id: UNSPLASH_ACCESS_KEY,
        query,
        page: 1,
      },
    });
    return data;
  } catch (e) {
    throw true;
  }
};
