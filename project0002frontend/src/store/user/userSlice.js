import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    }
})

export const userSignIn = (state, { payload }) => {
    state.user = payload.user
}

export const userSignUp = () => {

}
export const userSignOut = () => {

};

export const userConnectToLobby = (params) => {
    
};


export default userSlice.reducer