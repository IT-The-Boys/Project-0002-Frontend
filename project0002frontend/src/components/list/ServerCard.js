import React from 'react'

const ServerCard = (props) => {
    return (
        <div><fieldset>
            <h1>{props.servername}</h1>
            <p>This game is {props.serverstatus}</p>
            <p>score limit: {props.scorelimit}</p>
            <p>card sets: {props.sets}</p>
        </fieldset></div>
    )
}

export default ServerCard
