 import lobbyService from "services/api/lobbyService";

const { createSlice, createSelector, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCahGameList = createAsyncThunk(
    "app/fetchGameLis",
    async (thunkAPI) => {
        try {
            const response = await lobbyService.getGameList();
            return response.data;
        } catch (error) {
            // const message = error.response.data;
            // thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState = {
    lobbyServer: null,
    lobbyStatus:"idle",
    serverDefaultSettings:
    {
        playerLimit: 10,
        serverName: "",
        serverPassword: "123qwecc",
        timeLimit: 60,
        scoreLimit: 8,
        setList: [0,1,2,3,4,5],
        setSelectedList:[]
    },
    serverFilter:
    //pass function as argument
    {
        playerList:0,
        playerLimit: 0,
        serverHost: {   userName: "",
                        userAvatar:"",
                        userEmail:"" },
        serverName: "",
        serverStatus: "",
        serverId: 0,
        timeLimit: 60,
        timeRunning: 0,
        scoreLimit:0,
        setList: [
            {
            id:0,
            setName:"basic"
            },
            {
            id:1,
            setName:"se2"       
            }
        ],
        setSelectedList:[

        ],
    },
    serverList: [
        {
            playerList: ["DM", "DA", "SH"],
            playerLimit: 8,
            serverHost: {
                userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                userEmail: "admin@admin.com",
                userName: "testplayer",
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
                userAvatar: "https://scontent.fhnd3-1.fna.fbcdn.net/v/t1.6435-9/243628091_4471297046284910_1933180873813140017_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_52vMiqO5IsAX-oXpF6&_nc_ht=scontent.fhnd3-1.fna&oh=8ca642be8b5c07ba155ff8b0b77639c7&oe=618EB373",
                userEmail: "admin@admin.com",
                userName: "fucktheplayer",
            },
            serverName: "best dfsf",
            serverStatus: "PENDING",
            serverId: "a657a776-f726-44ad-b9a2-75f2b52d2cd9",
            timeLimit: 90,
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
                    console.log(key);
                    console.log(value)
                    state.serverFilter[key] = value;
                });
        }
    },
    extraReducers: {
        [getCahGameList.pending]: (state) => {
            state.status = "pending";
        },
        [getCahGameList.fulfilled]: (state, {payload}) => {
            state.status = "succeeded";
            state.serverList = payload;
        },
        [getCahGameList.rejected]: (state, payload) => {
            state.status = "failed";
            state.error = payload;
        }
    },
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

export const { setFilter } = lobbySlice.actions;
export default lobbySlice.reducer