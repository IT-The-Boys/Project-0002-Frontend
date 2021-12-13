import React, { useEffect } from 'react'
import ServerList from 'components/serverlist'
import GameFilterForm from 'components/forms/GameFilterForm'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'store/app/appSlice'

const GameLobbyView = () => {
    const lobbyId = useParams().lobbyId;
    const { lobbyList, currentTheme } = useSelector((state) => state.app);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (lobbyId !== "cah" || lobbyList.length === 0) navigate("/");
        if (currentTheme.name !== "defaultTheme") dispatch(setTheme("defaultTheme"))
    }
        , [lobbyId, navigate, lobbyList, currentTheme.name, dispatch])
    return (
        <div>
            <h1>{lobbyId}</h1>
            <button> Create Game </button>
            <GameFilterForm />
            {/* -><CreateGamePopup />> */}
            <ServerList />
        </div>
    )
}

export default GameLobbyView
