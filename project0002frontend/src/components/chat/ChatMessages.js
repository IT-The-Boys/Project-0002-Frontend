import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {WS_BASE_URL} from 'utils/constants/config'


const ws=new WebSocket(WS_BASE_URL);

const ChatMessages = ({messageList}) => {
    
    
    return (
        <div>
            {messageList.map(message => <ChatMessage message={message}/>)}
        </div>
    )
}

export default ChatMessages
