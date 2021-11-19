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

const LobbyCard = ({lobby, onClick}) => {
    return (
        <Card onClick={onClick}>
        <Img src={lobby.lobbyImg} alt={lobby.lobbyId}/>
        </Card>
    )
}

export default LobbyCard
