
import React from 'react'
import './ChatModal.css'
import './Chat.css'
import './ChatChannel.css'
import './ChatRoom.css'

const ChatModal = ({children}) => {
    return (
        <div className="center">
            {children}

        </div>
    )
}

export default ChatModal
