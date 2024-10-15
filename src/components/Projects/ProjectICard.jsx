import { useState } from "react";
import classes from "./Projects.module.css";
export default function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <img
          src={project.images[imgIndex].url}
          alt={project.images[imgIndex].alt}
        />
        <div
          className={classes.left}
          onClick={() => setImgIndex((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <i className="bi bi-arrow-left-short"></i>
        </div>
        <div
          className={classes.right}
          onClick={() =>
            setImgIndex((prev) =>
              prev < project.images.length - 1
                ? prev + 1
                : project.images.length - 1
            )
          }
        >
          <i className="bi bi-arrow-right-short"></i>
        </div>
      </div>
      <div className={classes.card_info}>
        <p className={classes.project_title}> {project.title}</p>
        <span className={classes.project_stack}>{project.stack}</span>
        <hr />
        <p className={classes.project_description}>{project.description}</p>
        <div className={classes.card_btns}>
          {/* <a href="#">Demo</a> */}
          <a href={project.git}>
            GitHub <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
