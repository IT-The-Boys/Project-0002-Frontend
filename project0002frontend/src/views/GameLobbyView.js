import React, { useState, useEffect } from 'react'
import ServerList from 'components/list/LobbyServerList'
import GameFilterForm from 'components/forms/GameFilterForm/GameFilterForm'
import CreateGamePopup from 'components/popup/CreateGamePopup';
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'

const GameLobbyView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const lobbyId=useParams().lobbyId;
    const { lobbyList } = useSelector((state) => state.app);
    const navigate=useNavigate()
    console.log(lobbyId)
    console.log(lobbyList)
    useEffect(() => {
        if (lobbyId!=="cah"|| lobbyList.length===0) navigate("/");
    }
        ,[lobbyId, navigate, lobbyList])
    return (
        <div>
            <h1>{lobbyId}</h1>
            <button> Create Game </button>
            <GameFilterForm />
            <div>
                <input type='button' value='Create Your Game' onClick={togglePopup} />
                { isOpen && <CreateGamePopup 
                    handleClose={togglePopup}
                />}
            </div>
            <ServerList />
        </div>
    )
}

export default GameLobbyView
