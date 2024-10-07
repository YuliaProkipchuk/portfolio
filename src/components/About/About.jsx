import myPhoto from '../../assets/photo_2024-10-02_17-11-21.jpg'
import classes from "./About.module.css";
export default function About() {
  return (
    <section id="about" className={classes.about_section}>
      <div className={classes.photo}>
        <img src={myPhoto} alt="my photo" />
      </div>
      <article>
        <div className={classes.intro}>
          <h1>Hi,I'm Yulia Prokipchuk</h1>
          <p className={classes.position}>Frontend Developer</p>
        </div>
        <div className={classes.intro_btns}>
            <button type='btn'className={classes.download_btn}>Download CV</button>
            <button type='btn'className={classes.contact_btn}>Contact Me</button>
        </div>
      </article>
    </section>
  );
}
