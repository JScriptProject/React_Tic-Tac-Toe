import React from "react";

function GameBoard({ board, handleSelectedSquare }) {
    
    return (
        <div className="board">
            <ol className="boardOL">
                {board.map((row, rowIndex) => (
                    <li className="boardLI" key={rowIndex}>
                        <ol className="GridOL-inside">
                            {row.map((symbol, colIndex) => (
                                <li key={colIndex}><button onClick={()=>handleSelectedSquare(rowIndex, colIndex)} disabled={symbol !== null} >{symbol}</button></li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default GameBoard;
