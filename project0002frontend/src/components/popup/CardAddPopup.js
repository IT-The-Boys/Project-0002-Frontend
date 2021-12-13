import CahCardForm from 'components/forms/cah/CahCardForm'
import CahCardListForm from 'components/forms/cah/CahCardListForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidePopup } from 'store/ui/modalSlice'

const CardAddPopup = () => {
    const { addCardPopup } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    return (
        <>
            {addCardPopup ? (
                <div>
                    <button onClick={() => dispatch(hidePopup("addCardPopup"))}> close</button>
                    <CahCardListForm />
                    <CahCardForm /> 
                </div>
            ) : null}
        </>
    )
}

export default CardAddPopup
