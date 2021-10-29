import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const GameFilterForm = () => {
    const filters = useSelector(state=>state.lobby.serverFilter)
    let [filter, setFilter] = useState(filters)


    return (
        <div>
        <fieldset>
            <label htmlFor='serverHost'>Server Host Name:     </label>
            <input type='text' id='serverHost' onInput={e => setFilter(e.target.serverHost)} /><br/>
            <label htmlFor='serverName'>Server Name:          </label>
            <input type='text' id='serverName' onInput={e => setFilter(e.target.serverName)} /><br/>
            <label htmlFor='scoreLimit'>scoreLimit(Test Data):</label>
            <input type='number' min='1' max='10' id='scoreLimit' onInput={e => setFilter(e.target.scoreLimit)} />
            <button onClick={console.log(filter)}>get filter</button>
        </fieldset>
        </div>
    )
}

export default GameFilterForm
