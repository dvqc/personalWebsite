import styles from '../styles/About.module.scss'
const TechIcon = function (props) {
    return (
        <div className={styles.iconContainer}>
            <img className={styles.icon} src={props.imgSrc}></img>
            <p>{props.text}</p>
        </div>
    )
}
export default TechIcon