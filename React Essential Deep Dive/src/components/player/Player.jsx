import "./Player.css";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEdit() {
    setIsEditing((isEdit) => !isEdit);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  }
  function handleName(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} onChange={handleName} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </span>
    </li>
  );
}
