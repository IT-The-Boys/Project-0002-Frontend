import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSet, setActiveSet } from '../../store/wiki/cahSlice';
import CahSetCardListView from './CahSetCardListView';
import CahSetInfoView from './CahSetInfoView';

const CahSetView = () => {
    const id = useParams().setId;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveSet(id));
        dispatch(getSet());
    }, [dispatch, id])
    return (
        <div>
            <CahSetInfoView />
            <CahSetCardListView />
        </div>
    )
}

export default CahSetView
