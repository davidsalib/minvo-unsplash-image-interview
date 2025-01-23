import UnsplachImage from "../unsplachImage";
import { UnsplashImageInterface } from "../../hooks/useUnsplashSearch";
// @ts-ignore
import classes from "./imagesContainer.module.css";

export default function ImagesContainer({
  imgsData,
  isLoading,
  searchQuery,
  error,
}: {
  error: boolean | null;
  searchQuery: string;
  imgsData: UnsplashImageInterface[];
  isLoading: boolean;
}) {
  if (!searchQuery) {
    return <div className={classes.noImgs}>Please Search For Images</div>;
  }

  if (error) {
    return <div className={classes.noImgs}>Sorry! error occur</div>;
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(9)
          .fill(1)
          .map((_, index) => (
            <div
              key={`img-placeholder-${index}`}
              className="aspect-square bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
      </div>
    );
  }
  if (!imgsData[0]) {
    return <div className={classes.noImgs}>Sorry!, But no images found</div>;
  }
  return (
    <div className={classes.container + " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
      {imgsData?.map((imgData) => (
        <UnsplachImage data={imgData} />
      ))}
    </div>
  );
}
