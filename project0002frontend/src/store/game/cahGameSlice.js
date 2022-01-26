import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: {
        cardText: "",
        cardPick: 2
    },
    playerAnswerList: [
        {
            player: {
                playerSeat: 1,
                playerName: "DM"
            },
            cardList: [
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                }
            ],
            isSelected: false,
            isConfirmed: false
        },
        {
            player: {
                playerSeat: 2,
                playerName: "EDDIE"
            },
            cardList: [
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                }
            ],
            isSelected: false,
            isConfirmed: false
        },
        {
            player: {
                playerSeat: 3,
                playerName: "Lexie"
            },
            cardList: [
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "",
                    cardType: "ANSWER",
                    cardActions: ""
                }
            ],
            isSelected: false,
            isConfirmed: false
        }
    ],
    playerAnswer: [],
    playerHand: [
        {
            cardId: 0,
            cardText:"test1",
            isSelected: false,
        }, {
            cardId: 1,
            cardText:"test2",
            isSelected: false,
        }, {
            cardId: 2,
            cardText:"test3",
            isSelected: false,
        }, {
            cardId: 3,
            cardText:"test4",
            isSelected: false,
        }, {
            cardId: 4,
            cardText:"test5",
            isSelected: false,
        }, {
            cardId: 5,
            cardText:"test6",
            isSelected: false,
        }, {
            cardId: 6,
            cardText:"test7",
            isSelected: false,
        }, {
            cardId: 7,
            cardText:"test8",
            isSelected: false,
        }, {
            cardId: 8,
            cardText:"test9",
            isSelected: false,
        },
    ],
    player: {
        isDealer: false,
        playerSeat: 1,
        playerName: "DM",
        playerScore: 2
    },
    gameTable: {
        currentDealer: 2,
        currentRound: 2,
        playerList: [
            {
                playerSeat: 2,
                playerName: "DM",
                playerAnswer: 0,
                playerScore: 5,
                playerAvatar: ""
            }, {
                playerSeat: 1,
                playerName: "Eddie",
                playerAnswer: 2,
                playerScore: 7,
                playerAvatar: ""
            }
        ]
    },
    gameSettings: {

    }

}

const gameSlice = createSlice({
    name: "cahgame",
    initialState,
    reducers: {
        setPlayerAnswer:(state, {payload})=>{
            state.playerAnswer.push(payload);
        },
        deletePlayerAnswer:(state, {payload})=>{
            state.playerAnswer=state.playerAnswer.filter(answer=>answer!==payload)
        }
    }
})

export const playerData = createSelector(
    (state) => state.cahgame,
    (cahgame) => {
        let tmp = cahgame.gameTable;
        return tmp;
    }
)

export const { setPlayerAnswer, deletePlayerAnswer } = gameSlice.actions;
export default gameSlice.reducer