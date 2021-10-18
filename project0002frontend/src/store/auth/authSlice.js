import { createSlice } from "@reduxjs/toolkit"

const user = localStorage.getItem("user");

const initialState = user
    ? { isAuthenticated: true, user }
    : { isAuthenticated: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            localStorage.setItem("user", {
                userName: "Anon12",
                userPassphrase: "sdgfd",
            });
            state.user = {
                userName: "Anon12",
                userPassphrase: "sdgfd",
                isRegistered: false,
            }
        }
    }
})

export const userSignIn = () => {

}

export const userSignUp = () => {

}
export const userSignOut = () => {

};

export const { setUser } = authSlice.actions


export default authSlice.reducer