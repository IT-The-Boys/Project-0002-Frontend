import CahCardListForm from 'components/forms/cah/CahCardListForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CahCardForm from 'components/forms/cah/CahCardForm'
import CardList from 'components/list/CardList'
import { CARD_LIST_CAROUSEL, CARD_LIST_GRID } from 'utils/constants/cahWikiConstants'

const CahSetCardListView = () => {
    const { newCardList, setData } = useSelector(state => state.cahWiki)
    const [view, setView] = useState(CARD_LIST_CAROUSEL)
    const { user } = useSelector((state) => state.auth);
    const writePermission = setData?.setInfo?.setExpansion?.writePermission;
    const hasPermission = writePermission ? user && setData.setInfo && user.userRoles.includes(setData.setInfo.setExpansion.writePermission) : false;
    const dispatch = useDispatch()
    return (
        
        <>
            {console.log("render card list")}
            
            {/* <button disabled={!hasPermission} onClick={()=>dispatch(togglePopup("addCardPopup"))}>add card</button>
            <button disabled={!hasPermission} onClick={()=>dispatch(togglePopup("addCardBulkPopup"))}>add bulk</button> */}
            <button onClick={()=>setView(CARD_LIST_CAROUSEL)}>List</button>
            <button onClick={()=>setView(CARD_LIST_GRID)}>Grid</button>
            {hasPermission && newCardList &&
                <CardList title={"Cards to be saved"}
                    view = {view}
                    cardList={newCardList}
                    editMode={true}></CardList>}
            {setData?.cardList && <CardList title={"Cards in DB"} cardList={setData.cardList} />}

        </>
    )
}

export default CahSetCardListView
