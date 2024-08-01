import classes from "./Projects.module.css";
import projects from '../../data/projects.json';
import { getImageUrl } from "../../utils";

export default function Projects() {
    return (
        <section className={classes.container} id="projects">
            <h2 className={classes.title}>Projects</h2>
            <div className={classes.projects}>
                {projects.map((i, id) => (
                    <div key={id} className={classes.projectContainer}>
                        <img src={getImageUrl(i.imageSrc)} alt={`image of ${i.title}`} className={classes.image} />
                        <h2 className={classes.projectTitle}>{i.title}</h2>
                        <p className={classes.description}>{i.description}</p>
                        <ul className={classes.skills}>
                            {i.skills.map((skill, id) =>
                            (
                                <li key={id} className={classes.skill}>
                                    {skill}
                                </li>
                            )
                            )}
                        </ul>
                        <div className={classes.links}>
                            <a href={i.demo} className={classes.link}>
                                Demo
                            </a>
                            <a href={i.source} className={classes.link}>
                                Source
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
