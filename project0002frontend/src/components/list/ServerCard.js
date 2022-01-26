import React from 'react'
import { Link } from 'react-router-dom'

const ServerCard = ({server}) => {
    console.log(server)
    return (
        <div><fieldset>
            <h2>{server.gameName}</h2> 
            This game is {server.serverStatus?server.serverStatus:"online "}
            score limit: {server.scoreLimit ? server.scoreLimit : "10"}<br />
            <p>card sets: {server.sets}</p>
            <p>time limit: {server.timeLimit}</p>
            {/* <button type="submit" >Join Game</button> */}
            <Link to={"/game/" + server.serverId}>Join Game</Link>
        </fieldset></div>
    )
}

export default ServerCard
