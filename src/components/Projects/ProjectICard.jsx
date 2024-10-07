import classes from "./Projects.module.css";
export default function ProjectCard({ title, description, liveLink, gitLink }) {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>{/* <img src="" alt="" /> */}
        <div className={classes.left}><i className="bi bi-arrow-left-short"></i></div>
        <div className={classes.right}><i className="bi bi-arrow-right-short"></i></div>
      </div>
      <div className={classes.card_info}>
        <p className={classes.project_title}> Project title</p>
        <span className={classes.project_stack}>React, HTML, CSS</span>
        <hr />
        <p className={classes.project_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni
          facere, dolorem fuga cupiditate nostrum, iure recusandae asperiores,
          obcaecati debitis laborum repellendus corporis voluptatum numquam
          laudantium aliquid nihil. Nobis, adipisci!
        </p>
        <div className={classes.card_btns}>
            <a href="#">Demo</a>
            <a href="#">GitHub <i className="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  );
}
