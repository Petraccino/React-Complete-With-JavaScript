import "./TabButton.css"

export default function (props) {
    return (
    <li><button onClick={props.onSelected}>{props.title}</button></li>
    )
}