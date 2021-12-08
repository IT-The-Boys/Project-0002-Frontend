import ConfirmHandPopup from 'components/popup/comfirmHandPopup/ConfirmHandPopup'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Hand = (props) => {
  let cahGame = useSelector(state => state.cahGame)
  let [ playerHand ] = useState(cahGame.playerHand)
  let playerAnswer = []
  let playerAnswerflg = []
  let cardPick = cahGame.currentQuestion.cardPick
  console.log(playerAnswer)

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  //for css
  const CARD_SELECTED = 'selected'
  const CARD_NOT_SELECTED = 'notselected' 

  let answerCounter = 0

  const cardSelectHandler = (e) => {
    playerHand.map((tmp) => { 
      if(tmp.cardId === parseInt(e)){
        if(playerAnswerflg[tmp.cardId]){
          //If player clicked card already selected
          playerAnswer.forEach((element, index) => {
            if(element === tmp.cardId){
              console.log("hello")
              playerAnswer.splice(index, 1)
              playerAnswerflg[tmp.cardId] = false
            }
          });
          answerCounter -= 1
        }else{
          playerAnswer.push(tmp.cardId)
          playerAnswerflg[tmp.cardId] = true
          answerCounter += 1
        }
        
        if(cardPick === answerCounter){
          togglePopup()
          console.log("enough cards")
        }
        console.log(playerAnswer)
        console.log(playerAnswerflg)
      }
      return e
    })
  }

  return (
    <div>
      <h1>Pick {cardPick} answer</h1>
      {playerHand.map((tmp, index) => {
        playerAnswerflg[tmp.cardId] = tmp.isSelected
        return <div key={index}><fieldset>
          <button value={tmp.cardId} onClick={e => cardSelectHandler(e.target.value)}>{tmp.cardText}</button>
        </fieldset></div>
      })}
      { isOpen && <ConfirmHandPopup 
        handleClose={togglePopup}
        comfirmHands={playerAnswer}
        //playerAnswerの中身渡せてないよ
      />}
    </div>
  )
}

export default Hand
