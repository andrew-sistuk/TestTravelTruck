import LinkButton from "../../components/LinkButton/LinkButton.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <LinkButton to={"/catalog"}>View Now</LinkButton>
      </div>
    </section>
  );
}
