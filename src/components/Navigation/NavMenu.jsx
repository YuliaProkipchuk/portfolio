import { useState } from 'react';
import classes from './Navigation.module.css'
import NavLink from './NavLink';
const NAV_LINKS = ["about", "projects", "contact"];

export default function NavMenu({cssStyle}){
  const [ind, setIndex] = useState(-1);

    return  <ul className={classes[cssStyle]}>
    {NAV_LINKS.map((link, index) => (
      <li
        className={`${classes.nav_link} ${ind === index ? classes.active : ""}`}
        key={index}
        onClick={() => setIndex(index)}
      >
        <NavLink content={link} link={link} />
      </li>
    ))}
  </ul>
}