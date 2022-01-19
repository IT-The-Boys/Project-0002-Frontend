import React from 'react'
import { useSelector } from 'react-redux'
import './confirmHandPopup.css'

const ConfirmHandPopup = (props) => {
  let {playerAnswer, playerHand} = useSelector(state => state.cahGame)
  console.log(playerAnswer)
  console.log(playerHand)

  let list = []
  playerHand.map((card, id) => {
    playerAnswer.forEach(ansid => {
      if(ansid === card.cardId){
        console.log("hit: ", card.cardText)
        list.push(card.cardText)
      }
    });
  })
  console.log(list);
  
  const confirmHand = () => {
    //If player pushed confirm button

  }

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-Icon' onClick={props.handleClose}>X</span>
        <div className='answerArea'>
          Check your answer
          {list.map((li, id) => {
            return <div key={id}><fieldset><button>{li}</button></fieldset></div>
          })}
        </div>
        <span onClick={confirmHand}><button>Confirm</button></span>
      </div>
    </div>
  )
}

export default ConfirmHandPopup
