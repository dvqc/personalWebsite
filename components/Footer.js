import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © 2022 B.Ibrahim.
            </p>
            <div className={styles.links}>
                <a href="#"><img src="/icons/facebook.svg" /></a>
                <a href="#"><img src="/icons/gmail.svg" /></a>
                <a href="#"><img src="/icons/github.svg" /></a>
                <a href="#"><img src="/icons/linkedin.svg" /></a>
            </div>
        </footer>
    )
}