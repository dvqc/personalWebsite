import styles from '../styles/About.module.css'

const AboutCard = (props) => {
    return(
        <section className={ styles.aboutCard }>
        <h2 className={styles.title}>{props.title}</h2>
        { props.children }
        </section>
    )
}
export default AboutCard