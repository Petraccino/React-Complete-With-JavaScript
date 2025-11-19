import GameBoard from "./components/gameboard/GameBoard";
import Log from "./components/log/Log";
import Player from "./components/player/Player";
import { useState } from "react";
import {
  deriveActivePlayer,
  deriveWinner,
  deriveGameBoard,
  PLAYERS,
} from "./util/Util";
import GameOver from "./components/gameover/GameOver";

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  const [players, setNamePlayers] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const activePlayer = deriveActivePlayer(prevTurn);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurn,
      ];

      return updateTurns;
    });
  }

  function handleOnRestart() {
    setGameTurn([]);
  }

  function handlePlayerChangeName(symbol, newName) {
    setNamePlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerChangeName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerChangeName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            hasDraw={hasDraw}
            onRestart={handleOnRestart}
          />
        )}
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
