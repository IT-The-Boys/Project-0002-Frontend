import React from 'react'
import { useSelector } from 'react-redux'
import ChatRoom from './ChatRoom'

const ChatRoomList = () => {
    const channels=useSelector(state=>state.chat.channelList)
    return (
        <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <h2>
                Rooms
            </h2>
            {channels.map(room => <ChatRoom room={room} />)}
        </div>
    )
}

export default ChatRoomList
