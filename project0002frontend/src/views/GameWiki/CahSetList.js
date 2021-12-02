import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import { clearSetData, getSetList, setActiveExpansion } from '../../store/wiki/cahSlice';

const CahSetList = () => {
    const eN = useParams().expansion;
    const sI = useParams().setId;
    const {
        setList} = useSelector((state) => state.cahWiki);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSetSelect = (e) => {
        e.preventDefault();
        navigate(e.target.value)
    }
    useEffect(() => {
        dispatch(setActiveExpansion(eN.toUpperCase()))
        dispatch(clearSetData());
        dispatch(getSetList());
        if (sI) navigate(sI)
        
    }, [dispatch, eN, navigate, sI])
    return (
        <div>
            <h1>{eN}</h1>
            {<select onChange={handleSetSelect} value={sI?sI:"ph"}>
                {!sI && <option value="ph">Select set</option>}
                {setList?.map((set, i) =>
                    <option key={i} value={set.id}>{set.setName}</option>
                )}
            </select>}
            <Outlet />
        </div>
    )
}

export default CahSetList
