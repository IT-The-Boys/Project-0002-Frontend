import CahCardListForm from 'components/forms/cah/CahCardListForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CahCardForm from 'components/forms/cah/CahCardForm'
import CardList from 'components/list/CardList'

const CahSetCardListView = () => {
    const { newCardList, setData } = useSelector(state => state.cahWiki)
    const { user } = useSelector((state) => state.auth);
    const writePermission = setData?.setInfo?.setExpansion?.writePermission;
    const hasPermission = writePermission ? user && setData.setInfo && user.userRoles.includes(setData.setInfo.setExpansion.writePermission) : false;
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
            <button disabled={!hasPermission} onClick={toggleSetFormHandler}>add card</button>
            <button disabled={!hasPermission} onClick={toggleSetFormListHandler}>add bulk</button>
            <div>Card list</div>
            {setFormOpen && <CahCardForm toggleHandler={toggleSetFormHandler} />}
            {setListFormOpen && <CahCardListForm toggleHandler={toggleSetFormListHandler} />}
            {hasPermission && newCardList &&
                <CardList title={"Cards to be saved"}
                    cardList={newCardList}
                    editMode={true}
                    editCard={toggleSetFormHandler} />}
            {setData?.cardList && <CardList title={"Cards in DB"} cardList={setData.cardList} />}

        </div>
    )
}

export default CahSetCardListView
