import htmlSvg from "../../assets/20110528111552!HTML5_logo_and_wordmark.svg";
import cssSvg from "../../assets/64px-CSS3_logo.svg.png";
import jsSvg from "../../assets/64px-Unofficial_JavaScript_logo_2.svg.png";
import bootstrapSvg from "../../assets/64px-Bootstrap_logo.svg.png";
import mongoDBSvg from "../../assets/mongodb.svg";
import nodejsSvg from "../../assets/nodejs.svg";
import reactSvg from "../../assets/64px-React-icon.svg.png";
import expressSvg from "../../assets/express.svg";
import classes from "./Tech.module.css";
export default function Technologies() {
  return (
    <div className={classes.tech_section}>
      <div className={classes.logos_icons}>
        <img src={htmlSvg} alt="" className={classes.logos} />
        <img src={cssSvg} alt="" className={classes.logos} />
        <img src={jsSvg} alt="" className={classes.logos} />
        <img src={bootstrapSvg} alt="" className={classes.logos} />
        <img src={mongoDBSvg} alt="" className={classes.logos} />
        <img src={nodejsSvg} alt="" className={classes.logos} />
        <img src={reactSvg} alt="" className={classes.logos} />
        <img src={expressSvg} alt="" className={classes.logos} />
      </div>
      <div className={classes.tech_stack}>
        <span
          style={{ "--i": 1 }}
          className={`${classes.tech} ${classes.thtml}`}
        >
          HTML
        </span>
        <span style={{ "--i": 2 }} className={`${classes.tech} ${classes.css}`}>
          CSS
        </span>
        <span style={{ "--i": 3 }} className={`${classes.tech} ${classes.js}`}>
          JavaScript
        </span>
        <span
          style={{ "--i": 4 }}
          className={`${classes.tech} ${classes.react}`}
        >
          React
        </span>
        <span
          style={{ "--i": 5 }}
          className={`${classes.tech} ${classes.bootstrap}`}
        >
          Bootstrap
        </span>
        <span
          style={{ "--i": 6 }}
          className={`${classes.tech} ${classes.mongo}`}
        >
          MongoDB
        </span>
        <span
          style={{ "--i": 7 }}
          className={`${classes.tech} ${classes.node}`}
        >
          Node.js
        </span>
        <span
          style={{ "--i": 8 }}
          className={`${classes.tech} ${classes.express}`}
        >
          Express.js
        </span>
        <span
          style={{ "--i": 9 }}
          className={`${classes.tech} ${classes.git}`}
        >
          Git
        </span>
      </div>
      <div className={classes.logos_icons}>
        <img src={htmlSvg} alt="" className={classes.logos} />
        <img src={cssSvg} alt="" className={classes.logos} />
        <img src={jsSvg} alt="" className={classes.logos} />
        <img src={bootstrapSvg} alt="" className={classes.logos} />
        <img src={mongoDBSvg} alt="" className={classes.logos} />
        <img src={nodejsSvg} alt="" className={classes.logos} />
        <img src={reactSvg} alt="" className={classes.logos} />
        <img src={expressSvg} alt="" className={classes.logos} />
      </div>
    </div>
  );
}
