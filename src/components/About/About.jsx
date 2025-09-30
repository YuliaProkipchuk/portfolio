import myPhoto from "../../assets/photo_2024-10-02_17-11-21.jpg";
import classes from "./About.module.css";
import CV from "../../assets/CV_Yullia_Prokipchuk_FS.pdf";
export default function About() {
  return (
    <section id="about" className={classes.about_section}>
      <div className={classes.photo}>
        <img src={myPhoto} alt="my photo" />
      </div>
      <article>
        <div className={classes.intro}>
          <h1>Hi, I'm Yuliia Prokipchuk</h1>
          <p className={classes.position}>Frontend Developer</p>
          <p className={classes.about_info}>
            Enthusiastic and detail-oriented frontend developer with a strong
            foundation in <strong>HTML, CSS, and JavaScript</strong>. Proficient in building
            responsive web applications using <strong>React</strong>.
            Eager to apply knowledge of web development to
            real-world projects and continuously improve skills. 
          </p>
        </div>
        <div className={classes.intro_btns}>
          <div className={classes.socials}>
            <a href="https://linkedin.com/in/yulia-prokipchuk"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/YuliaProkipchuk"><i className="bi bi-github"></i></a>
          </div>
          <a href={CV} download>
            <button type="btn" className={classes.download_btn}>
              Download CV
            </button>
          </a>
        </div>
      </article>
    </section>
  );
}
