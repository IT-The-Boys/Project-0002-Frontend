import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import cardService from "services/api/cardService";

const initialState = {
    setList: [],
    expansionList: [],
    activeExpansion: -1,
    activeSet: null,
    dbConnect: 'idle',
    setData: {},
    error: null,
    temId: 0,
    tempCardIdList: []
}

export const getSetList = createAsyncThunk(
    "wiki/setList",
    async (_, { getState }) => {
        try {
            const { expansionList, activeExpansion } = getState().cahWiki;
            const response = await cardService.getSetList("CAH", expansionList[activeExpansion].name);
            // thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            // const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            // console.log(message);
            // return thunkAPI.rejectWithValue();
        }
    }
);
export const getSet = createAsyncThunk(
    "wiki/set",
    async (_, { getState }) => {
        try {
            const { activeSet } = getState().cahWiki;
            const response = await cardService.getSetData("CAH", activeSet);
            // thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            // const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            // console.log(message);
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
            // const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            // console.log(message);
            return thunkAPI.rejectWithValue();
        }
    }
);

export const saveCardsToDB = createAsyncThunk(
    "wiki/saveCard",
    async (thunkAPI, { getState }) => {
        try {
            const { tempCardIdList, setData, activeSet } = getState().cahWiki;
            const data = {};
            data["cardSetId"] = activeSet;
            data["cahCards"] = setData.cardList.filter((_, index) => tempCardIdList.some(j => j === index));
            const _json = JSON.stringify(data);
            console.log(_json);
            const response = await cardService.postCardData("CAH", _json);
            // thunkAPI.dispatch(setMessage(response.data.message));
            // thunkAPI.dispatch(getSet());
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
        clearSetData: (state) => {
            state.setData = null;
            state.dbConnect = "idle"
        },
        addCard: (state, { payload }) => {
            if (Array.isArray(payload)) {
                const list = payload.map(card => {
                    card["cardId"] = `temp${state.temId++}`;
                    return card
                })
                const indexStart = state.setData.cardList.length;
                list.map((id, index) => state.tempCardIdList.push(indexStart + index));
                state.setData.cardList = state.setData.cardList.concat(list)
            } else {
                // payload["cardId"] = `temp${state.temId++}`;
                state.setData.cardList.push(payload);
                state.tempCardIdList.push(state.setData.cardList.length - 1)
            }
        },
        deleteCard: (state, { payload }) => {
            state.setData.cardList[payload].isDeleted = true;
            if (!state.setData.cardList[payload].cardId.startsWith("temp")) state.tempCardIdList.push(payload)
        },
        restoreCard: (state, { payload }) => {
            state.setData.cardList[payload].isDeleted = false;
            if (!state.setData.cardList[payload].cardId.startsWith("temp")) state.tempCardIdList = state.tempCardIdList.filter(id => id !== payload)
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
        },
        [saveCardsToDB.pending]: (state, action) => {
            state.dbConnect = "pending";
        },
        [saveCardsToDB.fulfilled]: (state, action) => {
            state.dbConnect = "succeeded";

        },
        [saveCardsToDB.rejected]: (state, action) => {
            state.dbConnect = "failed";
            state.error = action.error;
        }
    },
})


export const { setActiveExpansion, setActiveSet, clearSetData, addCard, deleteCard, restoreCard } = cahSlice.actions


export default cahSlice.reducer