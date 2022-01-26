import AnswerSelectPopup from 'components/popup/AnswerSelectPopup'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import GameStatus from './GameStatus'
import Hand from './Hand'

const GameScreenView = () => {
    const gameId = useParams().gameId
    const [seletion, setSelecton] = useState(true)
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
                {seletion ? <>
                    <Hand confirmHandle={()=>setSelecton(false)}/>
                    <GameStatus />

                </> :
                    <AnswerSelectPopup />
                }

            </div>
            {/* <ServerList /> */}
        </div>
    )
}

export default GameScreenView
