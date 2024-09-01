import clsx from "clsx";

import { NavLink, Link } from "react-router-dom";

import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.pageHeader}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <Link to="/">
            <img className={css.logo} width={136} height={16} src="/icons/logo.svg" alt="logo" />
          </Link>
          <ul className={css.navMenu}>
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={getNavLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
