import "./Player.css";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((isEdit) => !isEdit);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} />
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
