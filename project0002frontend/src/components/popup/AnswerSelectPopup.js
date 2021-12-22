import React from 'react'
import CardList from '../GameAnswer/CardList'
import BlackCard from '../GameAnswer/BlackCard'
import Title from '../GameAnswer/TitleName'
import ButtonConfirm from '../GameAnswer/Button/ButtonConfirm'
// import ButtonLeave from './Button/ButtonLeave'
import '../GameAnswer/GameAnswer.css'
import Answer from 'components/CardsAgainsHumanity/Answer'
import './AnswerSelectPopup'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Popup = styled.div`
width:100%;
height:100%;
`

const AnswerSelectPopup = () => {
    const {playerAnswerList, currentQuestion} = useSelector(state => state.cahGame)


    // let state = {
    //     answers: [
    //         {   user: 'DM',
    //             id:'00',
    //             cardList: [
    //                 {id: '001', sentence: 'The gays'},
    //                 {id: '002', sentence: 'Mom'}
    //             ]},
    //         {   user:'Lexie',
    //             id:'01',
    //             cardList:[
    //                 { id: '003', sentence: 'Bees?' },
    //                 { id: '004', sentence: 'Dad' },
    //             ]},
    //         {   user:'ecc',
    //             id:'02',
    //             cardList:[
    //                 {id: '005', sentence: 'Grandmom'},
    //                 {id: '006', sentence: 'Grandpa'}
    //             ]
    //         } 
    //     ],
    //     blackcard:'You say tomato, I say _____.'
    // }

    return (
         <Popup>
                <h1>GameAnswerSelectionView</h1>
              
                {/* <GameStartPopup /> */}
                <div className='gameAnswerSelectionArea'>
                    <div><Title /></div>
                    <div className="cardsBox">
                        <div className="blackcard">
                            <BlackCard blackcard={currentQuestion}/>
                            {/* <BlackCard blackcard={state.currentQuestion.cardText}/> */}
                        </div>
                        <div className="white">
                            <p>The white cards played this round are:</p>
                    
                            <div className="whitecard">
                                { playerAnswerList.map(
                                    (answer, index)=> <Answer answer={answer} key={index} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="Button">
                        <div className="buttonConfirm"><ButtonConfirm /></div>
                        {/* <div className="buttonLeave"><ButtonLeave /></div> */}
                    </div>
                    
                
                    {/* <Question />
                <Answers />
                <Hand />
                <GameStatus /> */}
                    {/* <button onClick={startGame}> Start Game </button> */}
                    {/* -><CreateGamePopup />> */}
                </div>
            </Popup>
    )
}

export default AnswerSelectPopup
