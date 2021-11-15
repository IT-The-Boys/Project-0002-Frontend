import React from 'react'

const ServerCard = (props) => {
    return (
        <div><fieldset>
            <h2>{props.servername}</h2> 
            This game is {props.serverstatus}
            score limit: {props.scorelimit}<br />
            <p>card sets: {props.sets}</p>
            <p>time limit: {props.timelimit}</p>
            <button type="submit" >Join Game</button>
        </fieldset></div>
    )
}

export default ServerCard
