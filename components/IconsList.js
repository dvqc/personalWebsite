import styles from '../styles/Home.module.css'
const IconsList = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div className={styles.flx}>
            {props.children}
            </div>
        </div>
    )
}
export default IconsList