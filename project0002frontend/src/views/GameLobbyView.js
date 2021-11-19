import React from 'react'
import ServerList from 'components/serverlist'
import GameFilterForm from 'components/forms/GameFilterForm'

const GameLobbyView = () => {
    
    return (
        <div>
            <h1>GameLobbyView</h1>
            <button> Create Game </button>
            <GameFilterForm />
            {/* -><CreateGamePopup />> */}
            <ServerList />
        </div>
    )
}

export default GameLobbyView
