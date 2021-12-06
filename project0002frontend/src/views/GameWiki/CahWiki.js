import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import { setTheme } from 'store/app/appSlice';
import { getExpansionList } from 'store/wiki/cahSlice';
import CahExpansions from './CahExpansions'

const CahWiki = () => {
    const dbConnect = useSelector((state) => state.cahWiki).dbConnect;
    const {currentTheme} = useSelector(state => state.app)
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentTheme.name!=="cahTheme") dispatch(setTheme("cahTheme"))
        if (dbConnect === 'idle') dispatch(getExpansionList());
    }, [dispatch, dbConnect])

    
    return (
        <div>
            <h1>Welcome to Cards Against Humanity wiki</h1>
            <CahExpansions />
            <Outlet />
        </div>

    )
}

export default CahWiki
