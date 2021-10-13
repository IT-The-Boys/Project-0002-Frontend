import NewMessageForm from 'components/forms/NewMessageForm'
import React from 'react'
import ChatMessages from './ChatMessages'

const Chat = () => {
    return (
        <div>
            <h1>Chat</h1>
            <ChatMessages />
            <NewMessageForm />
            {/* <Room /> */}
        </div>
    )
}

export default Chat
