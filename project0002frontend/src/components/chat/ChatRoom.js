import React from 'react'

const ChatRoom = ({room}) => {
    return (
        <div className={`contact ${room.isActive ? "active" : ""}`}>
            {console.log(room)}
            <img src={room.channelImage} className="pic" alt="Global" />
            <div className="badge">
                14
            </div>
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
