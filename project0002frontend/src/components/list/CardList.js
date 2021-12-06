import CahCard from 'components/card/CahCard'
import React from 'react'

const CardList = ({ cardList, title, editMode, editCard }) => {
    return (
        <div>
            <h4>{title}</h4>
            {editMode && cardList.length>0 && <button> Save </button>}
            {cardList.map((card, index) => <CahCard card={card} key={index} editMode={editMode} editCard={editCard}/>)}
        </div>
    )
}

export default CardList
