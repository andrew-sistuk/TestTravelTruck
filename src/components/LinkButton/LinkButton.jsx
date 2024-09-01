import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./LinkButton.module.css";

export default function LinkButton({ variant, children, to }) {
  return (
    <Link to={to} className={clsx(css.linkBtn, css[variant])}>
      {children}
    </Link>
  );
}
