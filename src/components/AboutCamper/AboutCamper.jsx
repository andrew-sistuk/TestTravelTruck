import { StarFill, Map } from "react-bootstrap-icons";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import css from "./AboutCamper.module.css";

export default function AboutCamper({ camper }) {
  const { gallery, name, price, rating, reviews, location, description } = camper;

  const [country, city] = location.split(", ");
  const swappedLocation = `${city}, ${country}`;

  return (
    <div className={css.aboutCamperWrapper}>
      <h2 className={css.camperName}>{name}</h2>
      <div className={css.ratingLocationContainer}>
        <div className={css.ratingWrapper}>
          <StarFill className={css.starIcon} size={16} />
          <p>
            {rating}({reviews.length})Reviews
          </p>
        </div>
        <div className={css.locationWrapper}>
          <Map className={css.mapIcon} size={16} />
          <p>{swappedLocation}</p>
        </div>
      </div>
      <p className={css.priceValue}>&#8364;{price.toFixed(2)}</p>
      <ImageGallery gallery={gallery} />
      <p>{description}</p>
    </div>
  );
}
