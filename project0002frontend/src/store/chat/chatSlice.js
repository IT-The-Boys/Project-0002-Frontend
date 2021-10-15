import chatService from "services/ws/chatService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    messageList: [],
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        messagesReceived: (state, { payload }) => {
            // append new messages to @messageList
           return [...state.messageList, ...payload.messageList]
            
        },
    },
})

const newMessageHandler=(dispatch)=>(msgs)=>dispatch(messagesReceived())


export const { messagesReceived } = chatSlice.actions

export const launchChat = () => async (dispatch) => {
    chatService.subscribeHandler(newMessageHandler);
}
export const closeChat = () => async (dispatch) => {
    chatService.unsubscribeHandler(newMessageHandler);
}

export default chatSlice.reducer