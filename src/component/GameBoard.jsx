import React from "react";

function GameBoard({ board }) {
    return (
        <div className="gameboard">
            <ol>
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>{playerSymbol}</li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default GameBoard;
