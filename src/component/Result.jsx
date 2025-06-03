import React from "react";

function Result({ winner, draw, reMatch }) {
    return (
        <div className={winner || draw ? "result result-active" : "result"}>
            <div className={winner || draw ? "modal modal-active" : "modal"}>
                <h5>Game Over!</h5>
                {winner && <h2>You Won {winner}!</h2>}
                {draw && <h2>Match Draw!</h2>}

                <button onClick={reMatch}>ReMatch!</button>
            </div>
        </div>
    );
}

export default Result;
