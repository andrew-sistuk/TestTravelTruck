import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./CamperInfoNavigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active, css.default);
};

export default function CamperInfoNavigation() {
  return (
    <ul className={css.addInformationList}>
      <li>
        <NavLink to="features" className={getNavLinkClass}>
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={getNavLinkClass}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
