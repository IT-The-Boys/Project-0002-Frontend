import ChatModal from 'components/modals/ChatModal'
import React, { useRef } from 'react'
import SockJsClient from 'react-stomp';
import ChatRoomList from './ChatRoomList'
import ChatWindow from './ChatWindow'
import { useDispatch } from 'react-redux';
import { onConnect, onDisconnect, onMessage } from 'store/chat/chatSlice';
import { CHAT_SERVICE_URL } from '../../utils/constants/config';



const Chat = () => {
    const dispatch = useDispatch();
    let clientRef=useRef(null)
    const sendMessage = ()=>{
        clientRef.sendMessage("/api/v1/ws/chat/monitor",JSON.stringify({
            roomId:"monitor",
            from:"me",
            to:"",
            content:"hello",}))
    }
    return (
        <ChatModal>
            <SockJsClient
                url={CHAT_SERVICE_URL}
                // headers={header}
                ref={client => clientRef = client}
                topics={['/chat/monitor']}
                onConnect={() => 
                        dispatch(onConnect())}
                onDisconnect={() => dispatch(onDisconnect())}
                onMessage={msg =>dispatch(onMessage(msg))}
                debug={false}
            />
            <ChatRoomList />
            <ChatWindow />
            <button onClick={()=>sendMessage()}> click </button>
        </ChatModal>
    )
}

export default Chat
