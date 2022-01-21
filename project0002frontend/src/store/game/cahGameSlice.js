import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: {
<<<<<<< HEAD
        cardSet: "",
        cardId: "",
        cardText: "You say tomato, I say _____.",
        cardType: "QUESTION",
        cardActions: ""
=======
        cardText: "",
        cardPick: 2
>>>>>>> origin/View_Lobby
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
                    cardText: "The gays",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "Mom",
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
                    cardText: "Bees?",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "Dad",
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
                    cardText: "Grandmom",
                    cardType: "ANSWER",
                    cardActions: ""
                },
                {
                    cardSet: "",
                    cardId: "",
                    cardText: "Grandpa",
                    cardType: "ANSWER",
                    cardActions: ""
                }
            ],
            isSelected: false,
            isConfirmed: false
        }
    ],
    playerAnswer: [0, 2],
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
        
    }
})

export const playerData = createSelector(
    (state) => state.cahgame,
    (cahgame) => {
        let tmp = cahgame.gameTable;
        return tmp;
    }
)

export const {  } = gameSlice.actions;
export default gameSlice.reducer