import React from 'react'
import { useDispatch } from 'react-redux'
import { switchRoom } from 'store/chat/chatSlice'

const ChatRoom = ({ room }) => {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(switchRoom(room.channelName))
    }
    return (
        <div className="contact" onClick={handleClick}>
            <img src={room.channelImage} className="pic" alt="Global" />
            {room.newMessagesCount > 0 &&
                <div className="badge">
                    {room.newMessagesCount}
                </div>
            }
            <div className="name">
                {room.channelName}
            </div>
            <div className="message">
                {room.channelDescription}
            </div>
        </div>
    )
}

export default ChatRoom
