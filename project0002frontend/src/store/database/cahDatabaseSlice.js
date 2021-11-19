import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardSetList: [],
    cardList: [],
    selectedSet:""

}

const gameSlice = createSlice({
    name: "cahdb",
    initialState,
    reducers: {

    }
})



export const { } = gameSlice.actions;
export default gameSlice.reducer