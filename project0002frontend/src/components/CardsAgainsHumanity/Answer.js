import WhiteCard from 'components/GameAnswer/WhiteCard'
import React, { useState } from 'react'
import "./Answer.css"


const Answer = ({answer}) => {
    const [select, setSelect] = useState(false);
    const clickHandler=()=>{
        if (select) {
            console.log(answer.user)
            setSelect(false);
        }
        else {
            setSelect(true);
        }

    }
    return (
        <div className="answer" onClick={clickHandler}>
            {answer.cardList.map( (card, index) => 
                        <WhiteCard key={index} sentence={card.sentence}/>
                    )
            }
        </div>
    )
}

export default Answer
