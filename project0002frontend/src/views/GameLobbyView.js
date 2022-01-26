import React, { useEffect, useState } from 'react'

import GameFilterForm from 'components/forms/GameFilterForm/GameFilterForm'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getCahGameList } from 'store/lobby/lobbySlice'
import LobbyServerList from 'components/list/LobbyServerList'
const GameLobbyView = () => {
    const lobbyId = useParams().lobbyId;
    const { lobbyList } = useSelector((state) => state.app);
    const { serverList, lobbyStatus} = useSelector((state) => state.lobby);
    console.log("server List", serverList);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (lobbyId !== "cah" || lobbyList.length === 0) navigate("/");
        if (lobbyStatus === 'idle') dispatch(getCahGameList());
    }
        , [lobbyId, navigate, lobbyList, dispatch, lobbyStatus])
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    console.log(lobbyId)
    console.log(lobbyList)
    // 本番はコメントアウト消す
    // useEffect(() => {
    //     if (lobbyId!=="cah"|| lobbyList.length===0) navigate("/");
    // }
    //    ,[lobbyId, navigate, lobbyList])
    return (
        <div>
            <h1>{lobbyId}</h1>
            <button> Create Game </button>
            <GameFilterForm />
            
            {/* -><CreateGamePopup />> */}
            <LobbyServerList />
        </div>
    )
}

export default GameLobbyView
