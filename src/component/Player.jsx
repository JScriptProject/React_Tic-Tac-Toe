import React,{useState} from "react";

function Player({symbol, initialPlayerName, isActive, latestPlayer}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);

    const handleClick=()=>{
        setIsEditing((isEditing)=> !isEditing);
        latestPlayer(symbol, playerName);
    }

    const handleChange = (event) =>{
        setPlayerName(event.target.value);
    }
   let updatedPlayer =  <span className="playerName">{playerName}</span>;
   if(isEditing)
   {
    updatedPlayer = <input className="PlayerName" type="text" value={playerName} onChange={handleChange}/>
   }
    return (
        <li className={isActive ? "active" :""}>
            <span className="player">
               {updatedPlayer}
                <span className="playerSymbol">{symbol}</span>
            </span>
            <button className="btn" onClick={handleClick}>{isEditing? "Save" : "Edit"}</button>
        </li>
    );
}

export default Player;
