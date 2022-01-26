import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    authPopup: false,
    authMode: "signIn",
    chatMode:0,
    chatController: false,
    addCardPopup:false,
    addCardMode: 0,
}

const modalSlice = createSlice({
    name: "modalUI",
    initialState,
    reducers: {
        togglePopup: (state, { payload }) => {
            state[payload] = !state[payload];
        },
        showPopup: (state, { payload }) => {
            state[payload] = true;
        },
        hidePopup: (state, { payload }) => {
            state[payload] = false;
        },
        setMode: (state, { payload }) => {
            state[payload[0]] = payload[1];
        },
    }
})

export const { showPopup, hidePopup, togglePopup, setMode} = modalSlice.actions

export default modalSlice.reducer