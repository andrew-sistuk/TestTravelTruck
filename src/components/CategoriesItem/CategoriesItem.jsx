import css from "./CategoriesItem.module.css";

export default function CategoriesItem({ icon: Icon, title }) {
  const formattedTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

  return (
    <div className={css.itemWrapper}>
      <Icon size={20} />
      <p className={css.itemText}>{formattedTitle}</p>
    </div>
  );
}
