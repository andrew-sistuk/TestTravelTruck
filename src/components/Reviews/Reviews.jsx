import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { currentItem } = useSelector(selectCampers);
  const { reviews } = currentItem;

  return (
    <div className={css.reviewsWrapper}>
      <ul className={css.reviewList}>
        {reviews.map((item) => (
          <li key={nanoid()}>
            <ReviewItem review={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
