import React, { useState } from 'react'
import './createGame.css'

const CreateGamePopup = (props) => {
    const [setting, setSetting] = useState({
        gamePassword: 'password',
        pointToWin: 8,
        playerLimit: 8,
        playerTimeout: 60,
        selectedSet: [1,2,3]    
    })

    //Default numbers
    const defaultSetting = useState({
        pointToWin: 8,
        playerLimit: ['1','2','3','4','5','6','7','8'],
        playerTimeout: 60,
        selectedSet: [1,2,3]
    })

    const submitHandler = (params) => {
        console.log()
    }
     
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-Icon' onClick={props.handleClose}>X</span>
                <br />
                <>
                {setting.playerLimit}
                
                <h2>Create Your Game</h2>
                <p>Insert settings checkbox here...</p>
                <button>Create Game(Dummy)</button>
                </>
            </div>
        </div>
    )
}

export default CreateGamePopup
