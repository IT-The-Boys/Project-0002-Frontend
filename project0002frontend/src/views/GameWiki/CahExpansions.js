import {
    CahExpansionContainer,
    CahExpansionHeader,
    CahExpansionHeaderText,
    CahExpansionList,
    CahExpansionListContainer,
    CahExpansionListItem,
    StyledFaAngleDown,
    StyledFaAngleUp
} from 'components/styles/list/CahExpansion.styled';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setActiveExpansion } from 'store/database/cahSlice';


const CahExpansions = () => {
    const eN = useParams().expansion;
    const { expansionList, activeExpansion } = useSelector((state) => state.cahWiki);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    const clickHandler = (exp) => {
        setIsOpen(!isOpen);
        dispatch(setActiveExpansion(exp));
        const name = expansionList[exp].name.toLowerCase()
        navigate(name);
    }

    useEffect(() => {
        const eI = expansionList.findIndex(e => e.name === eN?.toUpperCase())
        dispatch(setActiveExpansion(eI))
    }, [dispatch, eN, expansionList])
    return (
        <CahExpansionContainer>
            <CahExpansionHeader onClick={toggleHandler}>
                <CahExpansionHeaderText>
                    {expansionList[activeExpansion]?.title || "Select expansion"}
                    {isOpen ? <StyledFaAngleUp /> : <StyledFaAngleDown />}
                </CahExpansionHeaderText>

            </CahExpansionHeader>
            {isOpen && <CahExpansionListContainer>
                <CahExpansionList>
                    {expansionList.length > 0 ?
                        <>
                            {expansionList.map((exp, index) =>
                                <CahExpansionListItem key={index} onClick={() => clickHandler(index)}>
                                   <span> {exp.title}</span>
                                </CahExpansionListItem>
                            )}
                        </> : null
                    }
                </CahExpansionList>
            </CahExpansionListContainer>}
        </CahExpansionContainer>
    )
}

export default CahExpansions
