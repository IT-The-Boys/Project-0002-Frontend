import { StyledCarousel, StyledCarouselBG, StyledCarouselCard, StyledCarouselCardTitle } from 'components/styles/div/CahCarousel.styled';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { clearSetData, getSetList, setActiveExpansion } from 'store/database/cahSlice';

// const CahSetCard = ({ set }) => {
//     return (
//         <StyledCarouselCard>
//             <Link to={set?.id || "null"}>
//                 <StyledCarouselCardTitle>
//                     {set?.setName}
//                 </StyledCarouselCardTitle>
//             </Link>
//         </StyledCarouselCard>
//     )
// }


const CahSetList = () => {
    const eN = useParams().expansion;
    const sI = useParams().setId;
    const {
        setList, expansionList } = useSelector((state) => state.cahWiki);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSetSelect = (e) => {
        e.preventDefault();
        navigate(e.target.value)
    }
    useEffect(() => {
        if (eN) {
            dispatch(setActiveExpansion(eN.toUpperCase()))
            dispatch(clearSetData());
            dispatch(getSetList());
            if (sI) navigate(sI);
        } else {
            expansionList.length>0 && navigate(expansionList[1].name.toLowerCase())
        }
    }, [dispatch, eN, navigate, sI, expansionList])
    return (
    <>
        {/* <StyledCarouselBG> */}
            {console.log("render wiki nav")}
            <h1>{setList[0]?.setExpansion.title}</h1>
        {/* <StyledCarousel>
            <CahSetCard /><CahSetCard />
        </StyledCarousel> */}
            {<select onChange={handleSetSelect} value={sI ? sI : "ph"}>
                {!sI && <option value="ph">Select set</option>}
                {setList?.map((set, i) =>
                    <option key={i} value={set.id}>{set.setName}</option>
                )}
            </select>}
            {/* 
            <Outlet /> */}
        {/* </StyledCarouselBG> */}
        </>

    )
}

export default CahSetList
