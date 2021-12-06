import React from 'react'

const ActionList = ({actions}) => {
    return (
        <div>
            {Object.keys(actions).map((key, index) => <div key={index}>{key}:{actions[key]}</div>)}
        </div>
    )
}

const CahCard = ({ card, editMode, editCard }) => {
    return (
        <div>
            {editMode && <button>x</button>}
            <button onClick={editCard}>edit</button>
            {card.cardText}
            <h6>{card.cardType}</h6>
            {card.cardType === 'QUESTION' && card.cardActions && <ActionList actions={card.cardActions} />}
        </div>
    )
}

export default CahCard
