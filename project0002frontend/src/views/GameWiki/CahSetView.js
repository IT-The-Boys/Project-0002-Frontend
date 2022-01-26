import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSet, setActiveSet } from 'store/database/cahSlice';
import CahSetCardListView from './CahSetCardListView';

const CahSetView = () => {
    const id = useParams().setId;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveSet(id));
        dispatch(getSet());
    }, [dispatch, id])
    return (
        <CahSetCardListView />
    )
}

export default CahSetView
