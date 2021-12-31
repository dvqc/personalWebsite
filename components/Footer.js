import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © 2022 B.Ibrahim.
            </p>
            <div className={styles.links}>
                {/* <a href="#"><img src="/icons/facebook.svg" /></a>
                <a href="#"><img src="/icons/gmail.svg" /></a>github.com/dvqc */}
                <a href="https://www.google.com"><img src="/icons/github.svg" /></a>
                <a href="https://www.linkedin.com/in/ibrahim-benfares-5590a0225/"><img src="/icons/linkedin.svg" /></a>
            </div>
        </footer>
    )
}