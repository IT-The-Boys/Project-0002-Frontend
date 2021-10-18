const { createSlice, createSelector } = require("@reduxjs/toolkit");

const initialState = {
    lobbyServer: null,
    serverDefaultSettings:
    {
        playerLimit: 3,
        serverName: "",
        serverPassword: "123qwecc",
        timeLimit: 60,
        scoreLimit: 8,
        sets: [0,],
    },
    serverFilter:
    //pass function as argument
    {
        playerList: list=>list.includes("DA"),
        playerLimit: 0,
        serverHost: {},
        serverName: "",
        serverStatus: "",
        serverId: 0,
        timeLimit: 60,
        timeRunning: 0,
        scoreLimit: limit => limit < 5,
        sets: [],
    },
    serverList: [
        {
            playerList: ["DM", "DA", "SH"],
            playerLimit: 8,
            serverHost: {
                userName: "DM",
                userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                userEmail: "admin@admin.com",
            },
            serverName: "best game",
            serverStatus: "IN_PROGRESS",
            serverId: "f2ff472e-6a5e-42ca-8e55-a5fed2346082",
            timeLimit: 60,
            timeRunning: 300,
            sets: [9],
            scoreLimit:10
        },
        {
            playerList: ["Dude", "boose", "gun"],
            playerLimit: 5,
            serverHost: {
                userName: "DM",
                userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                userEmail: "admin@admin.com",
            },
            serverName: "best game",
            serverStatus: "PENDING",
            serverId: "a657a776-f726-44ad-b9a2-75f2b52d2cd9",
            timeLimit: 60,
            timeRunning: 40,
            sets: [1, 2],
            scoreLimit:7
        },
    ]
}

const lobbySlice = createSlice({
    name: "lobby",
    initialState,
    reducers: {
        createServer: () => {

        },
        setFilter: (state, { payload }) => {
            Object.entries(payload).forEach(
                ([key, value]) => {
                    state.serverFilter[key] = value;
                });
        }
    }
})

export const getFilteredServerList = createSelector(
    (state) => state.lobby,
    (lobby) => {
        let filter = lobby.serverFilter;
        let filterKeys = Object.keys(filter);
        return lobby.serverList.filter(item => {
            // validates all filter criteria
            return filterKeys.every(key => {
                // for each key exist in Server object
                if (typeof filter[key] !== 'function') {
                    return true;
                }
                return filter[key](item[key]);
            });
        });
    }
)

export const { } = lobbySlice.actions;
export default lobbySlice.reducer