import React from 'react'
import { useSelector } from 'react-redux'

const GameStatus = (props) => {
  let playerStatus = useSelector(state=>state.cahgame.gameTable)
  let dealer = playerStatus.currentDealer
  let round = playerStatus.currentRound
  let players = playerStatus.playerList

  return (
    <div>
      <h1>Game Status</h1>
      <fieldset>
        <legend>Game progress</legend>
        <div id="progress">
          Dealer: {dealer}<br />
          Round: {round}
        </div>
      </fieldset>
        {players.map((tmp, index) => {
          return <div key={index}><fieldset><legend>{tmp.playerName}</legend>
            Player Seat: {tmp.playerSeat}<br />
            Answers: {tmp.playerAnswer}<br />
            Score: {tmp.playerScore}<br />
            Avatrar: {tmp.playerAvatar}
            </fieldset></div>
        })}
    </div>
  )
}

export default GameStatus
