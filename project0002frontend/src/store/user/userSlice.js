import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = {
                userName: "DM",
                userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                userEmail: "admin@admin.com",
            }
        }
    }
})

export default userSlice.reducer