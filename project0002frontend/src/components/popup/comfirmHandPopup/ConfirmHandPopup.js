import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './confirmHandPopup.css'

const ConfirmHandPopup = (props) => {
  let {playerAnswer, playerHand} = useSelector(state => state.cahGame)
  console.log(playerAnswer)
  console.log(playerHand)
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-Icon' onClick={props.handleClose}>X</span>
        {playerAnswer.forEach(id => {
          playerHand.map((hand) => {
            if(hand.cardId === id){
              console.log("hit")
              return <div value={hand.cardId}><fieldset>{hand.cardText}</fieldset></div>
            }
          })
        })}
      </div>
    </div>
  )
}

export default ConfirmHandPopup
