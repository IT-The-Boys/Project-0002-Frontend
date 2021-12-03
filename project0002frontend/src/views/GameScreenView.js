import React from 'react'
import GameStatus from './GameStatus'

const GameScreenView = () => {
    return (
        <div>
            <h1>GameScreenView</h1>
            {/* <GameStartPopup /> */}
            <div className='gameArea'>
                {/* <Question />
                <Answers />
                <Hand /> */}
                <GameStatus />
            </div>
        </div>
    )
}

export default GameScreenView
