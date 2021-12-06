import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import lobbyService from "services/api/lobbyService";

export const getLobbyList = createAsyncThunk(
    "app/fetchLobby",
    async (thunkAPI) => {
        try {
            const response = await lobbyService.getLobbyList();
            // thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            console.log(message);
            return thunkAPI.rejectWithValue();
        }
    }
);


const themeList = {
    defaultTheme:{
        name:"defaultTheme",
        colors: {
            header: '#ebfbff',
            body: 'red',
            footer: '#003333',
        },
        mobile: '768px',

    },
    cahTheme: {
        name:"cahTheme",
        colors: {
            header: '#ebfbff',
            body: 'fff',
            footer: '#003333',
        },
        mobile: '768px',
    }

}


const initialState = {
    lobbyList: [],
    status: 'idle',
    error: null,
    authPopup: false,
    authMode: "signIn",
    chatController: false,
    currentTheme: themeList.defaultTheme,
}

const appSlice = createSlice({
    name: "app",
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
        setTheme: (state, { payload }) => {
            state.currentTheme=themeList[payload];

        }
    },
    extraReducers: {
        [getLobbyList.pending]: (state, action) => {
            state.status = "pending";
        },
        [getLobbyList.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.lobbyList = action.payload;
        },
        [getLobbyList.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        }
    },
})

export const { showPopup, hidePopup, togglePopup, setMode, setTheme} = appSlice.actions

export default appSlice.reducer