import CahCardListForm from 'components/forms/cah/CahCardListForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CahCardForm from 'components/forms/cah/CahCardForm'

const CahSetCardListView = () => {
    const { newCardList } = useSelector(state => state.cahWiki)
    const [setFormOpen, setSetFormOpen] = useState(false)
    const [setListFormOpen, setSetListFormOpen] = useState(false)
    const toggleSetFormHandler = () => {
        setSetFormOpen(!setFormOpen)
        setSetListFormOpen(false)
    }
    const toggleSetFormListHandler = () => {
        setSetFormOpen(false)
        setSetListFormOpen(!setListFormOpen)
    }

    const dispatch = useDispatch()
    return (
        <div>
            cards
            <button onClick={toggleSetFormHandler}>add card</button>
            <button onClick={toggleSetFormListHandler}>add bulk</button>
            <div>Card list</div>
            {setFormOpen && <CahCardForm toggleHandler={toggleSetFormHandler} />}
            {setListFormOpen && <CahCardListForm toggleHandler={toggleSetFormListHandler} />}
            {newCardList && <div>new Card list</div>}
        </div>
    )
}

export default CahSetCardListView
