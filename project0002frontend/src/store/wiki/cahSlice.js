import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import cardService from "services/api/cardService";

const initialState = {
    setList: [],
    expansionList: [],
    activeExpansion: 1,
    activeSet: null,
    dbStatus: 'idle',
    setStatus: 'idle',
    setListStatus: 'idle',
    expansionStatus: 'idle',
    setData:'',
    error: null
}

export const getSetList = createAsyncThunk(
    "wiki/setList",
    async (_, { getState }) => {
        try {
            const { expansionList, activeExpansion } = getState().cahWiki;
            const exp = expansionList[activeExpansion].name;
            const response = await cardService.getSetList("CAH", exp);
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

export const initializeWiki = createAsyncThunk(
    "wiki/initialize",
    async (_, thunkAPI) => {
        await thunkAPI.dispatch(getExpansionList());
        await thunkAPI.dispatch(getSetList())
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
            state.setStatus = "idle"
        },
    },
    extraReducers: {
        [getSetList.pending]: (state, action) => {
            state.setListStatus = "pending";
        },
        [getSetList.fulfilled]: (state, action) => {
            state.setListStatus = "succeeded";
            state.setList = action.payload;
        },
        [getSetList.rejected]: (state, action) => {
            state.setListStatus = "failed";
            state.error = action.error;
        },
        [initializeWiki.pending]: (state, action) => {
            state.dbStatus = "pending";
        },
        [initializeWiki.fulfilled]: (state, action) => {
            state.dbStatus = "succeeded";
        },
        [initializeWiki.rejected]: (state, action) => {
            state.dbStatus = "failed";
            state.error = action.error;
        },
        [getExpansionList.pending]: (state, action) => {
            state.expansionStatus = "pending";
        },
        [getExpansionList.fulfilled]: (state, action) => {
            state.expansionStatus = "succeeded";
            state.expansionList = action.payload;
        },
        [getExpansionList.rejected]: (state, action) => {
            state.expansionStatus = "failed";
            state.error = action.error;
        },
        [getSet.pending]: (state, action) => {
            state.setStatus = "pending";
        },
        [getSet.fulfilled]: (state, action) => {
            state.setStatus = "succeeded";
            state.setData = action.payload;
        },
        [getSet.rejected]: (state, action) => {
            state.setStatus = "failed";
            state.error = action.error;
        }
    },
})


export const { setActiveExpansion, setActiveSet, clearSetData } = cahSlice.actions


export default cahSlice.reducer