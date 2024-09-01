import { SuitHeart, StarFill, Map } from "react-bootstrap-icons";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import LinkButton from "../LinkButton/LinkButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCampers);
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const { gallery, name, price, rating, reviews, location, description, id } = camper;

  const [country, city] = location.split(", ");
  const swappedLocation = `${city}, ${country}`;

  const handleClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.camperCardContainer}>
      <img className={css.camperImage} src={gallery[0].original} alt={name} width="292px" height="320px" />
      <div>
        <div className={css.titleWrapper}>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.priceContainer}>
            <p className={css.priceValue}>&#8364;{price.toFixed(2)}</p>
            <button className={css.isFavoriteBtn} onClick={handleClick}>
              <SuitHeart className={isFavorite ? css.isFavoriteIconRed : css.isFavoriteIcon} size={24} />
            </button>
          </div>
        </div>
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
        <p className={css.description}>{description}</p>
        <CategoriesList camper={camper} />
        <LinkButton variant="small" to={`/catalog/${id}`}>
          Show more
        </LinkButton>
      </div>
    </div>
  );
}
