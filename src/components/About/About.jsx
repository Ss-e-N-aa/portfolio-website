import classes from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
    return (
        <section className={classes.container} id="about">
            <h2 className={classes.title}>About</h2>
            <div className={classes.content}>
                <img
                    src={getImageUrl("about/catPc.png")}
                    alt="cartoon image of cat with laptop"
                    className={classes.aboutImage}
                />
                <ul className={classes.aboutItems}>
                    <li className={classes.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={classes.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I&apos;m aiming to be a frontend developer and create responsive
                                and optimized websites.
                            </p>
                        </div>
                    </li>

                    <li className={classes.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={classes.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I&apos;m aiming to design multiple landing pages with eye catching details.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}