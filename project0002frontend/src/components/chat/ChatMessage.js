import React from 'react'

const ChatMessage = ({ message }) => {

    return (
        <div className={`message ${message.messageAuthor.userName === "Anon256" ? "parker" : ""}`}>
            {message.messageText}
            <br />
            <img alt="ProfileImage"
                src={message.messageAuthor.userAvatar}
                className="pic" />
            {message.messageAuthor.userName}
        </div>
    )
}

export default ChatMessage
