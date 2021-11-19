import React from 'react'
import styled from 'styled-components'

const Card= styled.div`
  width:50vw;
  height:50vh;
  `
const Img= styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: contain
  `

const LobbyCard = ({lobby, handleClick}) => {
    return (
        <Card>
        <Img src={lobby.lobbyImg} alt={lobby.lobbyId}/>
        <button onClick={()=>handleClick('lobby/'+lobby.lobbyId.toLowerCase())}>to lobby</button>
        <button onClick={()=>handleClick('wiki/'+lobby.lobbyId.toLowerCase())}>to wiki</button>
        </Card>
    )
}

export default LobbyCard
