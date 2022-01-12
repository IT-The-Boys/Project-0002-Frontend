import { StyledScrollable, StyledScrollableBG, StyledScrollableCard } from 'components/styles/div/Scrollable.styled';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import { clearSetData, getSetList, setActiveExpansion } from 'store/database/cahSlice';



const CahSetList = () => {
    const sI = useParams().setId;
    const eN = useParams().expansion;
    const {
        setList, expansionList } = useSelector((state) => state.cahWiki);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const eI = expansionList.findIndex(e => e.name === eN?.toUpperCase())
        if (eI !== -1) dispatch(setActiveExpansion(eI));
        dispatch(clearSetData());
        dispatch(getSetList());
        if (sI) navigate(sI);
    }, [dispatch, eN, expansionList, navigate, sI])
    return (
        <>
            {setList?.length > 0 ?
                <StyledScrollableBG>
                    <StyledScrollable>
                        {setList.map((set, index) =>
                            <StyledScrollableCard key={index} data-title={set.setName}>{set.setName}</StyledScrollableCard>
                        )}
                    </StyledScrollable>
                </StyledScrollableBG>
                :
                null
            }
            <Outlet />
        </>

    )
}

export default CahSetList
