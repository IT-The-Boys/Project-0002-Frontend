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


const initialState = {
    lobbyList: [],
    status: 'idle',
    error: null
}

const appSlice = createSlice({
    name: "app",
    initialState,
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

export default appSlice.reducer