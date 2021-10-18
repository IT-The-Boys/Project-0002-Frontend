import ChatModal from 'components/modals/ChatModal'
import React from 'react'
import ChatRoomList from './ChatRoomList'
import ChatWindow from './ChatWindow'

const Chat = () => {

    return (
        <ChatModal>
            <ChatRoomList />
            <ChatWindow />
        </ChatModal>
    )
}

export default Chat
