import "./TabButton.css";

export default function (props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelected}
      >
        {props.title}
      </button>
    </li>
  );
}
