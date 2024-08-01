import classes from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from '../../data/skills.json'
import history from '../../data/history.json'

export default function Experience() {
    return (
        <section className={classes.container} id="experience">
            <h2 className={classes.title}>Experience</h2>
            <div className={classes.content}>
                <div className={classes.skills}>
                    {skills.map((i, id) => (
                        <div key={id} className={classes.skill}>
                            <div className={classes.skillImageContainer}>
                                <img src={getImageUrl(i.imageSrc)} alt={i.title} />
                            </div>
                            <p>{i.title}</p>
                        </div>
                    ))}
                </div>
                <ul className={classes.history}>
                    {history.map((i, id) => (
                        <li key={id} className={classes.historyItem}>
                            <img src={getImageUrl(i.imageSrc)} alt={`${i.organisation} logo`} />
                            <div className={classes.historyItemDetails}>
                                <h3>{`${i.role}, ${i.organisation}`}</h3>
                                <p>{`${i.startDate} - ${i.endDate}`}</p>
                                <ul>{i.experiences.map((exp, id) => (
                                    <li key={id}>{exp}</li>
                                ))}</ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
