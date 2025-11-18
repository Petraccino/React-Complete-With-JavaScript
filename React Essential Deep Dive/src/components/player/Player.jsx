import "./Player.css";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [selectedTopic, setSelectedTopic] = useState(false);

  function handleEdit() {
    setSelectedTopic((isEdit) => !isEdit);
  }

  return (
    <li>
      <span className="player">
        {selectedTopic ? (
          <input type="text" required value={name}/>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        {selectedTopic ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </span>
    </li>
  );
}
