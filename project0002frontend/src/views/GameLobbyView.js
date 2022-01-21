<<<<<<< HEAD
import React, { useEffect } from 'react'
import GameFilterForm from 'components/forms/GameFilterForm'
=======
import React, { useState, useEffect } from 'react'
import ServerList from 'components/list/LobbyServerList'
import GameFilterForm from 'components/forms/GameFilterForm/GameFilterForm'
import CreateGamePopup from 'components/popup/CreateGamePopup';
>>>>>>> origin/View_Lobby
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'

const GameLobbyView = () => {
<<<<<<< HEAD
=======
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

>>>>>>> origin/View_Lobby
    const lobbyId=useParams().lobbyId;
    const { lobbyList } = useSelector((state) => state.app);
    const navigate=useNavigate()
    console.log(lobbyId)
    console.log(lobbyList)
    // 本番はコメントアウト消す
    // useEffect(() => {
    //     if (lobbyId!=="cah"|| lobbyList.length===0) navigate("/");
    // }
    //    ,[lobbyId, navigate, lobbyList])
    return (
        <div>
            {/* <h1>{lobbyId}</h1>
            <button> Create Game </button>
            <GameFilterForm />
            <div>
                <input type='button' value='Create Your Game' />
                { isOpen && <CreateGamePopup 
                    
                />}
            </div>
            <ServerList /> */}
        </div>
    )
}

export default GameLobbyView
