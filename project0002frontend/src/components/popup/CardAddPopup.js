import CahCardForm from 'components/forms/cah/CahCardForm'
import CahCardListForm from 'components/forms/cah/CahCardListForm'
import { StyledPopup, StyledPopupBG, StyledPopupCloseBtn, StyledPopupContent, StyledPopupHeader, StyledPopupTab, StyledPopupTitle } from 'components/styles/div/Popup.styled'
import React from 'react'
import { useEffect } from 'react'
import reactDom from 'react-dom'
import { BiListPlus, BiPlus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, togglePopup } from 'store/ui/modalSlice'
import { CARD_MODE_BULK, CARD_MODE_EDIT, CARD_MODE_SINGLE } from 'utils/constants/config'

const CardAddPopup = () => {
    const { addCardPopup, addCardMode } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const modeHandler = (mode) => {
        dispatch(setMode(["addCardMode", mode]))
    }
    const clickHandler = (e) => {
        if (e.target === e.currentTarget) dispatch(togglePopup("addCardPopup"));
    }
    useEffect(() => {
        const keyboardHandler = (e) => {
            switch (e.keyCode) {
                case 27:
                    dispatch(togglePopup("addCardPopup"));
                    break;
                case 37:
                case 39:
                    addCardMode === CARD_MODE_BULK ?
                        dispatch(setMode(["addCardMode", CARD_MODE_SINGLE])) :
                        dispatch(setMode(["addCardMode", CARD_MODE_BULK]))
                    break;
                default:
                    return null;
            }
        }
        if (addCardPopup) window.addEventListener('keydown', keyboardHandler);
        return () => window.removeEventListener('keydown', keyboardHandler)
    }, [addCardMode, addCardPopup, dispatch])
    return reactDom.createPortal(
        <>
            {addCardPopup ? (
                <StyledPopupBG onClick={clickHandler}>
                    <StyledPopup>
                        <StyledPopupHeader>
                            {addCardMode===CARD_MODE_EDIT ?
                              <StyledPopupTab onClick={() => modeHandler(CARD_MODE_SINGLE)}><StyledPopupTitle active={addCardMode === CARD_MODE_SINGLE}>Add card</StyledPopupTitle><BiPlus /></StyledPopupTab> : 
                              <>
                            <StyledPopupTab onClick={() => modeHandler(CARD_MODE_SINGLE)}><StyledPopupTitle active={addCardMode === CARD_MODE_SINGLE}>Add card</StyledPopupTitle><BiPlus /></StyledPopupTab>
                            <StyledPopupTab onClick={() => modeHandler(CARD_MODE_BULK)}><StyledPopupTitle active={addCardMode === CARD_MODE_BULK }>Add cards</StyledPopupTitle><BiListPlus /></StyledPopupTab>
                            </>
                            }
                            <StyledPopupCloseBtn onClick={() => dispatch(togglePopup("addCardPopup"))} />
                        </StyledPopupHeader>
                        <StyledPopupContent>
                            {addCardMode === CARD_MODE_BULK ? <CahCardListForm /> : <CahCardForm />}
                        </StyledPopupContent>

                    </StyledPopup>
                </StyledPopupBG>
            ) : null
            }
        </>,
        document.getElementById("modal")
    )
}

export default CardAddPopup
