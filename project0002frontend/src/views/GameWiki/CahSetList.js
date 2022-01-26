import { StyledScrollable, StyledScrollableBG, StyledScrollableCard, StyledScrollableLink } from 'components/styles/div/Scrollable.styled';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import { clearSetData, getSetList, setActiveExpansion } from 'store/database/cahSlice';



const CahSetList = () => {
    const setListRef = useRef(null)
    const sI = useParams().setId;
    const eN = useParams().expansion;
    const {
        setList,
        activeSet,
        expansionList } = useSelector((state) => state.cahWiki);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const eI = expansionList.findIndex(e => e.name === eN?.toUpperCase())
        if (eI !== -1) dispatch(setActiveExpansion(eI));
        dispatch(clearSetData());
        dispatch(getSetList());

        const setR = setListRef.current
        if (setR) {
            console.log("scrolling")
            // //find current set index
            // const setIndex=setList.findIndex(set=>set.id===activeSet)
            // setR.scrollTo({
            //     left: 200*(setIndex-1),
            //     behavior: "smooth"
            // })
            const onWheel = e => {
                e.preventDefault();
                setR.scrollTo({
                    left: setR.scrollLeft + e.deltaY * 4,
                    behavior: "smooth"
                })
            }
            setR.addEventListener("wheel", onWheel);
            return () => {
                setR.removeEventListener("wheel", onWheel);
            }
        }
    }, [dispatch, eN, expansionList, navigate, sI])
    return (
        <>
            {setList?.length > 0 ?
                <StyledScrollableBG ref={setListRef}>
                    <StyledScrollable>
                        {setList.map((set, index) =>
                            <StyledScrollableLink to={set.id} key={index}>
                                <StyledScrollableCard
                                    data-title={set.setName}
                                    current={set.id === sI}
                                >

                                    {set.setName}
                                </StyledScrollableCard>
                            </StyledScrollableLink>
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
