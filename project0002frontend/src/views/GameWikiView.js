import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
    initializeWiki,
    clearSetData,
    setActiveExpansion,
    setActiveSet,
    getSetList,
    getSet
} from 'store/wiki/cahSlice';
const ExpansionBlock = () => {
    const dispatch = useDispatch();
    const { expansionStatus, expansionList, activeExpansion } = useSelector((state) => state.cahWiki);

    const handleExpansionClick = (code) => {
        dispatch(setActiveExpansion(code))
        dispatch(clearSetData())
        dispatch(getSetList())
    }
    return (

        <div>
            {expansionList.map(exp => <button onClick={() => handleExpansionClick(exp.code)} key={exp.code}>{exp.name}</button>)}
            <h1>
                {expansionStatus === "succeeded" && expansionList[activeExpansion].name}
            </h1>
        </div>

    )
}

const SetBlock = () => {
    const {
        setList, setListStatus } = useSelector((state) => state.cahWiki);
    const dispatch = useDispatch();
    const handleSetSelect = (e) => {
        e.preventDefault();
        dispatch(setActiveSet(e.target.value))
        dispatch(getSet())
    }
    return (
        <div>
            {setListStatus === "succeeded" && <select onChange={handleSetSelect}>
                <option value="" defaultValue>Select set</option>
                {setList.map((set, i) =>
                    <option key={i} value={set.id}>{set.setName}</option>
                )}
            </select>}

        </div>
    )
}

const SetViewBlock = () => {
    const { setStatus, setData } = useSelector((state) => state.cahWiki);
    return (
        <div>
            {setStatus === "succeeded" && setData.setInfo.setName}
        </div>
    )
}



const GameWikiView = () => {
    const gameName = useParams().game;
    const dbStatus = useSelector((state) => state.cahWiki).dbStatus;
    const  user = useSelector((state) => state.auth).user["userRoles"];
    const dispatch = useDispatch();
    useEffect(() => {
        if (dbStatus === 'idle') dispatch(initializeWiki());
    }, [dispatch, dbStatus])


    return (
        <div>
            game wiki {gameName}
            <ExpansionBlock />
            <SetBlock />
            <SetViewBlock />
            {console.log(user)}
            {/* {user.userRoles.includes("USER") && <button>Add</button>} */}
        </div>
    )
}

export default GameWikiView
