import { useState } from "react";
import classes from "./Navigation.module.css";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";
import NavMenu from "./NavMenu";
export default function Navigation() {
  const [active, setActive] = useState(false);

  return (
    <nav className={classes.nav}>
      <a href="/" className={classes.logo}>
        Yulia Prokipchuk
      </a>
      <NavMenu cssStyle={"nav_links"} />
      <HamburgerButton active={active} setActive={setActive} />
      {active && <NavMenu cssStyle={"hamburger_menu"} />}
    </nav>
  );
}
