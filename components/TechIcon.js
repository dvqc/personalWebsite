
const TechIcon = function (props) {
    return (
        <div className="icon-container">
            <img className="icon" src={props.imgSrc}></img>
            <p>{props.text}</p>
        </div>
    )
}
export default TechIcon