import GameBoard from "./components/gameboard/GameBoard";
import Log from "./components/log/Log";
import Player from "./components/player/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurn] = useState([]);

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive ={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive ={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
