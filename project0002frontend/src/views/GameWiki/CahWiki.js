import AddCardBtn from 'components/buttons/AddCardBtn';
import CardAddPopup from 'components/popup/CardAddPopup';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import { setTheme } from 'store/app/appSlice';
import { getExpansionList } from 'store/database/cahSlice';
import CahExpansions from './CahExpansions'
import CahSetList from './CahSetList';

const WikiNav = () => {
    return (
        <div>
            <CahSetList />
        </div>
    )
}

const CahWiki = () => {
    const dbConnect = useSelector((state) => state.cahWiki).dbConnect;
    const {currentTheme} = useSelector(state => state.app)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentTheme.name!=="cahTheme") dispatch(setTheme("cahTheme"))
        if (dbConnect === 'idle') dispatch(getExpansionList());
    }, [dispatch, dbConnect, currentTheme.name])

    
    return (
        <>
            <WikiNav />
            <CardAddPopup />
            <Outlet />
        </>

    )
}

export default CahWiki
