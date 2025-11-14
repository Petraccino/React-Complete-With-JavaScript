import "./TabButton.css"

function handleClick(){
    console.log("Hello World");
}


export default function (props) {
    return (
    <li><button onClick={handleClick}>{props.title}</button></li>
    )
}