import React, { useState } from 'react'

const ChatMessageForm = () => {
    const sendMessage = () => {
        console.log(message);
    }
    const [message, setMessage] = useState("");
    return (
        <form>
            <textarea onChange={(e)=>{setMessage(e.currentTarget.value)}} value={message}></textarea>
            <button onClick={sendMessage}>send</button>
        </form>
    )
}

export default ChatMessageForm
