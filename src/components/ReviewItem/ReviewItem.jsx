import RatingStars from "../RatingStars/RatingStars.jsx";
import css from "./ReviewItem.module.css";

export default function ReviewItem({ review: { comment, reviewer_name, reviewer_rating } }) {
  return (
    <>
      <div className={css.titleReviewContainer}>
        <div className={css.firstLeterName}>{reviewer_name[0]}</div>
        <div className={css.nameWrapper}>
          <h3 className={css.name}>{reviewer_name}</h3>
          <RatingStars count={reviewer_rating} />
        </div>
      </div>

      <p>{comment}</p>
    </>
  );
}
