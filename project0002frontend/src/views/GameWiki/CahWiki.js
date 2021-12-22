import CahSearchForm from 'components/forms/cah/CahSearchForm';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import { setTheme } from 'store/app/appSlice';
import { getExpansionList } from 'store/database/cahSlice';
import CahExpansions from './CahExpansions'

const WikiNav = () => {
    return (
        <>
            <CahSearchForm />
            <CahExpansions />

        </>

    )
}

const CahWiki = () => {
    const dbConnect = useSelector((state) => state.cahWiki).dbConnect;
    const { currentTheme } = useSelector(state => state.app)
    const dispatch = useDispatch();
    useEffect(() => {
        if (dbConnect === 'idle') dispatch(getExpansionList());
    }, [dispatch, dbConnect, currentTheme.name])


    return (
        <>
            <WikiNav />
            <Outlet />
        </>

    )
}

export default CahWiki
