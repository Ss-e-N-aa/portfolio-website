import classes from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export default function Contact() {
    return (
        <footer id="contact" className={classes.container}>
            <div className={classes.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={classes.links}>
                <li className={classes.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:sena.abodan@gmail.com">sena.abodan@gmail.com</a>
                </li>
                <li className={classes.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/sena-abodan">linkedin.com/in/sena-abodan</a>
                </li>
                <li className={classes.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://www.github.com/Ss-e-N-aa">github.com/Ss-e-N-aa</a>
                </li>
            </ul>
        </footer>
    );
}