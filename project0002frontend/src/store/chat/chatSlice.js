import chatService from "services/ws/chatService";

const { createSlice, createSelector } = require("@reduxjs/toolkit");

const initialState = {
    channelList: [
        {
            channelName: "Lobby",
            channelDescription: "Global chat",
            channelSubscribers: [{}, {}],
            channelImage: "https://media.istockphoto.com/photos/sign-of-word-lobby-picture-id1050138060?s=612x612",
            channelMessages: [
                {
                    messageAuthor: {
                        userName: "Anon256",
                        userAvatar: null,
                        userEmail: null,
                    },
                    messageText: "Hello, its Mario",
                    messageTimestamp: "12:31"
                },
                {
                    messageAuthor: {
                        userName: "DM",
                        userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                        userEmail: "admin@admin.com",
                    },
                    messageText: "Who tf are you?",
                    messageTimestamp: "12:35"
                }
            ],
            isActive: true,
            newMessagesCount: 0,

        },
        {
            channelName: "Coolserver",
            channelDescription: "Coolserver gamechat ",
            channelSubscribers: [{}, {}],
            channelImage: "https://thumbs.dreamstime.com/z/games-cube-word-image-hi-res-rendered-artwork-could-be-used-any-graphic-design-52989776.jpg",
            channelMessages: [
                {
                    messageAuthor: {
                        userName: "DM",
                        userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                        userEmail: "admin@admin.com",
                    },
                    messageText: "Is there anybody?",
                    messageTimestamp: "12:30"
                }
            ],
            isActive: false,
            newMessagesCount: 10,
        },
    ],


}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        messagesReceived: (state, { payload }) => {
            // append new messages to @messageList
            return [...state.messageList, ...payload.messageList]

        },
        addMessage: (state, { payload }) => {
            state.channelList.forEach(c => {
                if (c.isActive) c.channelMessages.push({
                    // ToDo UserSlice
                    // messageAuthor: state.user,

                    messageAuthor: {
                        userName: "Anon256",
                        userAvatar: null,
                        userEmail: null,
                    },
                    messageText: payload
                })
            })
        },
        switchRoom: (state, { payload }) => {
            //change channels state to new one
            state.channelList.forEach(c =>  c.isActive=(c.channelName===payload))
        },
    },
})

const newMessageHandler = (dispatch) => (msgs) => dispatch(messagesReceived())


export const { messagesReceived, addMessage, switchRoom } = chatSlice.actions

export const launchChat = () => async (dispatch) => {
    chatService.subscribeHandler(newMessageHandler);
}
export const closeChat = () => async (dispatch) => {
    chatService.unsubscribeHandler(newMessageHandler);
}
export const getCurrentChannel = createSelector(
    (state) => state.chat.channelList,
    (channelList) => {
        return channelList.find(c=>c.isActive)
    }
)

export default chatSlice.reducer