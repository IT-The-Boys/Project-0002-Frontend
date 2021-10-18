import ChatMessageForm from 'components/forms/ChatMessageForm';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { getCurrentChannel } from 'store/chat/chatSlice';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
    const channel = useSelector(getCurrentChannel)

    const messages = channel.channelMessages;
    const ref = useRef(null)
    useEffect(() => {
        if (ref) {
          ref.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])
    return (
        <div className="chat" >
            <div className="contact bar">
                <img className="pic" alt="channelImage" src={channel.channelImage} />
                <div className="name">
                    {channel.channelName}
                </div>
                <div className="seen">
                    Today at 12:56
                </div>
            </div>
            <div className="messages" id="chat" ref={ref}>
                {/* <div class="time">
                    Today at 11:41
                </div> */}
                {messages.map((message, index) => <ChatMessage message={message} key={index}/>)}
                {/* <div class="message stark">
                    <div class="typing typing-1"></div>
                    <div class="typing typing-2"></div>
                    <div class="typing typing-3"></div>
                </div> */}
            </div>
            <ChatMessageForm />
        </div>
    )
}

export default ChatWindow
