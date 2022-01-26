import ConfirmHandPopup from 'components/popup/comfirmHandPopup/ConfirmHandPopup'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePlayerAnswer, setPlayerAnswer } from 'store/game/cahGameSlice'

const Hand = (props) => {
  const dispatch = useDispatch()
  const { playerHand, playerAnswer, currentQuestion } = useSelector(state => state.cahGame)
  console.log("answer id", playerAnswer)
  let cardPick = currentQuestion.cardPick
  const [answerCounter, setAnswerCounter] = useState(1)

  // Control popup
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    if (isOpen) { 
      playerAnswer.forEach(id => {
        dispatch(deletePlayerAnswer(id))
      });
      setAnswerCounter(1)
    }
    setIsOpen(!isOpen);
  }

  const cardSelectHandler = (id) => {
    //If player clicked card already selected
    if (playerAnswer.includes(id)) {
      setAnswerCounter(answerCounter - 1)
      dispatch(deletePlayerAnswer(id))
    } else {
      setAnswerCounter(answerCounter + 1)
      dispatch(setPlayerAnswer(id))
    }
    console.log("AnswerCounter :", answerCounter)
    if (cardPick === answerCounter) {
      togglePopup()
      console.log("Cards are Selected")
    }
  }

return (
  <div>
    <h1>Pick {cardPick} answer</h1>
    {playerHand.map((card, index) => {
      return <div key={index}><fieldset>
        <button value={card.cardId} onClick={() => cardSelectHandler(index)}>{card.cardText}</button>
      </fieldset></div>
    })}
    {isOpen && <ConfirmHandPopup
      handleClose={togglePopup}
    />}
  </div>
)}

export default Hand
