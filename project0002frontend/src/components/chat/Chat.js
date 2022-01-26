import ChatModal from 'components/modals/ChatModal'
import React, { useEffect} from 'react'
import ChatRoomList from './ChatRoomList'
import ChatWindow from './ChatWindow'
import { useDispatch, useSelector } from 'react-redux';
import { connectToChat } from 'store/chat/chatSlice';
import { CHAT_MODE_FULL, CHAT_MODE_MIN, CHAT_MODE_ROOM, CHAT_MODE_WINDOW } from 'utils/constants/config';
import ChatActionBtn from 'components/buttons/ChatActionBtn';



const Chat = () => {
    const { chatStatus } = useSelector(state => state.chat)
    const { chatMode } = useSelector(state => state.app)
    const dispatch = useDispatch();
    useEffect(() => {
        if (chatStatus !== "online") {
            console.log("offline")
            dispatch(connectToChat())
        } else {
            console.log("online")
        }

    }, [chatStatus, dispatch])
    switch (chatMode) {
        case CHAT_MODE_MIN:
            return <ChatActionBtn />
        case CHAT_MODE_ROOM:
        case CHAT_MODE_WINDOW:
        case CHAT_MODE_FULL:
            return (
                <ChatModal>
                    <ChatRoomList />
                    <ChatWindow />
                </ChatModal>
            )
        default: return null
    }

}

export default Chat
