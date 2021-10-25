import React from 'react'
import { useSelector } from 'react-redux'
import { getFilteredServerList } from 'store/lobby/lobbySlice'
import ServerCard from './ServerCard'

const LobbyServerList = () => {
    const servers = useSelector(getFilteredServerList);
    return (
        <div>
            {servers.map((s, index)=>{
                return <ServerCard key={index} 
                servername={s.serverName} 
                serverstatus={s.serverStatus} 
                scorelimit={s.scoreLimit} sets={s.sets}/>
            })}
        </div>
    )
}

export default LobbyServerList
