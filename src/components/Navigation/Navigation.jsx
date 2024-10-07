import { useState } from "react";
import classes from "./Navigation.module.css";
import NavLink from "./NavLink";
const NAV_LINKS = ["about", "projects", "contact"];
export default function Navigation() {
  const [ind, setIndex] = useState(-1);
  return (
    <nav className={classes.nav}>
      <a href="/" className={classes.logo}>
        Yulia Prokipchuk
      </a>
      <ul className={classes.nav_links}>
        {NAV_LINKS.map((link, index) => (
          <li
            className={`${classes.nav_link} ${ind === index ? classes.active : ""}`}
            key={index}
            onClick={() => setIndex(index)}
          >
            <NavLink content={link} link={link} />
          </li>
        ))}
        <div className={classes.dot}></div>
      </ul>
    </nav>
  );
}
