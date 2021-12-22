import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: {
        cardSet: "",
        cardId: "",
        cardText: "You say tomato, I say _____.",
        cardType: "QUESTION",
        cardActions: ""
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
    playerHand: [
        {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        },
        {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
        }, {
            cardSet: "",
            cardId: "",
            cardText: "",
            cardType: "ANSWER",
            cardActions: "",
            isSelected: false,
            isConfirmed: false
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
                playerSeat: 1,
                playerName: "DM",
                playerAnswer: 0,
                playerScore: 3,
                playerAvatar: ""
            }, {
                playerSeat: 1,
                playerName: "Eddie",
                playerAnswer: 2,
                playerScore: 6,
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



export const { } = gameSlice.actions;
export default gameSlice.reducer