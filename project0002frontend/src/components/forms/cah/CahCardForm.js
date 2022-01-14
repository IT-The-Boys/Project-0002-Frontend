import CahCard from 'components/card/CahCard';
import {
    StyledFormContainer,
    StyledInputContainer,
    StyledPreviewContainer,
    StyledFieldGroup,
    StyledFormHeader,
    StyledFieldLabel,
    StyledBtn,
    StyledSwitch,
    StyledSwitchSpan
} from 'components/styles/form/AddCardForm.styled';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearForm, setField } from 'store/app/formSlice';
import { addCard } from 'store/database/cahSlice';
import { hidePopup } from 'store/ui/modalSlice';
import { deleteAttributesWithValue } from 'utils/ObjectUtils';

const CahCardForm = () => {

    const dispatch = useDispatch();
    const { addCardPopup } = useSelector(state => state.modal)
    const { cardForm } = useSelector(state => state.form)
    const [hasActions, setHasActions] = useState(false)
    const [edited, setEdited] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        let cleanedData = deleteAttributesWithValue(cardForm, [null, undefined], true)
        //ToDo add form validation
        dispatch(addCard(cleanedData));
        dispatch(clearForm("cardForm"));
        dispatch(hidePopup("addCardPopup"));
    }
    const changeHandler = (e) => {
        const { id, value } = e.target;
        dispatch(setField(["cardForm", id, value]))
        setEdited(true)
    }
    const switchHandler = () => {
        if (cardForm.cardType === "ANSWER") {
            dispatch(setField(["cardForm", "cardType", "QUESTION"]))
            setEdited(true)
        } else {
            dispatch(setField(["cardForm", "cardType", "ANSWER"]))
            setEdited(false)
        }

    }
    const resetHandler = () => {
        dispatch(clearForm("cardForm"));
        setHasActions(false);
        setEdited(false);
    }


    return (
        <>
            {addCardPopup ? (
                <StyledFormContainer>
                    <StyledInputContainer>
                        <form onSubmit={submitHandler}>
                            <StyledFormHeader>Add card</StyledFormHeader>
                            <StyledFieldGroup>
                                <StyledSwitch onClick={switchHandler} color={cardForm.cardType === "ANSWER" ? "white" : "black"} >
                                    <StyledSwitchSpan color={cardForm.cardType === "ANSWER" ? "black" : "white"}>
                                        {cardForm.cardType === "ANSWER" ? "White" : "Black"}
                                    </StyledSwitchSpan>
                                </StyledSwitch>
                            </StyledFieldGroup>
                            <StyledFieldGroup row={5}>
                                <StyledFieldLabel>Text:</StyledFieldLabel>
                                <textarea placeholder='Enter card text' id="cardText" value={cardForm.cardText} onChange={changeHandler} rows="3" cols="30" />
                            </StyledFieldGroup>
                            <StyledFieldGroup row={4}>
                                {cardForm.cardType === "QUESTION" && <div>has actions <input type="checkbox" onChange={() => setHasActions(!hasActions)} /></div>}
                                {hasActions &&
                                    <>
                                        <StyledFieldLabel>Pick:</StyledFieldLabel>
                                        <input type="text" placeholder="" id="pick"
                                            value={cardForm.pick}
                                            onChange={changeHandler} />
                                        <StyledFieldLabel>
                                            Draw:
                                        </StyledFieldLabel>
                                        <input type="text" placeholder="" id="draw"
                                            value={cardForm.draw}
                                            onChange={changeHandler} />
                                    </>}
                            </StyledFieldGroup>
                            <StyledFieldGroup row={5}>
                                <StyledBtn type="button"
                                    visible={edited} onClick={resetHandler}>reset</StyledBtn>
                                <StyledBtn type="submit" visible={true} disabled={cardForm.cardText ? false : true}>add</StyledBtn>

                            </StyledFieldGroup>

                        </form>
                    </StyledInputContainer>
                    <StyledPreviewContainer cardType={cardForm.cardType}>
                        <CahCard card={cardForm} border={false} editMode={false} />
                    </StyledPreviewContainer>
                </StyledFormContainer>
            ) : null

            }
        </>
    )
}

export default CahCardForm
