import {
    StyledCahCard,
    StyledCahCardHeader,
    StyledCahCardDeleteIcon,
    StyledCahCardEditIcon,
    StyledCahCardRestoreIcon,
    StyledCahCardText,
    StyledCahCardBody,
    StyledCahCardFooter,
    StyledCahCardSubText
} from 'components/styles/div/CahCard.styled.js'
import React from 'react'
import deleteStamp from 'assets/images/deleteStamp.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, restoreCard } from 'store/database/cahSlice'
import { BLACK_CARD, WHITE_CARD } from 'utils/constants/cahConstants'
import { TYPE_BLACK, TYPE_BLACK_DELETED, TYPE_BLACK_EDITED, TYPE_BLACK_INVALID, TYPE_UNDEFINED, TYPE_WHITE, TYPE_WHITE_DELETED, TYPE_WHITE_EDITED, TYPE_WHITE_INVALID } from 'utils/constants/cahWikiConstants'

const ActionList = ({ actions }) => {
    return (
        <StyledCahCardSubText>
            {Object.keys(actions).map((key, index) => <>{key.toUpperCase()}: {actions[key]}</>)}
        </StyledCahCardSubText>
    )
}

const CahCard = ({ card, border, editMode, idx }) => {
    let cardType;
    const { tempCardIdList } = useSelector(state => state.cahWiki)
    const dispatch = useDispatch()
    switch (card.cardType) {
        case BLACK_CARD:
            if (tempCardIdList.includes(idx)) {
                cardType = card.isDeleted ? TYPE_BLACK_DELETED : card.isValid ? TYPE_BLACK_EDITED : TYPE_BLACK_INVALID;
            } else {
                cardType = TYPE_BLACK;
            }
            break;
        case WHITE_CARD:
            if (tempCardIdList.includes(idx)) {
                cardType = card.isDeleted ? TYPE_WHITE_DELETED : card.isValid ? TYPE_WHITE_EDITED : TYPE_WHITE_INVALID;
            } else {
                cardType = TYPE_WHITE;
            }
            break;
        default:
            cardType = TYPE_UNDEFINED;
    }
    return (
        <StyledCahCard type={cardType} border={border}>
            <StyledCahCardHeader>
                {editMode ?
                    <>
                        {card.isDeleted ?
                            <StyledCahCardRestoreIcon onClick={() => {
                                dispatch(restoreCard(idx))
                            }
                            } />
                            :
                            <StyledCahCardDeleteIcon onClick={() => {
                                dispatch(deleteCard(idx))
                            }
                            } />
                        }
                        <StyledCahCardEditIcon />
                    </> : null
                }

            </StyledCahCardHeader>
            <StyledCahCardBody stamp={card.isDeleted ? deleteStamp : null}>
                <StyledCahCardText type={cardType}>{card?.cardText}</StyledCahCardText>
                {card.cardType === 'QUESTION' && card.cardActions && <ActionList actions={card.cardActions} />}
            </StyledCahCardBody>

            <StyledCahCardFooter />
        </StyledCahCard>
    )
}

export default CahCard
