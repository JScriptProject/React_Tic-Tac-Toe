import React from 'react'

function Log({turn}) {

    if(turn.length>0)
    {   console.log(turn[0].square.row);}
 
  return (
    <div id='log'>
        <ol>
        {turn.map((mod)=>(<li key={`${mod.square.row}${mod.square.col}`}>Selected {mod.player} at {mod.square.row},{mod.square.col}</li>))}
        </ol>
    </div>
  )
}

export default Log