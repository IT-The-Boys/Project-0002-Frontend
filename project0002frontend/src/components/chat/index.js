import NewMessageForm from 'components/forms/ChatMessageForm'
import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

const ChatMessages =()=>{
    return (<></>)
}

const Chat = () => {
    const servers = useSelector(state => state.lobby.serverList)
    return (
        <div>
            {console.log(servers)}
            <h1>Chat</h1>
            <ChatMessages />
            <NewMessageForm />
            {/* <Room /> */}
        </div>
    )
}

export default Chat
