import React, { useState } from 'react'
import './createGame.css'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../../store/lobby/lobbySlice'

const CreateGamePopup = (props) => {
    const [setting, setSetting] = useState({
        serverName: '',
        gamePassword: 'password',
        pointToWin: 8,
        playerLimit: 10,
        playerTimeout: 60,
        selectedSet: [1,2,3]    
    })

    // const submitHandler = () => {
    //     console.log(setting)
    // }
    
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-Icon' onClick={props.handleClose}>X</span>
                <br />
                <>
                <h1>Create Your Game</h1>
                <form onSubmit={console.log(setting)}>
                <div>
                    <label for='serverName'>Your Server Name: </label>
                    <input type='text' id='serverName' onInput={e => setSetting(e.target.serverName)} />
                </div>
                <div>
                    <label for='playerLimit'>Player Limits(3-10 players): </label>
                    <input type='number' id='playerLimit' min='3' max='10' onInput={e => setSetting(e.target.playerLimit)} />
                </div>
                <div>
                    <label for='pointToWin'>Score Limit(1-10 points): </label>
                    <input type='number' id='pointToWin' min='1' max='10' onInput={e => setSetting(e.target.pointToWin)} />
                </div>
                <div>
                    <label for='timeOut'>Time Out Limit(10-120 seconds): </label>
                    <input type='number' id='timeOut' min='10' max='120' step='10' onInput={e => setSetting(e.target.playerTimeout)} />
                </div>
                <div>
                    <label for='serverPass'>Server password(Max 50 Character): </label>
                    <input type='text' id='serverPass' maxLength='50' onInput={e => setSetting(e.target.gamePassword)} />
                </div>
                {/*insert card sets here*/}
                <input type='submit' value='Create Game!' />
                </form>
                </>
            </div>
        </div>
    )
}

export default CreateGamePopup
