import classes from './Navbar.module.css'
import { useState } from 'react'
import { getImageUrl } from '../../utils'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={classes.navbar}>
            <a className={classes.title} href="/">Portfolio</a>
            <div className={classes.menu}>
                <img className={classes.menuBtn} src={menuOpen ?
                    getImageUrl('nav/closeIcon.png') :
                    getImageUrl('nav/menuIcon.png')
                } alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${classes.menuItems} ${menuOpen && classes.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
