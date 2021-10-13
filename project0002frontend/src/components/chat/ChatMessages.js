import React from 'react'
import ChatMessage from './ChatMessage'

const ChatMessages = () => {
    const messageList = [1, 2, 3]
    return (
        <div>
            {messageList.map(message => <ChatMessage message={message}/>)}
        </div>
    )
}

export default ChatMessages
