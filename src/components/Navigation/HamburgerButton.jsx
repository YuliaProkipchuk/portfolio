import { useState } from "react";
import classes from "./Navigation.module.css";
import { motion } from "framer-motion";
export default function HamburgerButton({active, setActive}) {
  return (
    <motion.button
      className={classes.hamburger_btn}
      onClick={() => setActive((prev) => !prev)}
      animate={active ? "open" : "closed"}
      initial={false}
    >
      <motion.span
        style={{
          top: "35%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
            open:{
                rotate:['0deg', '0deg','45deg'],
                top:'50%',
                background:'var(--orange)'

            },
            closed:{
                rotate:['45deg','0deg','0deg'],
                top:['50%', '50%', '35%']
            }
        }}
        className={classes.btn_bars}
      />
      <motion.span
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
            open:{
                rotate:['0deg', '0deg','-45deg'],
                background:'var(--orange)'

            },
            closed:{
                rotate:['-45deg','0deg','0deg'],
            }
        }}
        className={classes.btn_bars}
      />
      <motion.span
        style={{
          bottom: "35%",
          left: "calc(50% + 6px)",
          x: "-50%",
          y: "50%",
        }}
        variants={{
            open:{
                rotate:['0deg', '0deg','45deg'],
                bottom:'50%',
                left:["calc(50% + 6px)","calc(50% + 6px)",'50%'],
                background:'var(--orange)'
            },
            closed:{
                rotate:['45deg','0deg','0deg'],
                bottom:['50%', '50%', '35%'],
                left:['50%',"50%","calc(50% + 6px)"]

            }
        }}
        className={classes.btn_bars}
      />
    </motion.button>
  );
}
