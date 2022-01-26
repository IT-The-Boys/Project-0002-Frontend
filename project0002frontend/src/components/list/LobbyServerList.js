import React from 'react'
import { useSelector } from 'react-redux'
import { getFilteredServerList } from 'store/lobby/lobbySlice'
import ServerCard from './ServerCard'

const LobbyServerList = () => {
    const servers = useSelector(getFilteredServerList);
    return (
        <div>
            {servers?.map((s, index)=><ServerCard key={index} server={s} />)}
        </div>
    )
}

export default LobbyServerList
