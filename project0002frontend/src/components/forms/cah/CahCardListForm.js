import { StyledBtn, StyledCardText, StyledFieldGroup, StyledFooter, StyledFormContainer, StyledInputListContainer } from 'components/styles/form/AddCardForm.styled';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from 'store/database/cahSlice';
import { togglePopup } from 'store/ui/modalSlice';
import { deleteAttributesWithValue } from 'utils/ObjectUtils';

const CahCardListForm = () => {
    const dispatch = useDispatch()
    const [rawData, setRawData] = useState("")
    const changeHandler = (e) => {
        setRawData( e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const rawCardList = rawData.split('\n')
        const cardList = rawCardList
            .map(card => card.split('|'))
            .map((card, i) => {
                return {
                    cardType: card[0],
                    cardText: card[1],
                    cardActions: {
                        pick: card[2],
                        draw: card[3]
                    }
                }
            })
        let cleanedData = deleteAttributesWithValue(cardList, [null, undefined], true)
        dispatch(addCard(cleanedData))
        dispatch(togglePopup("addCardPopup"));

    }

    const resetHandler = () => {
        setRawData("")
    }
    
    return (
        <>
            {true ?
                <StyledFormContainer>
                    <StyledInputListContainer>
                        <StyledFieldGroup>
                            <StyledCardText onChange={changeHandler} cols="70" rows="20" placeholder="cardType|cardText|pick|0|draw|0" value={rawData}/>
                        </StyledFieldGroup>
                        <StyledFooter row={5} >
                                <StyledBtn type="submit" 
                                cursor="cell" 
                                onClick={submitHandler}
                                visible={true} disabled={ rawData ? false : true}
                                >add</StyledBtn>
                                <StyledBtn type="button"
                                    visible={rawData}  cursor="pointer"onClick={resetHandler}>reset</StyledBtn>
                            </StyledFooter>
                    </StyledInputListContainer>
                </StyledFormContainer> :
                null
            }
        </>
    )
}

export default CahCardListForm
