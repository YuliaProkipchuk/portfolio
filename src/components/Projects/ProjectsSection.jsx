import ProjectCard from './ProjectICard';
import classes from './Projects.module.css';
import { PROJECTS } from './projectsInfo';
export default function ProjectSection(){
    return <section className={classes.projects_section} id='projects'>
        <h2>Projects</h2>
        <div className={classes.projects_grid}>
        <ProjectCard project={PROJECTS[0]}/>
        <ProjectCard project={PROJECTS[1]}/>
        <ProjectCard project={PROJECTS[2]}/>
        </div>
    </section>
}