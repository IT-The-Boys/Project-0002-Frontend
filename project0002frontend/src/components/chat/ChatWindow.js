import React from 'react'
import { useSelector } from 'react-redux';
import { getCurrentChannel } from 'store/chat/chatSlice';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
    const channel = useSelector(getCurrentChannel)

    const messages = channel.channelMessages;
    console.log(messages)
    return (
        <div className="chat">
            <div className="contact bar">
                <img className="pic" alt="channelImage" src={channel.channelImage} />
                <div className="name">
                    {channel.channelName}
                </div>
                <div className="seen">
                    Today at 12:56
                </div>
            </div>
            <div className="messages" id="chat">
                {/* <div class="time">
                    Today at 11:41
                </div> */}
                {messages.map(message => <ChatMessage message={message} />)}
                {/* <div class="message stark">
                    <div class="typing typing-1"></div>
                    <div class="typing typing-2"></div>
                    <div class="typing typing-3"></div>
                </div> */}
            </div>
            <div className="input">
                <input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
            </div>
        </div>
    )
}

export default ChatWindow
