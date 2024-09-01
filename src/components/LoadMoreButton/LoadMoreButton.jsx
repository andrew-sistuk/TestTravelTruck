import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick, children }) {
  return (
    <button className={css.moreBtn} onClick={onClick}>
      {children}
    </button>
  );
}
