import "./TabButton.css";

export default function ({isSelected, onSelected, title, ...props}) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        {...props}
      >
        {title}
      </button>
    </li>
  );
}
