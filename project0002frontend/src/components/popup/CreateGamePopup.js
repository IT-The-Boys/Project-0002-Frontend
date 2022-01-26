import React, { useState } from 'react'
import './createGame.css'
import { useSelector } from 'react-redux'

const CreateGamePopup = (props) => {
    const defaultSettings = useSelector(state=>state.lobby.serverDefaultSettings)
console.log('defaultSettings from useSelector')
console.log(defaultSettings)
    let [setting, setSetting] = useState(defaultSettings)
console.log('settings from state')
console.log(setting)

    const submitHandler = () => {
        console.log(setting)
    }

    const toggleCheckbox = (sid) =>{
        console.log(setting)
    }
    
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-Icon' onClick={props.handleClose}>X</span>
                <br />
                <>
                <h1>Create Your Game</h1>
                <form onSubmit={submitHandler()}>
                <div>
                    <label htmlFor='serverName'>Your Server Name: </label>
                    <input type='text' id='serverName' onInput={e => setSetting(e.target.serverName)} />
                </div>
                <div>
                    <label htmlFor='playerLimit'>Player Limits(3-10 players): </label>
                    <input type='number' id='playerLimit' min='3' max='10' onInput={e => setSetting(e.target.playerLimit)} />
                </div>
                <div>
                    <label htmlFor='scoreLimit'>Score Limit(1-10 points): </label>
                    <input type='number' id='scoreLimit' min='1' max='10' onInput={e => setSetting(e.target.scoreLimit)} />
                </div>
                <div>
                    <label htmlFor='timeLimit'>Time Out Limit(10-120 seconds): </label>
                    <input type='number' id='timeLimit' min='10' max='120' step='10' onInput={e => setSetting(e.target.timeLimit)} />
                </div>
                <div>
                    <label htmlFor='serverPass'>(Optional)Server password(Max 50 Character): </label>
                    <input type='text' id='serverPass' maxLength='50' onInput={e => setSetting(e.target.gamePassword)} />
                </div>
                <div>
                    {/*insert card sets here*/}
                    <fieldset>
                        <legend>Choose card sets at least one</legend>
                        {defaultSettings.setList.map((set, index) => {
                            return (<div key={index}><input type='checkbox' name='cardSetCheckBox' id={set.setName} value={set.id} onClick={toggleCheckbox(set.id)} />
                                    <label htmlFor={set.setName}>{set.setName}</label></div> )
                        })}
                    </fieldset>
                </div>
                <input type='submit' value='Create Game!' />
                </form>
                </>
            </div>
        </div>
    )
}

export default CreateGamePopup
