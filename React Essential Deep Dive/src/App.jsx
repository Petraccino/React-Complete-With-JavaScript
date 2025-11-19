import GameBoard from "./components/gameboard/GameBoard";
import Log from "./components/log/Log";
import Player from "./components/player/Player";
import { useState } from "react";
import {
  initialGameBoard,
  deriveActivePlayer,
  WINNING_COMBINATIONS,
} from "./util/Util";
import GameOver from "./components/gameover/GameOver";

function App() {
  const [gameTurns, setGameTurn] = useState([]);

  let gameBoard = initialGameBoard;
  let winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} hasDraw={hasDraw} />}
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
