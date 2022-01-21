<<<<<<< HEAD

import AnswerSelectPopup from 'components/popup/AnswerSelectPopup';
import React, { useState }  from 'react'

const GameScreenView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h1>GameAnswerSelectionView</h1>
            <div>
                <AnswerSelectPopup />
                {/* <input type='button' value='Create Your Answer' onClick={togglePopup} />
                {isOpen && <AnswerSelectPopup
                    handleClose={togglePopup}
                />} */}
=======
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
>>>>>>> origin/View_Lobby
            </div>
            {/* <ServerList /> */}
        </div>
    )
}

export default GameScreenView
