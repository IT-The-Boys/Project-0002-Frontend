import React, { useState } from 'react'
import ServerList from 'components/list/LobbyServerList'
import GameFilterForm from 'components/forms/GameFilterForm'
import GameAnswer from 'components/GameAnswer/GameAnswer'



const GameAnswerSelectionView = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <h1>GameAnswerSelectionView</h1>
            <GameFilterForm />
            <div>
                <input type='button' value='Create Your Answer' onClick={togglePopup} />
                { isOpen && <GameAnswer 
                    handleClose={togglePopup}
                />}
            </div>
            {/* <ServerList /> */}
        </div>
    )
}

export default GameAnswerSelectionView

// export default class GameAnswerSelectionView extends Component {
//     //èâä˙èÛë‘
//     state={whitecards:[
//         {id:'001',sentence:'The gays'},
//         {id:'002',sentence:'Mom'},
//         {id:'003',sentence:'Bees?'},
//     ]}
//     render() {
//         return (
//             <div>
//             <h1>GameAnswerSelectionView</h1>
//             {/* <GameStartPopup /> */}
//             <div className='gameAnswerSelectionArea'>
//                 <BlackCard />
//                 <CardList whitecards={this.state.whitecards}/>
                
//                 {/* <Question />
//                 <Answers />
//                 <Hand />
//                 <GameStatus /> */}
//                 <button onClick={startGame}> Start Game </button>
//                 {/* -><CreateGamePopup />> */}
//             </div>
//         </div>
//         )
//     }
// }

// function startGame(){
//     console.log('clicked');
//     window.alert('clicked me');
// }

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

