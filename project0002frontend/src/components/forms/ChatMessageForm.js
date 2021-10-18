import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from 'store/chat/chatSlice';


const ChatMessageForm = () => {
    const [text, setText] = useState("")
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            
            let message = {
                messageAuthor:{
                    userName: "Anon12",
                    userPassphrase: "sdgfd",
                    isRegistered: false,
                },
                messageText: text,
                messageTimestamp: "12:25"
            }
            console.log(message)
            dispatch(addMessage(message));
            setText("");
        }
    }
    return (
        <div className="input" >
            <input placeholder="Type your message here!"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleSubmit}
                type="text" /><i className="fas fa-microphone"></i>
        </div>
    )
}

export default ChatMessageForm
