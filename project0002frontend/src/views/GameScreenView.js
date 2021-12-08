import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import GameStatus from './GameStatus'
import Hand from './Hand'

const GameScreenView = () => {
    const gameId = useParams().gameId
    const navigate = useNavigate()
    useEffect(() => {
        if (gameId === "") navigate("/")
    }, [gameId, navigate])
    return (
        <div>
            <h1>GameScreenView</h1>
            {/* <GameStartPopup /> */}
            <div className='gameArea'>
                {/* <Question />
                <Answers /> */}
                <Hand />
                <GameStatus />
            </div>
        </div>
    )
}

export default GameScreenView
