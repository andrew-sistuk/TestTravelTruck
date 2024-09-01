import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <>
      <img className={css.camperImage} src={image.original} alt={"camper photo"} width="292px" height="312px" />
    </>
  );
}
