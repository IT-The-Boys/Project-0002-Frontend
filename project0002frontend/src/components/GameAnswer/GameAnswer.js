import React, { Component } from 'react'
import CardList from './CardList'
import BlackCard from './BlackCard'
import Title from './TitleName'
import ButtonConfirm from './Button/ButtonConfirm'
// import ButtonLeave from './Button/ButtonLeave'
import Nav from './Nav'
import './GameAnswer.css'


export default class CreateGameAnswer extends Component {
    //èâä˙èÛë‘
    state = {
        answers: [
            {   user: 'DM',
                id:'00',
                cardList: [
                    {id: '001', sentence: 'The gays'},
                    {id: '002', sentence: 'Mom'}
                ]},
            {   user:'Lexie',
                id:'01',
                cardList:[
                    { id: '003', sentence: 'Bees?' },
                    { id: '004', sentence: 'Dad' },
                ]},
            {   user:'ecc',
                id:'02',
                cardList:[
                    {id: '005', sentence: 'Grandmom'},
                    {id: '006', sentence: 'Grandpa'}
                ]
            } 
        ],
        blackcard:'You say tomato, I say _____.'
    }

    render() {

        return (
            <div>
                <h1>GameAnswerSelectionView</h1>
              
                {/* <GameStartPopup /> */}
                <div className='gameAnswerSelectionArea'>
                    <div><Title /></div>
                    <div><Nav /></div>
                    <div className="cardsBox">
                        <div className="blackcard"><BlackCard blackcard={this.state.blackcard}/></div>
                        <div className="white">
                            <p>The white cards played this round are:</p>
                            <div className="whitecard">
                                { this.state.answers.map(
                                    (answer, index)=> <CardList answer={answer} users={answer.user} key={index} id={answer.id}/>
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
            </div>
        )
    }
}

// import React from 'react'


// const GameAnswerSelectionView = () => {

//     state={whitecards:[
//         {id:'001',word:'The gays'},
//         {id:'002',word:'Mom'},
//         {id:'003',word:'Bees?'},
//     ]}
//     return (
//         <div>
//             <h1>GameAnswerSelectionView</h1>
//             {/* <GameStartPopup /> */}
//             <div className='gameAnswerSelectionArea'>
//                 <WhiteCard whitecards={this.state.whitecards}/>

//                 {/* <Question />
//                 <Answers />
//                 <Hand />
//                 <GameStatus /> */}
//                 <button onClick={startGame}> Start Game </button>
//                 {/* -><CreateGamePopup />> */}
//             </div>
//         </div>
//     )
// }

// function startGame(){
//     console.log('clicked');
//     window.alert('clicked me');
// }



// export default GameAnswerSelectionView

