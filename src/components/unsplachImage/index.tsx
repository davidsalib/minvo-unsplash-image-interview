import { UnsplashImageInterface } from "../../hooks/useUnsplashSearch";

// @ts-ignore
import classes from "./unsplachImage.module.css";

export default function UnsplachImage({ data }: { data: UnsplashImageInterface }) {
  return (
    <div className={classes.container + " " + "aspect-square bg-gray-800 rounded "}>
      <img className={classes.img + " rounded-lg"} src={data.urls.regular} alt="" />
    </div>
  );
}
