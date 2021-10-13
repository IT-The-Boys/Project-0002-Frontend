import Chat from 'components/chat'
import Navbar from 'components/nav/Navbar'
import React from 'react'
import GameLobbyView from './GameLobbyView'
import GameScreenView from './GameScreenView'
import GameSelectorView from './GameSelectorView'

const index = () => {
    return (
        <div>
            <GameSelectorView />
            <div>
                <Chat />
                <Navbar />
                <div className="content">
                    <GameLobbyView />
                    <GameScreenView />
                </div>

            </div>

        </div>
    )
}

export default index
