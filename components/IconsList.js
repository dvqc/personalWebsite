const IconsList = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div className="flx">
            {props.children}
            </div>
        </div>
    )
}
export default IconsList