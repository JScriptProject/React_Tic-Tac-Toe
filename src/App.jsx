import React, { useState } from "react";
import Header from "./component/Header.jsx";
import Player from "./component/Player.jsx";
import GameBoard from "./component/GameBoard.jsx";
import Result from "./component/Result.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import Log from "./component/Log.jsx";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function derivedPlayer(gTurn) {
    let currentPlayer = "X";

    if (gTurn.length > 0 && gTurn[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function App() {
    const [gameTurn, setGameTurn] = useState([]);
    const [players, setPlayers] = useState({
      "X": "Player 1",
      "O": "Player 2"
    });

    const activePlayer = derivedPlayer(gameTurn);
  
    let newgameBoard = [...initialGameBoard].map((row) => [...row]);
    let winner;
    let draw= false;

    function latestPlayer(newSymbol, newPlayerName){
        setPlayers({...players,[newSymbol]:newPlayerName})
    }

    console.log(players);

    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        newgameBoard[row][col] = player;
    }

    for (const combination of WINNING_COMBINATIONS) {
        const firstCombination =
            newgameBoard[combination[0].row][combination[0].column];
        const secondCombination =
            newgameBoard[combination[1].row][combination[1].column];
        const thirdCombination =
            newgameBoard[combination[2].row][combination[2].column];

        if (
            firstCombination &&
            firstCombination === secondCombination &&
            firstCombination === thirdCombination
        ) {
            winner = players[firstCombination];
            console.log("You Won", winner);
        }
    }

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameTurn((prevGameTurn) => {
            const currentPlayer = derivedPlayer(prevGameTurn);
            const updatedGameTurn = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevGameTurn,
            ];
            return updatedGameTurn;
        });
        console.log(gameTurn);
    }
    if(gameTurn.length ==9 && !winner)
    {
      draw=true;
    }

    function reMatch(){
      setGameTurn([]);
      draw=false;
      winner=undefined;
    }
    return (
        <main>
            <Header />
            <div className="container m-auto flex flex-col items-center">
                <div className="gameboard ">
                    <div className="players">
                        <ol>
                            <Player
                                symbol="X"
                                initialPlayerName="Player 1"
                                isActive={activePlayer === "X"} latestPlayer ={latestPlayer}
                            />
                            <Player symbol="O" initialPlayerName="Player 2" isActive={activePlayer ==="O"} latestPlayer ={latestPlayer} />
                        </ol>
                    </div>
                    <GameBoard
                        board={newgameBoard}
                        handleSelectedSquare={handleSelectedSquare}
                    />
                    <Result winner={winner} draw ={draw} reMatch={reMatch} />
                </div>
            </div>
            <Log turn={gameTurn} />
        </main>
    );
}

export default App;
