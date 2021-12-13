import { StyledCahCard, StyledCahCardHeader, StyledCahCardDeleteIcon, StyledCahCardDeleteStamp, StyledCahCardEditIcon, StyledCahCardRestoreIcon, StyledCahCardText, StyledCahCardBody, StyledCahCardFooter, StyledCahCardStamp, StyledCahCardSubText } from 'components/styles/div/CahCard.styled.js'
import React from 'react'
import deleteStamp from 'assets/images/deleteStamp.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, restoreCard } from 'store/database/cahSlice'
import { BLACK_CARD, WHITE_CARD } from 'utils/constants/cahConstants'

const ActionList = ({ actions }) => {
    return (
        <StyledCahCardSubText>
            {Object.keys(actions).map((key, index) => <>{key.toUpperCase()}: {actions[key]}</>)}
        </StyledCahCardSubText>
    )
}

const CahCard = ({ card, border }) => {
    let cardType;
    const {deletedCardList} = useSelector(state => state.cahWiki)
    const deleted=deletedCardList?.includes(card.id);
    const dispatch = useDispatch()
    switch (card.cardType) {
        case BLACK_CARD:
            cardType = "black"; break;
        case WHITE_CARD:
            cardType = "white"; break;
        default: cardType = undefined;
    }
    return (
            <StyledCahCard type={cardType} border={border}>
                <StyledCahCardHeader>
                    {deleted ?
                    <StyledCahCardRestoreIcon onClick={() => {
                        dispatch(restoreCard(card.id))
                    }
                    } />
                    :
                    <StyledCahCardDeleteIcon onClick={() => {
                        dispatch(deleteCard(card.id))
                    }
                    } />
                    }
                    <StyledCahCardEditIcon />
                </StyledCahCardHeader>
                <StyledCahCardBody>
                    {deleted ? <StyledCahCardStamp stamp={deleteStamp}/> :null}
                    <StyledCahCardText type={cardType}>{card?.cardText}</StyledCahCardText>
                    {card.cardType === 'QUESTION' && card.cardActions && <ActionList actions={card.cardActions} />}
                </StyledCahCardBody>
                
                <StyledCahCardFooter />
            </StyledCahCard>
    )
}

export default CahCard
