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
    StyledSwitchSpan,
    StyledCardText,
    StyledFooter
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
        let data={}
        data["cardType"] = cleanedData["cardType"];
        data["cardText"] = cleanedData["cardText"];
        if (cleanedData.pick||cleanedData.draw) {
            if (cleanedData.pick) data["cardActions"]["pick"]=cleanedData.pick
            if (cleanedData.draw) data["cardActions"]["draw"]=cleanedData.draw
        }
   
        //ToDo add form validation
        dispatch(addCard(data));
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
                                <StyledFieldLabel>Enter card text:</StyledFieldLabel>
                                <StyledCardText placeholder='Enter card text' id="cardText" value={cardForm.cardText} onChange={changeHandler} rows="3" cols="30" />
                            </StyledFieldGroup>
                            <StyledFieldGroup row={4}>
                                {cardForm.cardType === "QUESTION" && 
                                <>Card actions 
                                <StyledSwitch type="checkbox" onChange={() => setHasActions(!hasActions)}></StyledSwitch>
                                </>}
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
                            <StyledFooter row={5} >
                                <StyledBtn type="submit" cursor="cell" visible={true} disabled={cardForm.cardText ? false : true}>add</StyledBtn>
                                <StyledBtn type="button"
                                    visible={edited}  cursor="pointer"onClick={resetHandler}>reset</StyledBtn>
                            </StyledFooter>

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
