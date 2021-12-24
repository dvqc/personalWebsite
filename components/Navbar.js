import Link from "next/link"
import styles from '../styles/Home.module.css'
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/"><a>Ibrahim</a></Link>
                <span>Web Developer</span>
            </div>
            <div className={styles.navItems}>
                <Link href="/" ><a className={styles.navItem}>Home</a></Link>
                <Link href="/about" ><a className={styles.navItem}>About</a></Link>
            </div>
        </nav>
    )
}