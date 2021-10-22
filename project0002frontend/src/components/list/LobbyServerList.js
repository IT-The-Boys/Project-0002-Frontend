import React from 'react'
import { useSelector } from 'react-redux';

const LobbyServerList = () => {
    const lobby = useSelector((state) => state.lobby);
    return (
        <div>
        {lobby.lobbyServer}
         {lobby.serverList.map(s=>{
             return <h1>{s.sets}</h1>
         })}
        </div>
    )
}

export default LobbyServerList
