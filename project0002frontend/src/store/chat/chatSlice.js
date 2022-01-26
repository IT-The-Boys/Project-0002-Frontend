const { createSlice, createSelector } = require("@reduxjs/toolkit");

const initialState = {
    chatStatus: "connecting",
    channelList: [
        {
            channelName: "Lobby",
            channelTopic: "",
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
            channelTopic: "",
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
    messageList: []

}

// export const connectToChat = createAsyncThunk(
//     "chat/connect",
//     async (thunkAPI) => {
//         try {
//             chatService.startChat();
//             // thunkAPI.dispatch(setMessage(response.data.message));
//         } catch (error) {
//             console.log("error", error.response.data);

//         }
//     }
// );

// export const sendToChat = createAsyncThunk(
//     "chat/send",
//     async (payload, thunkAPI) => {
//         try {
//             console.log(payload)
//             const response = await chatService.sendTo(payload);
//             // thunkAPI.dispatch(setMessage(response.data.message));
//             return response;
//         } catch (error) {
//             const message = error.response.data;
//             // thunkAPI.dispatch(setMessage(message));
//             console.log(message);
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );

// export const joinRoom = createAsyncThunk(
//     "chat/join",
//     async ({ username, password }, thunkAPI) => {
//         try {
//             const data = await chatService.login(username, password);
//             return { user: data };
//         } catch (error) {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             // thunkAPI.dispatch(setMessage(message));
//             console.log(message);
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );

// export const leaveRoom = createAsyncThunk(
//     "chat/join",
//     async ({ username, password }, thunkAPI) => {
//         try {
//             const data = await chatService.login(username, password);
//             return { user: data };
//         } catch (error) {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             // thunkAPI.dispatch(setMessage(message));
//             console.log(message);
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        onConnect: (state) => void (state.chatStatus = "online")
        ,
        onDisconnect: (state) => void (state.chatStatus = "offline")
        ,
        onMessage: (state, { payload }) => {
            // append new messages to @messageList
            // return [...state.messageList, ...payload.messageList]
            state.messageList.push(payload)
        
        },
        addMessage: (state, { payload }) => {
            state.channelList.forEach(c => {
                if (c.isActive) c.channelMessages.push(payload)
            })
        },
        switchRoom: (state, { payload }) => {
            //set all channel inactive
            state.channelList.forEach(c => c.isActive = (c.channelName === payload))
        },
    },
    extraReducers: {
        // [connectToChat.fulfilled]: (state, action) => {
        //   state.chatStatus = "online";
        // },
        // [connectToChat.rejected]: (state, action) => {
        //   state.chatStatus = "offline";
        // },
        // [joinRoom.fulfilled]: (state, action) => {
        //     state.isAuthenticated = true;
        //     state.isOpen = false;
        //     state.user = action.payload.user;
        // },
        // [joinRoom.rejected]: (state, action) => {
        //     state.isAuthenticated = false;
        //     state.user = null;
        // },
        // [leaveRoom.fulfilled]: (state, action) => {
        //     state.isAuthenticated = false;
        //     state.user = null;
        //},
    },
})

// const newMessageHandler = (dispatch) => (msgs) => dispatch(onMessage())


export const { onConnect, onDisconnect, onMessage, addMessage, switchRoom } = chatSlice.actions

// export const launchChat = () => async (dispatch) => {
//     chatService.subscribeHandler(newMessageHandler);
// }
// export const closeChat = () => async (dispatch) => {
//     chatService.unsubscribeHandler(newMessageHandler);
// }
export const getCurrentChannel = createSelector(
    (state) => state.chat.channelList,
    (channelList) => {
        let currentChannel;
        channelList.map((c) => {
            if (c.isActive) currentChannel = c;
            return true;
        })
        return currentChannel;
    }
)

export default chatSlice.reducer