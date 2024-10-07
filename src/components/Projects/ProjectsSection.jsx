import ProjectCard from './ProjectICard';
import classes from './Projects.module.css';
export default function ProjectSection(){
    return <section className={classes.projects_section} id='projects'>
        <h2>Projects</h2>
        <div className={classes.projects_grid}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
    </section>
}