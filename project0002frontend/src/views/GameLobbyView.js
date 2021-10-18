import React, { useState } from 'react'
import ServerList from 'components/serverlist'
import GameFilterForm from 'components/forms/GameFilterForm'
import CreateGamePopup from 'components/popup/CreateGamePopup';

const GameLobbyView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h1>GameLobbyView</h1>
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
