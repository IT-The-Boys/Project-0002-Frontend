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
        <div className='answerArea'>
        {playerAnswer.map((id, ind) => {
          playerHand.map((hand, index) => {
            if(id === hand.cardId){
              console.log("from prev page: ", id, "  this page", hand.cardText)
              return <div key={index}>{hand.cardText}</div>
            }
          })
        })}
        </div>
      </div>
    </div>
  )
}

export default ConfirmHandPopup
