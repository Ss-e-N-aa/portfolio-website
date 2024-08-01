import { getImageUrl } from '../../utils'
import classes from './Hero.module.css'

export default function Hero() {
    return (
        <section className={classes.container}>
            <div className={classes.content}>
                <h1 className={classes.title}>
                    Hi, I&apos;m Sena
                </h1>
                <p className={classes.description}>
                    I&apos;m a new React developer and I&apos;m eager to seek out opportunities to learn and enhance my skills to deliver high-quality work.
                </p>
                <a className={classes.contactBtn} href="mailto:myemail@email.com">  {/* put an actual email instead of myemail.. */}
                    Contact Me
                </a>
            </div>
            <img src={getImageUrl('hero/MeIcon.png')} alt="hero-image of me. " className={classes.heroImg} />
            {/*             <div className={classes.topBlur} />
            <div className={classes.bottomBlur} /> */}
        </section>
    )
}
