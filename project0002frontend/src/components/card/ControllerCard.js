import {  StyledControllerCard } from 'components/styles/div/CahCard.styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePopup } from 'store/ui/modalSlice'


const ControllerCard = ({disabled, icon, functional}) => {
    const dispatch = useDispatch()
    
    return (
        <StyledControllerCard disabled={disabled} 
        onClick={() => dispatch(functional)}>

            {icon}

        </StyledControllerCard>
    )
}

export default ControllerCard
