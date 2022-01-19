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
        fontFamily: "'Helvetica Neue LT Pro'",
        colors: {
            headerBG: '#ebfbff',
            headerText: '#000',
            body: 'red',
            footer: '#003333',
        },
        mobile: '768px',

    },
    cahTheme: {
        name:"cahTheme",
        fontFamily:"'Helvetica Neue LT Pro'",
        colors: {
            headerBG: '#100e17',
            headerText: '#fff',
            body: '#fff',
            footer: '#003333',
        },
        mobile: '768px',
        card:{
            black:{
                cardBG: '#000',
                cardText:'#fff'
            },
            white:{
                cardBG: '#fff',
                cardText:'#000'
            }
        }
    }

}


const initialState = {
    lobbyList: [],
    lobbyStatus: 'idle',
    error: null,
    currentTheme: themeList.cahTheme,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.currentTheme=themeList[payload];
        }
    },
    extraReducers: {
        [getLobbyList.pending]: (state) => {
            state.lobbyStatus = "pending";
        },
        [getLobbyList.fulfilled]: (state, {payload}) => {
            state.lobbyStatus = "succeeded";
            state.lobbyList = payload;
        },
        [getLobbyList.rejected]: (state, payload) => {
            state.lobbyStatus = "failed";
            state.error = payload;
        }
    },
})

export const { setTheme} = appSlice.actions

export default appSlice.reducer