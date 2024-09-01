import { nanoid } from "nanoid";
import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ gallery }) {
  return (
    <div>
      <ul className={css.galleryList}>
        {gallery.map((item) => (
          <li key={nanoid()}>
            <ImageCard image={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
