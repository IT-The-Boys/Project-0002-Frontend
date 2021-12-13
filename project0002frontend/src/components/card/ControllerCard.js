import { StyledCahCardAddIcon, StyledControllerCard } from 'components/styles/div/CahCard.styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePopup } from 'store/ui/modalSlice'


const ControllerCard = ({disabled}) => {
    const dispatch = useDispatch()
    
    return (
        <StyledControllerCard disabled={disabled} 
        onClick={() => dispatch(togglePopup("addCardPopup"))}>

            <StyledCahCardAddIcon />

        </StyledControllerCard>
    )
}

export default ControllerCard
