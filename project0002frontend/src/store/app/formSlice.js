import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cardForm: {
        cardType: "ANSWER",
        cardText: "",
        pick: "",
        draw: ""
    },
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setField: (state, { payload }) => {
            state[payload[0]][payload[1]] = payload[2];
        },
        clearForm: (state, {payload})=>{
            state[payload]=initialState[payload];
        },
    }
})

export const { setField, clearForm } = formSlice.actions

export default formSlice.reducer