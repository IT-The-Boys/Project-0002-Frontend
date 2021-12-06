import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import cardService from "services/api/cardService";

const initialState = {
    setList: [],
    expansionList: [],
    activeExpansion: 1,
    activeSet: null,
    dbConnect: 'idle',
    setData:'',
    error: null,
    newCardList: []
}

export const getSetList = createAsyncThunk(
    "wiki/setList",
    async (_, { getState }) => {
        try {
            const { activeExpansion } = getState().cahWiki;
            const response = await cardService.getSetList("CAH", activeExpansion);
            // thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            console.log(message);
            // return thunkAPI.rejectWithValue();
        }
    }
);
export const getSet = createAsyncThunk(
    "wiki/set",
    async (_, { getState }) => {
        try {
            const {activeSet } = getState().cahWiki;
            const response = await cardService.getSetData("CAH", activeSet);
            // thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            console.log(message);
            // return thunkAPI.rejectWithValue();
        }
    }
);
export const getExpansionList = createAsyncThunk(
    "wiki/expansionList",
    async (thunkAPI) => {
        try {
            const response = await cardService.getExpansionList("CAH");
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



const cahSlice = createSlice({
    name: "cahWiki",
    initialState,
    reducers: {
        setActiveExpansion: (state, { payload }) => void (state.activeExpansion = payload),
        setActiveSet: (state, { payload }) => {
            state.activeSet = payload;
            },
        clearSetData: (state)=> {
            state.setData=null;
            state.dbConnect = "idle"
        },
        addCard:(state, {payload})=>{
            console.log(payload)
            Array.isArray(payload)?
            state.newCardList=state.newCardList.concat(payload):
            state.newCardList.push(payload)
        },
        deleteCard:(state, {payload})=>{
            state.newCardList.splice(payload)
        }
    },
    extraReducers: {
        [getSetList.pending]: (state, action) => {
            state.dbConnect = "pending";
        },
        [getSetList.fulfilled]: (state, action) => {
            state.dbConnect = "succeeded";
            state.setList = action.payload;
        },
        [getSetList.rejected]: (state, action) => {
            state.dbConnect = "failed";
            state.error = action.error;
        },
        [getExpansionList.pending]: (state, action) => {
            state.dbConnect = "pending";
        },
        [getExpansionList.fulfilled]: (state, action) => {
            state.dbConnect = "succeeded";
            state.expansionList = action.payload;
        },
        [getExpansionList.rejected]: (state, action) => {
            state.dbConnect = "failed";
            state.error = action.error;
        },
        [getSet.pending]: (state, action) => {
            state.dbConnect = "pending";
        },
        [getSet.fulfilled]: (state, action) => {
            state.dbConnect = "succeeded";
            state.setData = action.payload;
        },
        [getSet.rejected]: (state, action) => {
            state.dbConnect = "failed";
            state.error = action.error;
        }
    },
})


export const { setActiveExpansion, setActiveSet, clearSetData, addCard, deleteCard} = cahSlice.actions


export default cahSlice.reducer