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
            {channels.map((room, index) => <ChatRoom room={room} key={index}/>)}
        </div>
    )
}

export default ChatRoomList
