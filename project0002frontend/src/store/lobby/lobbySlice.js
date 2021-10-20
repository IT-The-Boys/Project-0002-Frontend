const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    lobbyServer: "url",
    serverList: [
        {
            playerList: ["DM", "DA", "SH"],
            playerLimit: 8,
            serverName: "best game",
            serverStatus: "IN_PROGRESS",
            serverId: "f2ff472e-6a5e-42ca-8e55-a5fed2346082",
            sets: [9],
        },
        {
            playerList: ["Dude", "boose", "gun"],
            playerLimit: 5,
            serverName: "best dfsf",
            serverStatus: "PENDING",
            serverId: "a657a776-f726-44ad-b9a2-75f2b52d2cd9",
            sets: [1,2]
        },
    ]
}

const lobbySlice = createSlice({
    name: "lobby",
    initialState,
    reducers: {
        
    }
})

export const {} = lobbySlice.actions;
export default lobbySlice.reducer