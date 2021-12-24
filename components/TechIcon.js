import styles from '../styles/Home.module.css'
const TechIcon = function (props) {
    return (
        <div className={styles.iconContainer}>
            <img className={styles.icon} src={props.imgSrc}></img>
            <p>{props.text}</p>
        </div>
    )
}
export default TechIcon