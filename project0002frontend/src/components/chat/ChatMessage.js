import React from 'react'

const ChatMessage = () => {
    const message={
        text: "Hello",
        profile: {
            user_name: "Dmitry",
            avatar_url: "google.com"
        }
    }
    return (
        <div>
            <img alt="ProfileImage" src={message.profile}/>{message.profile.user_name}
            <br />
            {message.text}
        </div>
    )
}

export default ChatMessage
