import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from 'store/chat/chatSlice';


const ChatMessageForm = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            dispatch(addMessage(text));
            setText("");
        }
    }
    return (
        <div className="input" >
            <input placeholder="Type your message here!" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyUp={handleSubmit}
            type="text" /><i className="fas fa-microphone"></i>
        </div>
    )
}

export default ChatMessageForm
