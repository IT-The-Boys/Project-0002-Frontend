
import ActionButton from 'components/buttons/ActionButton'
import Navbar from 'components/nav/Navbar'
import React from 'react'
import GameLobbyView from './GameLobbyView'
import GameScreenView from './GameScreenView'
import GameSelectorView from './GameSelectorView'
import Chat from 'components/chat/Chat'
import BaseModal from 'components/modals/BaseModal'

const index = () => {
    
    return (
        <div>
            <ActionButton />
            <GameSelectorView />
            <div>
                <BaseModal width="50%"/>
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
