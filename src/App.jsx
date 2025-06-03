import React from 'react'
import Header from './component/Header'
import Player from './component/Player'
import GameBoard from './component/GameBoard'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function App() {
  return (
    <main>
      <Header />
      <div className="container m-auto flex flex-col items-center">
        <div className="gameboard ">
          <div className="players">
            <ol>
             <Player symbol = "X" initialPlayerName ="Player 1"/>
             <Player symbol = "O" initialPlayerName ="Player 2" />
            </ol>
          </div>
          <GameBoard board={initialGameBoard} />
        </div>
      </div>
    </main>
  )
}

export default App