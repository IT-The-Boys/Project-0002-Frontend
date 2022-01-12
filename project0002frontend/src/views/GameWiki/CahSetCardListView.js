import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardList from 'components/list/CardList'
import { CARD_LIST_CAROUSEL, CARD_LIST_GRID } from 'utils/constants/cahWikiConstants'
import CardAddPopup from 'components/popup/CardAddPopup'

const CahSetCardListView = () => {
    const { setData } = useSelector(state => state.cahWiki)
    const [view, setView] = useState(CARD_LIST_CAROUSEL)
    const { user } = useSelector((state) => state.auth);
    const writePermission = setData?.setInfo?.setExpansion?.writePermission;
    const hasPermission = writePermission ? user && setData.setInfo && user.userRoles.includes(setData.setInfo.setExpansion.writePermission) : false;
    return (
        <>
            <button onClick={() => setView(CARD_LIST_CAROUSEL)}>List</button>
            <button onClick={() => setView(CARD_LIST_GRID)}>Grid</button>
            <CardAddPopup />
            {setData?.cardList && <CardList title={"Cards to be saved"}
                view={view}
                cardList={setData.cardList}
                editMode={hasPermission} />}
        </>
    )
}

export default CahSetCardListView
