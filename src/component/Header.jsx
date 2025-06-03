import React from 'react'

function Header() {
  return (
   <header className='flex items-center justify-center flex-col relative gap-5'>
    <img className='w-20 mb-12' src="game-logo.png" alt="game-logo " />
    <h1 className='text-7xl font-bold font-mono'>Tic Tac Toe</h1>
   </header>
  )
}

export default Header