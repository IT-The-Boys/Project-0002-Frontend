import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from 'store/database/cahSlice';
import { hidePopup } from 'store/ui/modalSlice';
import { deleteAttributesWithValue } from 'utils/ObjectUtils';

const CahCardListForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState("");
    const changeHandler = (e) => {
        const rawInput = e.target.value;
        const rawCardList = rawInput.split('\n')
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
        setFormData(cardList)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let cleanedData = deleteAttributesWithValue(formData, [null, undefined], true)
        dispatch(addCard(cleanedData))
        dispatch(hidePopup("addCardBulkPopup"));

    }

    return (
        <>
            {true ?
                <div>
                    <textarea onChange={changeHandler} placeholder="cardType|cardText|pick|0|draw|0"></textarea>
                    <button onClick={submitHandler}>add</button>
                </div> :
                null
            }
        </>
    )
}

export default CahCardListForm
