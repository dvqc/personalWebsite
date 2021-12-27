import styles from '../styles/About.module.css'
const IconsList = (props) => {
    return(
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <div className="flx">
            {props.children}
            </div>
        </div>
    )
}
export default IconsList